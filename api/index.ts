import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

dotenv.config({ path: ['.env.local', '.env'] });

const app = express();

const allowedOrigins = new Set([
    'https://5-d-landing-page.vercel.app',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
]);

app.disable('x-powered-by');
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('Cache-Control', 'no-store');
    next();
});
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.has(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error('Origin not allowed'));
    },
}));
app.use(express.json({ limit: '20kb' }));

// Initialize Supabase Client (Optional)
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || ''; // Use service role for backend
let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
}

const discoverySources = new Set(['social_media', 'music_event', 'friend', 'search', 'other']);
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 8;
const signupAttempts = new Map<string, { count: number; resetAt: number }>();

const getErrorMessage = (error: unknown) => {
    return error instanceof Error ? error.message : 'Error processing request';
};

const normalizePhone = (phone: unknown) => {
    if (typeof phone !== 'string' || !phone) return null;

    const digits = phone.replace(/\D/g, '');

    if (digits.length === 10) {
        return `+1${digits}`;
    }

    if (digits.length === 11 && digits.startsWith('1')) {
        return `+${digits}`;
    }

    return null;
};

const normalizeEmail = (email: unknown) => {
    return typeof email === 'string' ? email.trim().toLowerCase() : '';
};

const isLikelyEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const notifyOperationalIssue = async (title: string, detail: Record<string, unknown>) => {
    if (!process.env.ALERT_WEBHOOK_URL) {
        return;
    }

    try {
        await fetch(process.env.ALERT_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                service: '5d-landing-page',
                environment: process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown',
                detail,
                timestamp: new Date().toISOString(),
            }),
        });
    } catch (error: unknown) {
        console.error('Alert Webhook Error:', getErrorMessage(error));
    }
};

const getClientKey = (req: express.Request, email: string) => {
    const forwardedFor = req.headers['x-forwarded-for'];
    const ip = Array.isArray(forwardedFor)
        ? forwardedFor[0]
        : forwardedFor?.split(',')[0]?.trim() || req.ip || 'unknown';

    return `${ip}:${email}`;
};

const checkRateLimit = (key: string) => {
    const now = Date.now();
    const current = signupAttempts.get(key);

    if (!current || current.resetAt <= now) {
        signupAttempts.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
        return true;
    }

    if (current.count >= maxRequestsPerWindow) {
        return false;
    }

    current.count += 1;
    return true;
};

const getHealth = async () => {
    const supabaseConfigured = Boolean(supabase);
    const mailchimpConfigured = Boolean(process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID);
    let supabaseStatus: 'configured' | 'missing_config' | 'ok' | 'error' = supabaseConfigured ? 'configured' : 'missing_config';

    if (supabase) {
        const { error } = await supabase
            .from('waitlist')
            .select('email', { count: 'exact', head: true })
            .limit(1);

        supabaseStatus = error ? 'error' : 'ok';
    }

    return {
        status: supabaseStatus === 'error' || !supabaseConfigured ? 'error' : 'ok',
        service: '5d-landing-page',
        supabase: supabaseStatus,
        mailchimp: mailchimpConfigured ? 'configured' : 'missing_config',
        timestamp: new Date().toISOString(),
    };
};

// Initialize Mailchimp (Optional)
if (process.env.MAILCHIMP_API_KEY) {
    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_SERVER_PREFIX || 'us1', // e.g. 'us1'
    });
}

app.get(['/health', '/api/health'], async (req, res) => {
    try {
        const health = await getHealth();
        res.status(health.status === 'ok' ? 200 : 503).json(health);
    } catch (error: unknown) {
        console.error('Health Check Error:', error);
        res.status(503).json({
            status: 'error',
            service: '5d-landing-page',
            message: getErrorMessage(error),
            timestamp: new Date().toISOString(),
        });
    }
});

app.post('/api/join', async (req, res) => {
    const {
        name,
        email,
        phone,
        consent,
        source,
        discoverySource,
    } = req.body;

    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedEmail = normalizeEmail(email);
    const normalizedPhone = normalizePhone(phone);
    const normalizedSource = typeof source === 'string' ? source.trim() : 'landing-page';
    const normalizedDiscoverySource = typeof discoverySource === 'string' ? discoverySource.trim() : '';
    const hasConsent = Boolean(consent);

    if (!isLikelyEmail(normalizedEmail)) {
        return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!discoverySources.has(normalizedDiscoverySource)) {
        return res.status(400).json({ error: 'Please choose how you heard about Fifth Dimension.' });
    }

    if (!hasConsent) {
        return res.status(400).json({ error: 'Consent is required.' });
    }

    if (!checkRateLimit(getClientKey(req, normalizedEmail))) {
        return res.status(429).json({ error: 'Too many signup attempts. Please try again in a few minutes.' });
    }

    try {
        // 1. Save to Supabase (current schema-safe payload with future-ready metadata fallback)
        const supabaseClient = supabase;
        if (!supabaseClient) {
            await notifyOperationalIssue('Supabase signup config missing', { path: '/api/join' });
            return res.status(503).json({ error: 'Signup is temporarily unavailable. Please try again soon.' });
        }

        if (supabaseClient) {
            const payload = {
                name: normalizedName || null,
                email: normalizedEmail || null,
                phone: normalizedPhone,
            };

            const { data, error } = await supabaseClient
                .from('waitlist')
                .insert([payload])
                .select();

            console.log('SUPABASE_INSERT_RESULT:', { inserted: Boolean(data?.length), error: Boolean(error) });

            if (error) {
                console.error('Supabase Error:', error);

                const duplicateEmail =
                    typeof error.message === 'string' &&
                    (error.message.toLowerCase().includes('duplicate key') ||
                        error.message.toLowerCase().includes('unique constraint'));

                if (duplicateEmail) {
                    const alreadyOnListResponse = {
                        success: true,
                        alreadySignedUp: true,
                        message: 'You are already signed up for Fifth Dimension updates.',
                        meta: {
                            source: normalizedSource,
                            discoverySource: normalizedDiscoverySource,
                            duplicate: true,
                        },
                    };

                    console.log('API_RESPONSE_BODY', alreadyOnListResponse);
                    return res.status(200).json(alreadyOnListResponse);
                }

                await notifyOperationalIssue('Supabase signup insert failed', {
                    code: error.code,
                    message: error.message,
                });
                return res.status(500).json({ error: 'Could not save your signup. Please try again.' });
            }

            if (!data || data.length === 0) {
                console.error('Supabase Error: insert returned no rows');
                await notifyOperationalIssue('Supabase signup insert returned no rows', { path: '/api/join' });
                return res.status(500).json({ error: 'Could not save your signup. Please try again.' });
            }
        }

        // 2. Add to Mailchimp Audience (If email is provided and Mailchimp configured)
        let mailchimpSynced = false;
        if (normalizedEmail && process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID) {
            try {
                const mailchimpPayload = {
                    email_address: normalizedEmail,
                    status_if_new: 'subscribed',
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: normalizedName || undefined,
                    },
                    tags: [
                        'fifth-dimension',
                        'stage:new',
                        `source:${normalizedSource}`,
                        `discovery:${normalizedDiscoverySource}`,
                        normalizedPhone ? 'sms-candidate' : 'email-only',
                    ],
                };

                const mailchimpResult = await mailchimp.lists.setListMember(
                    process.env.MAILCHIMP_AUDIENCE_ID,
                    normalizedEmail,
                    mailchimpPayload
                );
                console.log('MAILCHIMP_RESULT:', { synced: Boolean(mailchimpResult) });
                mailchimpSynced = true;
            } catch (mcError: unknown) {
                const mailchimpError = mcError as { response?: { body?: { detail?: string } }; message?: string };
                console.error('Mailchimp Error:', mailchimpError.response?.body || mcError);
                await notifyOperationalIssue('Mailchimp signup sync failed', {
                    detail: mailchimpError.response?.body?.detail || mailchimpError.message || 'unknown error',
                });
            }
        }

        const successResponse = {
            success: true,
            message: 'Successfully joined the movement.',
            meta: {
                source: normalizedSource,
                discoverySource: normalizedDiscoverySource,
                mailchimpSynced,
            },
        };

        res.status(200).json(successResponse);
    } catch (error: unknown) {
        console.error('Join Error:', error);
        await notifyOperationalIssue('Unhandled signup error', { message: getErrorMessage(error) });
        res.status(500).json({ error: getErrorMessage(error) });
    }
});

export default app;

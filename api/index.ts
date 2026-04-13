import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

dotenv.config({ path: ['.env.local', '.env'] });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Initialize Supabase Client (Optional)
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || ''; // Use service role for backend
let supabase: any = null;
if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
}

// Initialize Mailchimp (Optional)
if (process.env.MAILCHIMP_API_KEY) {
    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_SERVER_PREFIX || 'us1', // e.g. 'us1'
    });
}

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: '5D Backend is live' });
});

app.post('/api/join', async (req, res) => {
    const {
        name,
        email,
        phone,
        consent,
        source,
        interestArea,
    } = req.body;

    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const normalizedPhone = typeof phone === 'string' ? phone.trim() : '';
    const normalizedSource = typeof source === 'string' ? source.trim() : 'landing-page';
    const normalizedInterestArea = typeof interestArea === 'string' ? interestArea.trim() : 'world';
    const hasConsent = Boolean(consent);

    if (!normalizedEmail && !normalizedPhone) {
        return res.status(400).json({ error: 'Email or phone number is required.' });
    }

    if (!hasConsent) {
        return res.status(400).json({ error: 'Consent is required.' });
    }

    try {
        // 1. Save to Supabase (current schema-safe payload with future-ready metadata fallback)
        if (supabaseUrl && supabaseKey) {
            const payload = {
                name: normalizedName || null,
                email: normalizedEmail || null,
                phone: normalizedPhone || null,
            };

            const { data, error } = await supabase
                .from('waitlist')
                .insert([payload])
                .select();

            console.log('INSERT_RESULT:', { data, error });

            if (error) {
                console.error('Supabase Error:', error);

                const duplicateEmail =
                    typeof error.message === 'string' &&
                    (error.message.toLowerCase().includes('duplicate key') ||
                        error.message.toLowerCase().includes('unique constraint'));

                if (duplicateEmail) {
                    const alreadyOnListResponse = {
                        success: true,
                        message: 'You are already on the list.',
                        meta: {
                            source: normalizedSource,
                            interestArea: normalizedInterestArea,
                            duplicate: true,
                        },
                    };

                    console.log('API_RESPONSE_BODY', alreadyOnListResponse);
                    return res.status(200).json(alreadyOnListResponse);
                }

                return res.status(500).json({ error: `Supabase insert failed: ${error.message}` });
            }

            if (!data || data.length === 0) {
                console.error('Supabase Error: insert returned no rows');
                return res.status(500).json({ error: 'Supabase insert failed: no row returned.' });
            }
        }

        // 2. Add to Mailchimp Audience (If email is provided and Mailchimp configured)
        if (normalizedEmail && process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID) {
            try {
                const mailchimpPayload = {
                    email_address: normalizedEmail,
                    status_if_new: 'subscribed',
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: normalizedName || undefined,
                        SMSPHONE: normalizedPhone || undefined,
                    },
                    tags: [
                        'fifth-dimension',
                        'stage:new',
                        `source:${normalizedSource}`,
                        `interest:${normalizedInterestArea}`,
                        normalizedPhone ? 'sms-candidate' : 'email-only',
                    ],
                };

                console.log('MAILCHIMP_PAYLOAD:', mailchimpPayload);

                const mailchimpResult = await mailchimp.lists.setListMember(
                    process.env.MAILCHIMP_AUDIENCE_ID,
                    normalizedEmail,
                    mailchimpPayload
                );
                console.log('MAILCHIMP_RESULT:', mailchimpResult);
            } catch (mcError: any) {
                console.error('Mailchimp Error:', mcError.response?.body || mcError);
                return res.status(500).json({
                    error: `Mailchimp sync failed: ${mcError.response?.body?.detail || mcError.message || 'unknown error'}`,
                });
            }
        }

        const successResponse = {
            success: true,
            message: 'Successfully joined the movement.',
            meta: {
                source: normalizedSource,
                interestArea: normalizedInterestArea,
            },
        };

        console.log('API_RESPONSE_BODY', successResponse);
        res.status(200).json(successResponse);
    } catch (error: any) {
        console.error('Join Error:', error);
        res.status(500).json({ error: error.message || 'Error processing request' });
    }
});

export default app;

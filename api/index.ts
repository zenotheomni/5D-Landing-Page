import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import mailchimp from '@mailchimp/mailchimp_marketing';

dotenv.config();

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
    const { name, email, phone } = req.body;

    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const normalizedPhone = typeof phone === 'string' ? phone.trim() : '';

    if (!normalizedEmail && !normalizedPhone) {
        return res.status(400).json({ error: 'Email or phone number is required.' });
    }

    try {
        // 1. Save to Supabase (Optional: if they have a 'waitlist' table)
        if (supabaseUrl && supabaseKey) {
            const payload = {
                name: normalizedName || null,
                email: normalizedEmail || null,
                phone: normalizedPhone || null,
            };

            const { error } = await supabase
                .from('waitlist')
                .insert([payload]);

            if (error) {
                console.error('Supabase Error:', error);
                // Continue even if Supabase fails, or handle depending on preference
            }
        }

        // 2. Add to Mailchimp Audience (If email is provided and Mailchimp configured)
        if (normalizedEmail && process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_AUDIENCE_ID) {
            try {
                await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
                    email_address: normalizedEmail,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: normalizedName || undefined,
                        PHONE: normalizedPhone || undefined,
                    },
                });
            } catch (mcError: any) {
                console.error('Mailchimp Error:', mcError.response?.body || mcError);
            }
        }

        res.status(200).json({ success: true, message: 'Successfully joined the movement.' });
    } catch (error: any) {
        console.error('Join Error:', error);
        res.status(500).json({ error: error.message || 'Error processing request' });
    }
});

export default app;

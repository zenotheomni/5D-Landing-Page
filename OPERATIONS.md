# 5D Landing Page Operations

This signup page is a community intake system. Supabase is the source of truth; Mailchimp is a secondary sync.

## Keep Supabase From Pausing

- Use a paid Supabase plan for the production project.
- Confirm `SUPABASE_URL` and `SUPABASE_SERVICE_KEY` are set in Vercel project environment variables.
- Keep the service role key only in server-side environments. Never expose it as a `VITE_` variable.

## Signup Reliability

- `/api/join` saves to Supabase before attempting Mailchimp.
- If Mailchimp fails, the signup still succeeds after Supabase saves the row.
- If Supabase is unavailable or misconfigured, signup fails with a user-safe error so the issue is visible.
- Duplicate Supabase email errors return a successful "already signed up" response.

## Monitoring

Monitor these URLs:

- `https://5-d-landing-page.vercel.app/`
- `https://5-d-landing-page.vercel.app/api/health`

Recommended monitor settings:

- Check every 1-5 minutes.
- Alert on any non-200 response.
- Alert by SMS and email.
- Use an external monitor such as Better Stack, UptimeRobot, or another uptime service.

Expected healthy API response:

```json
{
  "status": "ok",
  "service": "5d-landing-page",
  "supabase": "ok",
  "mailchimp": "configured"
}
```

## Immediate Alerts

Set `ALERT_WEBHOOK_URL` in Vercel if you want signup failures to notify an external alert service.

The app sends alerts for:

- missing Supabase config
- Supabase insert failures
- Supabase duplicate lookup failures
- Mailchimp sync failures
- unhandled signup errors

Do not send raw database secrets, service role keys, or full signup payloads to alert tools.

## Database Security

- Keep Row Level Security enabled on public tables when exposing them to client-side Supabase clients.
- This app uses the Supabase service role only from the server API.
- Do not add the service role key to frontend code.
- Rotate the service role key if it is ever pasted into a public place.
- Limit dashboard access to trusted admins with MFA enabled.
- Export or back up waitlist data on a regular schedule.

## Operational Response

If signups fail:

1. Check `https://5-d-landing-page.vercel.app/api/health`.
2. Check Vercel Function Logs for `/api/join`.
3. Check Supabase project status, billing, and table availability.
4. Confirm Vercel environment variables are still present.
5. If Supabase saved the row but Mailchimp failed, manually retry or export from Supabase.

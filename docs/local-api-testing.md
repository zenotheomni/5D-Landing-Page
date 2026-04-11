# Local API Testing

## Status

The landing backend can now be run locally for direct API testing.

## Commands

### Start backend only
```bash
export PATH="$HOME/.local/lib/nodejs/node-v22.22.2-linux-x64/bin:$PATH"
npm run backend
```

Backend listens on:
- `http://127.0.0.1:3001`

### Health check
```bash
curl http://127.0.0.1:3001/health
```

### Example join test
```bash
curl -X POST http://127.0.0.1:3001/api/join \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "phone": "",
    "consent": true,
    "source": "landing-page",
    "interestArea": "music"
  }'
```

## Validated result
The backend currently returns a success response like:

```json
{
  "success": true,
  "message": "Successfully joined the movement.",
  "meta": {
    "source": "landing-page",
    "interestArea": "music"
  }
}
```

## Why this was needed
The original backend file was written in a serverless/Vercel style, which did not provide a persistent local process by itself for direct end-to-end testing.

The repo now includes a simple local backend entrypoint for testing and development.

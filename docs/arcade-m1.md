# Arcade M1 — The Fifth Floor

Lobby + route shells shipped into this landing-page repo.

## Routes

| Path | Page |
|------|------|
| `/arcade` | Lobby (mobile cabinets / desktop QR gate) |
| `/arcade/court-vision` | Court Vision shell |
| `/arcade/fifth-run` | Fifth Run shell |
| `/arcade/challenge/:id` | Challenge stub |
| `/arcade/key` | NFC key stub |

## Preview

```bash
npm run dev
```

Open `/arcade` on a phone-width viewport.

## Notes

- Waitlist Entry / Welcome flows are unchanged.
- Analytics: `track()` stubs to `console.debug` + optional `sendBeacon` to `/api/arcade/analytics`.
- Scores / challenge API come later (M2+).
- Next: M2 Court Vision Endless.

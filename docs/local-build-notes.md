# Local Build Notes

## Status

The landing page builds successfully when using Node 22.

Validated command:

```bash
export PATH="$HOME/.local/lib/nodejs/node-v22.22.2-linux-x64/bin:$PATH"
npm run build
```

## Why the earlier local build failed

The repo dependencies target modern Node runtimes, while the default shell on this machine was still using Node 18.

This caused:
- `tsc: not found` on the earlier attempt before local deps were installed
- multiple `EBADENGINE` warnings during install because packages such as Vite 7, React Router 7, Supabase client packages, and Capacitor dependencies expect Node 20+

## Current conclusion

- `npm install` completed successfully
- `npm run build` now passes under Node 22
- future local work on this repo should use the Node 22 toolchain path above

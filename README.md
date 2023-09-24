# Timed client

A small desktop client for adding entries to timed.

## Development

After cloning this repository install project dependencies with `npm` or `yarn` package manager.

```bash
npm install
```

or

```bash
yarn
```

Create `.env` file under `renderer` directory with following values:

```
NEXTAUTH_URL=http://localhost:8888
NEXTAUTH_SECRET=Namk7zp8i5Ln6mAKWcWxgJdXmv6BWe/LyAXktOegl6g= # Generate with: openssl rand -base64 32
```

Afterwards, you should be able to start the application.

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

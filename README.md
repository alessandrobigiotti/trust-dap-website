# next-contact-site (skeleton)

Minimal Next.js (App Router) project structure with:
- Marketing pages group
- Contact page + client ContactForm
- API route handler: POST /api/contact
- Zod validation
- Mail adapter stub (Resend-ready)
- Env variable validation
- Tailwind CSS setup

## Quick start

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set values:

```bash
cp .env.example .env.local
```

## Contact form

- UI: `/contact`
- API: `POST /api/contact`

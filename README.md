# relo-web

Marketing site for Relo. Handles everything public-facing — the homepage, features, about, contact, and waitlist.

The main app (`relo`) lives on a self-hosted VPS and carries Postgres, Prisma, Better Auth, and all the product logic. Keeping the marketing site separate means a copy change or a design tweak here never goes anywhere near the app codebase — different repo, different deployment, different concern. When sign-up eventually moves here, it'll just call the app's API as an external service.

No database. No auth. No Prisma.

---

## Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Lucide React
- Forms / email: Zod, Resend, React Email (`@react-email/components`)
- Bot protection: `next-turnstile`
- Deploy: OpenNext for Cloudflare (`@opennextjs/cloudflare`, Wrangler)

---

## Structure

```
relo-web/
├── app/
│   ├── layout.tsx              # Metadata + OG tags
│   ├── page.tsx                # Homepage
│   ├── globals.css             # CSS variables / design tokens
│   ├── favicon.ico
│   ├── actions/
│   │   └── formActions.ts      # Server actions for marketing forms
│   ├── components/
│   │   ├── emails/
│   │   │   └── WelcomeEmail.tsx
│   │   ├── layout/
│   │   │   ├── nav.tsx
│   │   │   └── footer.tsx
│   │   └── marketing/
│   │       ├── hero.tsx
│   │       ├── dashboard-preview.tsx
│   │       ├── features.tsx
│   │       ├── about.tsx
│   │       └── contact.tsx
│   ├── config/
│   │   ├── site.ts             # Site name, tagline, nav items
│   │   └── content.tsx         # Long-form / section copy
│   └── lib/
│       └── utils.ts            # cn() helper
├── public/
│   └── _headers                # Static asset headers (e.g. CDN)
├── AGENTS.md                   # AI / agent conventions (points at Next docs)
├── CLAUDE.md                   # @-references AGENTS.md
├── eslint.config.mjs
├── next.config.ts
├── open-next.config.ts         # OpenNext + Cloudflare adapter
├── postcss.config.mjs          # Tailwind PostCSS pipeline
├── postcss.config.ts           # Same plugins as mjs (redundant entry point)
├── tailwind.config.ts
├── tsconfig.json
├── wrangler.jsonc              # Cloudflare Worker name, assets, routes
├── package.json
└── README.md
```

---

## Getting Started

```bash
npm install
npm run dev
```

Cloudflare preview / deploy (requires Wrangler auth and env):

```bash
npm run preview   # local worker + assets
npm run deploy    # build + deploy
npm run upload    # build + upload (CI-friendly)
```

---

## Design Tokens

Colours are CSS variables in `app/globals.css`, mirrored in `tailwind.config.ts` under the `relo` key. This is a build on the main app's palette.

| Token           | Value     |
| --------------- | --------- |
| `--relo-dark`   | `#111e18` |
| `--relo-green`  | `#1C3329` |
| `--relo-accent` | `#7bbfa0` |
| `--relo-gbg`    | `#ddeae3` |
| `--relo-bg`     | `#EDECEA` |
| `--relo-text`   | `#0f1f1a` |
| `--relo-muted`  | `#4a6359` |
| `--relo-border` | `#c8cec8` |

---

## TODO

- **Email env** — `app/actions/formActions.ts` uses Resend. Set `RESEND_API_KEY`; for contact notifications to your inbox, set `CONTACT_FORM_TO_EMAIL`. Contact UI expects `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (and verify token server-side when you tighten spam handling).
- **Sign-up** — once the app launches, the waitlist CTA flips to point at `app.relo.com`. If registration ever lives here it'll call the app's Better Auth endpoint directly.
- **Deployment** — OpenNext + Wrangler are wired (`preview` / `deploy` scripts); tune `wrangler.jsonc` (routes, bindings) for your environment.

---

## vs `relo`

`relo` is the app (Postgres, Prisma, Better Auth, self-hosted VPS). This repo is just the marketing site. They share a colour palette but are otherwise completely independent.

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

---

## Structure

```
relo-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Metadata + OG tags
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # CSS variables / design tokens
│   ├── components/
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
│   │   └── site.ts             # Site name, tagline, nav items
│   └── lib/
│       └── utils.ts            # cn() helper
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Design Tokens

Colours are CSS variables in `globals.css`, mirrored in `tailwind.config.ts` under the `relo` key. This is a build on the main app's palette.


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

- **Waitlist form** — `hero.tsx` shows a success state but doesn't POST anywhere yet. Needs a `/api/waitlist` route handler wired to an email service.
- **Contact form** — same deal, `contact.tsx` has a TODO where the fetch goes.
- **Sign-up** — once the app launches, the waitlist CTA flips to point at `app.relo.com`. If registration ever lives here it'll call the app's Better Auth endpoint directly.
- **Deployment** — not set up yet.

---

## vs `relo`

`relo` is the app (Postgres, Prisma, Better Auth, self-hosted VPS). This repo is just the marketing site. They share a colour palette but are otherwise completely independent.
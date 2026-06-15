# INSHOP — Autonomous Retail Network

Marketing site for INSHOP, an autonomous retail platform built on face recognition, frictionless checkout, and a single OS managing every layer of operations.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Render

## Pages

- `/` — Landing page (hero, experience flow, technology, modules, live deployments, vision, CTA)
- `/modules/supplier` — Supplier Module: automated supply chain from shortage detection to shelf restocking
- `/modules/fillers` — Fillers Module: real-time filler dispatch with AI-verified restocking
- `/modules/referral` — Referral Module: performance-driven commission channel for trainers and promoters

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploys automatically via [render.yaml](./render.yaml) on push to `main`.

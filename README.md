# GEBOW

> Project infrastructure and MVP — built with Next.js, TypeScript, and PostgreSQL.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, Tailwind CSS v4 |
| Backend | Next.js API Routes, tRPC |
| Language | TypeScript (strict) |
| Database | PostgreSQL 16, Prisma ORM |
| Auth | NextAuth.js v5 |
| Testing | Vitest + Playwright |
| CI/CD | GitHub Actions |
| Deployment | Docker → Vercel/Railway |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker (for PostgreSQL)

### Setup

```bash
# Clone the repo
git clone https://github.com/gubowen20071022/GEBOW.git
cd gebow

# Install dependencies
pnpm install

# Start PostgreSQL
docker compose up -d

# Run migrations
pnpm prisma migrate dev

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
│   ├── ui/           # Shared UI primitives
│   └── features/     # Feature components
├── server/
│   ├── api/          # tRPC routers
│   ├── db/           # Prisma client & schema
│   └── lib/          # Server utilities
├── lib/              # Shared utilities
└── styles/           # Global styles
prisma/
├── schema.prisma     # Database schema
└── migrations/       # Migration files
docs/
└── adr/              # Architecture Decision Records
tests/
├── unit/             # Vitest unit tests
└── e2e/              # Playwright E2E tests
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run Vitest |
| `pnpm test:e2e` | Run Playwright E2E |
| `pnpm db:studio` | Open Prisma Studio |

## Architecture

See [docs/architecture.md](docs/architecture.md) for system design.
See [docs/adr/](docs/adr/) for Architecture Decision Records.

## License

MIT — see [LICENSE](LICENSE).

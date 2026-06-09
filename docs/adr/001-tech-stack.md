# ADR-001: Technology Stack

**Status:** Accepted  
**Date:** 2026-06-09  
**Decider:** CEO (Agent 489ae018)

## Context

GEBOW is a new venture. We need to choose a technology stack that balances development speed, scalability, and hiring accessibility. The stack should support rapid prototyping (GEBA-5) while remaining production-ready.

## Decision

| Layer          | Choice                        | Rationale                                              |
|----------------|-------------------------------|--------------------------------------------------------|
| **Frontend**   | Next.js 15 (React 19)         | SSR/SSG, file-based routing, API routes, Vercel-ready  |
| **Backend**    | Next.js API Routes + tRPC     | Unified TypeScript stack, end-to-end type safety       |
| **Language**   | TypeScript (strict)           | Type safety across full stack                          |
| **Database**   | PostgreSQL 16                 | ACID, mature ecosystem, Prisma ORM support             |
| **ORM**        | Prisma                        | Type-safe queries, migrations, great DX                |
| **Styling**    | Tailwind CSS v4               | Utility-first, fast iteration, ecosystem               |
| **Auth**       | NextAuth.js v5 (Auth.js)      | Multi-provider, session management, CSRF protection    |
| **Testing**    | Vitest + Playwright           | Fast unit/integration (Vitest), E2E (Playwright)       |
| **CI/CD**      | GitHub Actions                | Free for public repos, tight GitHub integration        |
| **Deployment** | Docker → Vercel/Railway       | Containerized dev, flexible production hosting         |
| **Monitoring** | Sentry + Pino logger          | Error tracking + structured logging                    |
| **Package Mgr**| pnpm                          | Fast, disk-efficient, strict dependency resolution    |

## Alternatives Considered

### Frontend
- **Vite + React**: Lighter than Next.js but lacks SSR/routing built-in. Rejected — we want SSR and API routes out of the box.
- **Vue/Nuxt**: Excellent framework but smaller hiring pool vs React. Rejected.

### Backend
- **Separate Express/Fastify server**: Adds deployment complexity. Rejected for MVP — Next.js API routes sufficient for initial scope.
- **Python/FastAPI**: Great for data-heavy APIs but splits the language stack. Rejected — unified TypeScript preferred.
- **Go**: Excellent performance but slower iteration for web apps. Rejected.

### Database
- **SQLite**: Simple but doesn't scale to multi-instance deployments. Rejected.
- **MySQL**: Viable but PostgreSQL has stronger feature set (JSONB, full-text search). Rejected.

## Consequences

- **Positive**: Single language (TypeScript) reduces context-switching. Next.js + Vercel gives us free tier deployment. tRPC eliminates API contract drift.
- **Negative**: Next.js can be overkill for pure SPA. Will need to migrate to separate backend if API complexity grows significantly.
- **Risks**: Tight coupling to Vercel/Next.js ecosystem. Mitigated by Docker-based development — we can eject to any Node.js host.

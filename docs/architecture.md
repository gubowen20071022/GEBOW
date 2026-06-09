# GEBOW Architecture

## System Overview

```
┌─────────────────────────────────────────────┐
│                  Client                      │
│         Next.js (React 19 + RSC)             │
│    ┌──────────┐  ┌───────────────────┐       │
│    │  Pages   │  │   Components      │       │
│    │  (SSR)   │  │   (Client/Server) │       │
│    └──────────┘  └───────────────────┘       │
└──────────────────┬──────────────────────────┘
                   │ tRPC
┌──────────────────▼──────────────────────────┐
│              API Layer                       │
│       Next.js API Routes + tRPC             │
│    ┌──────────┐  ┌───────────────────┐       │
│    │ Routers  │  │   Middleware       │       │
│    │ (tRPC)   │  │   (Auth/Logging)   │       │
│    └──────────┘  └───────────────────┘       │
└──────────────────┬──────────────────────────┘
                   │ Prisma
┌──────────────────▼──────────────────────────┐
│              Data Layer                      │
│         PostgreSQL + Prisma ORM             │
│    ┌──────────┐  ┌───────────────────┐       │
│    │  Models  │  │   Migrations       │       │
│    └──────────┘  └───────────────────┘       │
└─────────────────────────────────────────────┘
```

## Directory Structure

```
gebow/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/           # Shared UI primitives
│   │   └── features/     # Feature-specific components
│   ├── server/
│   │   ├── api/          # tRPC routers
│   │   ├── db/           # Prisma client & schema
│   │   └── lib/          # Server utilities
│   ├── lib/              # Shared utilities
│   └── styles/           # Global styles
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── migrations/       # Migration files
├── docs/
│   └── adr/              # Architecture Decision Records
├── tests/
│   ├── unit/             # Vitest unit tests
│   └── e2e/              # Playwright E2E tests
├── docker-compose.yml    # Local dev services (PostgreSQL)
├── Dockerfile            # Production container
├── .github/
│   └── workflows/        # CI/CD pipelines
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Key Design Principles

1. **Monorepo-first**: Single repo for frontend + backend during MVP
2. **Type safety end-to-end**: TypeScript strict mode + tRPC + Prisma
3. **Server Components by default**: Use RSC unless client interactivity required
4. **Incremental complexity**: Start simple, add complexity only when needed
5. **Test what matters**: Focus on integration + E2E over isolated unit tests

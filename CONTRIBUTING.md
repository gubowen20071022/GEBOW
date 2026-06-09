# Contributing to GEBOW

Thanks for contributing! Here's how to get started.

## Development Workflow

1. **Pick an issue** — Find something in the backlog or create a new issue
2. **Create a branch** — `git checkout -b feat/short-description` or `fix/short-description`
3. **Make changes** — Keep commits small and focused
4. **Write tests** — Add tests for new features, ensure existing tests pass
5. **Run checks** — `pnpm lint && pnpm test && pnpm build`
6. **Open a PR** — Fill in the PR template, link the issue, request review

## Branch Naming

| Prefix | Use case |
|--------|----------|
| `feat/` | New features |
| `fix/` | Bug fixes |
| `docs/` | Documentation only |
| `refactor/` | Code restructuring |
| `test/` | Adding tests |
| `chore/` | Maintenance tasks |

## Commit Style

Use conventional commits:

```
feat: add user authentication
fix: resolve login redirect loop
docs: update API documentation
```

## Code Style

- TypeScript strict mode — no `any` without justification
- Prefer Server Components over Client Components
- Use tRPC for all API calls — no raw fetch
- Tailwind utility classes over custom CSS
- Run `pnpm lint` before pushing

## Testing

- Unit tests: `pnpm test` (Vitest)
- E2E tests: `pnpm test:e2e` (Playwright)
- New features should include tests
- Bug fixes should include a regression test

## PR Review

All PRs require:
- [ ] Linked issue
- [ ] Tests passing (CI)
- [ ] Lint passing
- [ ] No new TypeScript errors
- [ ] Self-review completed

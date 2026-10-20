# EduardTeodor.co.uk

Personal website and content platform. A monorepo containing the public site,
custom CMS, API, database schema, and infrastructure configuration.

The public site is designed to run independently of the home-hosted backend:
published content is fetched at build time and deployed as static files to
Cloudflare Workers static assets.

## Project status

Early development. The repository currently contains:

- **Web:** Next.js starter configured for static export, with TypeScript,
  Tailwind CSS v4, ESLint, and Prettier tooling. API content integration is not
  implemented yet.
- **CMS:** Next.js starter. Static export, authentication, and editing features
  are still to be implemented.
- **API:** ASP.NET Core starter targeting .NET 10, with a placeholder endpoint.
- **Database and infrastructure:** ignore rules only; migrations, deployment
  configuration, and CI/CD are not implemented yet.

The architecture below describes the intended system, not a completed deployment.

## Repository structure

```text
apps/
  web/       Public website — Next.js static export
  cms/       Custom content administration app — Next.js
  api/       Content and administration API — ASP.NET Core
  db/        Database schema and versioned SQL migrations (planned)
infra/       Docker Compose, Terraform, and deployment configuration (planned)
docs/        Architecture and project documentation (planned)
```

All components live in this repository without Git submodules. Each app currently
has its own tooling; there is no root-level package workspace or build command.


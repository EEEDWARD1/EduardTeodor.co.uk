# Web

Public website built with Next.js App Router, TypeScript, and Tailwind CSS v4.
Statically exported for Cloudflare Workers static assets (not Pages).
Production requires neither a Next.js server nor OpenNext.

## Getting Started

Run from `apps/web`:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pages live in `src/app`. The page auto-updates as you edit files.

Inter Tight is self-hosted from `public/fonts`; builds and page views do not
need access to Google Fonts.

## Validate and build

```bash
pnpm lint
pnpm build
```

The build generates HTML, CSS, JavaScript, and public assets in `out/`.
Routes use trailing slashes: `/projects/example/` exports to
`out/projects/example/index.html`. Generated files are ignored by Git.

There is no `pnpm start`: `next start` does not serve static exports. Preview the
build with a static file server rooted at `out/`.

## Static-only constraints

- The homepage fetches public content during the static build using
  `CONTENT_API_URL`. Set it to the API origin (see `.env.example`). The build
  requests `GET /content/projects` and `GET /content/thoughts`; the resulting
  content is baked into the exported HTML. No content requests happen in the
  visitor's browser.
- Both endpoints should return JSON arrays. Projects have `id`, `title`,
  `slug`, `summary`, and optional `tag` fields. Thoughts have `id`, `title`,
  and `slug`. Project and thought links target `/projects/{slug}/` and
  `/thoughts/{slug}/`; those detail routes still need to be implemented.
- If the API URL is unset, either request fails, or the response is invalid,
  the corresponding homepage section shows “Sorry, resources are not
  available.” An empty successful response shows an empty-state message.
- Content is frozen into each build. Publishing updates requires rebuilding
  and redeploying the site.
- Enumerate content routes with `generateStaticParams()` when adding dynamic
  segments such as `src/app/projects/[slug]/page.tsx`.
- Do not use request-time server features such as cookies, Server Actions, or
  ISR. Content changes require a rebuild and deployment.
- Images are served unoptimized: use appropriately sized source images or an
  external image service. No Next.js image server is available.

## Deployment target

Deploy `out/` using Cloudflare Workers static assets. The host must serve
directory index files and return a real 404 for unknown routes, not an SPA
fallback. Cloudflare configuration and GitHub Actions deployment are not set up
yet.

Intended publishing flow: API publish → GitHub `repository_dispatch` → build
with published API content → deploy static assets. Visitors receive the last
deployed site even if the API or home VM is unavailable.

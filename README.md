# Sai Deepak Portfolio

Personal portfolio site for Sai Deepak, built with Next.js App Router, TypeScript,
Tailwind CSS, shadcn/ui, Framer Motion, and Lenis. The site is configured for a
fully static export and can be deployed to Vercel or another static host.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the site.

## Useful commands

```bash
npm run lint
npm run build
```

`npm run build` generates the static site in `out/`.

## Where to edit content

Most editable portfolio content is centralized in
[`src/data/index.tsx`](./src/data/index.tsx):

- Personal bio, contact email, and social links
- Project details and links
- Skills and technology icons
- Certifications, blog placeholders, and marquee items

Replace every `[TODO: ...]` value before publishing. Add the real resume as
[`public/resume.pdf`](./public/resume.pdf); the home page download link already
points there. The Blog and Certifications pages are intentionally minimal and
can be removed from `src/data/index.tsx` and the navigation if they are not
needed.

## Environment variables

Copy [`.env.example`](./.env.example) to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` - public canonical site URL used by SEO metadata,
  sitemap, and robots.txt.
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` - the Formspree endpoint that receives the
  static contact form.

These are public values. Do not put private API keys or secrets in this
repository.

## Deployment

### Vercel

Import the repository into Vercel, set the two environment variables above,
and use the default Next.js build settings. The `output: "export"` setting
produces a static deployment.

### Other static hosts

Run `npm run build` and publish the generated `out/` directory. Configure the
host to serve `404.html` for unknown routes if it does not automatically
support static fallback pages.

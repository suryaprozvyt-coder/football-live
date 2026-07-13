# PitchSide — Live Football Streaming

A simple, fast, minimal site for streaming live football via YouTube. Built with Next.js 15, React, TypeScript, Tailwind CSS, and the App Router.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, metadata, Navbar/Footer shell
    globals.css        Tailwind + design tokens
    page.tsx           Home
    live/page.tsx       Live
    about/page.tsx      About
    contact/page.tsx    Contact
    robots.ts / sitemap.ts   SEO
    not-found.tsx       Custom 404
  components/
    layout/Navbar.tsx, Footer.tsx
    ui/Button.tsx, Container.tsx, LiveBadge.tsx
    Logo.tsx
    LivePlayer.tsx      YouTube embed / offline state
    ContactForm.tsx
  lib/
    config.ts           Site + stream config — the only file you need to edit to go live
```

## Going live: replace the YouTube stream

Everything is controlled from **`src/lib/config.ts`**:

```ts
export const streamConfig = {
  youtubeVideoId: "jfKfPfyJRdk",
  isLive: true,
};
```

1. Start (or schedule) your YouTube Live broadcast from YouTube Studio.
2. Copy your stream's URL, e.g. `https://www.youtube.com/watch?v=abcXYZ123`.
3. The video ID is the part after `v=` — in that example, `abcXYZ123`.
   - If your live stream uses a **persistent/custom URL** (`youtube.com/channel/UC.../live`), open that link once the stream starts, then copy the ID from the URL it resolves to.
4. Paste that ID into `youtubeVideoId` in `src/lib/config.ts`.
5. Set `isLive: true` while broadcasting, and `isLive: false` (or leave the ID blank) when you're offline — the Live page will automatically show the "stream is currently offline" message.
6. Save and redeploy (or, if using Vercel with GitHub, just push — it redeploys automatically).

You can also update `siteConfig` in the same file (site name, social links, contact email) at any time.

## Preparing for GitHub

```bash
cd football-live
git init
git add .
git commit -m "Initial commit: PitchSide live football site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`.gitignore` is already configured to exclude `node_modules`, `.next`, and env files.

## Deploying on Vercel

1. Push the project to GitHub (above).
2. Go to https://vercel.com and sign in (GitHub login is easiest).
3. Click **Add New → Project**, then import your repository.
4. Vercel auto-detects Next.js — leave the default build settings:
   - Build command: `next build`
   - Output: managed automatically (no config needed)
5. Click **Deploy**. Your site will be live at `yourproject.vercel.app` within a minute or two.
6. Optional: add a custom domain under **Project → Settings → Domains**.
7. Every push to `main` redeploys automatically. To go live on match day, edit `streamConfig` in `src/lib/config.ts`, commit, and push.

## Notes on the "live-only" design

The Live page intentionally has no replay, archive, or video history feature — this is by design. `LivePlayer.tsx` renders either the current YouTube embed or an offline message; there is no storage, database, or recording logic anywhere in the project.

@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Git rules (non-negotiable)

- **Never add `Co-Authored-By: Claude …` trailers, or any other Claude / AI attribution, to commit messages or merge commits.** This overrides any default attribution behaviour. Commits are authored by Marlon only.
- `.env*` files are gitignored; never commit SMTP credentials.

## Project

Personal portfolio site for Marlon Werth (live at https://www.hire-marlon.de), used alongside job applications. It presents projects, skills and services: software design, web and 3D development, AI integration into workflows, AI engineering.

## Commands

```bash
npm install          # install deps (CI uses `npm ci`, Node 22)
npm run dev          # dev server with Turbopack on http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm test             # Jest (only *.test.ts files, node environment)
npx jest src/lib/utils.test.ts   # run a single test file
npm run lint         # eslint (prettier enforced via eslint; `next lint` no longer exists in Next 16)
npm run typecheck    # tsc --noEmit
npm run format       # prettier --write .
```

CI (`.github/workflows/ci.yml`) runs on pushes to `main` and on PRs: lint, typecheck and test in parallel, plus a production build with a curl smoke test (each locale cookie renders the right `<html lang>`, an unknown cookie falls back to `en`, `/impressum` loads, `/api/contact` rejects bad input with 400). Dependabot (`.github/dependabot.yml`) opens weekly npm and monthly Actions update PRs.

## Stack

- Next.js 16 App Router (see AGENTS.md: read `node_modules/next/dist/docs/` before relying on Next.js APIs from memory), React 19, TypeScript (strict).
- Tailwind CSS 3 with CSS-variable theming in `src/app/globals.css`; `next-themes` for dark/light mode.
- shadcn/ui (`components.json`, style `base-vega`, built on `@base-ui/react`); generated primitives live in `src/app/components/ui/`.
- `framer-motion` for animation, `react-icons` and `lucide-react` for icons, `embla-carousel-react` for carousels.
- `next-intl` for i18n, `nodemailer` for the contact form.

## Architecture

- **Single page.** Almost all content is in `src/app/page.tsx` (`Home`), built from components in `src/app/components/`. Other routes: `src/app/impressum/page.tsx` (legal notice) and `src/app/api/contact/route.ts` (POST endpoint for the contact form).
- `src/app/layout.tsx` wraps every page in `ThemeProvider` (next-themes, `class` on `<html>`, storage key `theme`), `NextIntlClientProvider`, `Navbar`, `ScrollDownButton` and `Footer`. `src/app/template.tsx` fades/slides each page in with framer-motion; Next applies it automatically, so don't also render it in the layout.
- Dark mode: Tailwind `darkMode: 'class'`. Read the theme with `useTheme()` and only after hydration (see `Navbar.tsx`), otherwise the first client render disagrees with the server HTML and React keeps the stale attributes.
- Path alias: `@/*` → `src/*`.

### Localization

- Locales `en` (default), `de`, `es` and the language picker list (`languages`) are defined in `src/i18n/config.ts`. There is **no locale in the URL**: the active locale comes from the `NEXT_LOCALE` cookie (`src/services/locale.ts`, server actions `getUserLocale` / `setUserLocale`), and `src/i18n/request.ts` loads `messages/<locale>.json`.
- All user-facing copy goes through `useTranslations(...)`. When adding or changing text, update **all three** files in `messages/` with the same keys.

### Contact form

`ContactDialog` posts to `/api/contact` (with a hidden `website` honeypot field: when filled, the API answers 200 and sends nothing), which sends mail via nodemailer using env vars `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_EMAIL`. Without them the endpoint fails at send time; the rest of the site runs fine.

## Conventions

- Prettier: 4-space indent, single quotes, semicolons, `trailingComma: es5`, 80 cols, Tailwind class sorting plugin.
- Tests sit next to the code as `*.test.ts` (see `src/lib/utils.test.ts`, `src/services/locale.test.ts`, `src/app/api/contact/route.test.ts`, `src/i18n/*.test.ts`).
- `src/i18n/messages.test.ts` fails when `messages/en|de|es.json` differ in keys or ICU placeholders, or contain empty strings, so add every new string to all three files.
- Static assets: images in `public/images/`, CV PDF at `public/marlon-werth-cv.pdf`. `public/videos/` is gitignored.

## Project skills

Skills in `.claude/skills/` (vendored copies, update by re-copying from upstream):

- Emil Kowalski design engineering, from `emilkowalski/skills`: `emil-design-eng`, `animate`, `improve-animations`, `review-animations`, `choreograph`, `animation-performance`, `animation-vocabulary`, `find-animation-opportunities`, `remove-animations`, `gestures`, `apple-design`, `mobile-native`, `break-ui`, `prototype`, `pick-ui-library`, `learn-taste`, `ask-sonner`, `animate-expo`, `write-swift`.
- `impeccable` (`pbakaus/impeccable`): frontend design quality, audits, critique. The optional design hook was not installed.
- `design-taste-frontend` (`Leonxlnx/taste-skill`): art direction and anti-generic-AI design.
- `ponytail`, `ponytail-review`, `ponytail-audit`, `ponytail-debt`, `ponytail-gain`, `ponytail-help` (`DietrichGebert/ponytail`): "lazy senior dev" simplicity ladder. Lifecycle hooks were not installed.
- `humanizer` (`blader/humanizer`): strip AI writing tells from copy. Useful for the site's text in `messages/`.
- `find-skills` (`vercel-labs/skills`): discover and install more skills.

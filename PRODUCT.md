# Product

## Platform

Web, single page plus an imprint. Next.js App Router, statically rendered content, one contact API route.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 3 with CSS-variable tokens, next-intl (en, de, es; locale from a cookie, no locale in the URL), framer-motion available.

## Users

Recruiters, hiring managers and potential clients who arrive from a job application, a CV or LinkedIn. They spend one to three minutes on the page, often on a laptop during a screening, sometimes on a phone.

## Product Purpose

Show that Marlon Werth can take a software project from the first sketch to a running, documented system, and make it easy to contact him or download the CV.

## Positioning

A generalist who covers the whole project: software design, web and app development, 3D/XR, AI integration (including AI-assisted development and synthetic training data), hosting and documentation. Researcher at DFKI Osnabrück.

## Operating Context

Read during application screening, next to a CV PDF. Light office light by default; dark mode is offered and must be equally finished.

## Capabilities and Constraints

- Contact form posts to `/api/contact` (SMTP via env vars).
- CV PDF at `public/marlon-werth-cv.pdf`.
- Only real project facts. Anything not confirmed by Marlon stays general.

## Brand Commitments

- Marlon's photographs (`Marlon.png` full body cut-out, headshots) are the only people imagery.
- Project images: SECAI app screenshot, VR Reading Tandem screenshots, Crai logo.

## Evidence on Hand

Project descriptions in `messages/*.json`, education and work history, links to SECAI and BMWE, LinkedIn, GitHub, ORCID.

## Product Principles

- Facts over adjectives: every sentence names a tool, a result or a role.
- One clear action per screen: get in touch, or download the CV.

## Accessibility & Inclusion

WCAG 2.1 AA contrast in both themes, full keyboard access, visible focus, `prefers-reduced-motion` respected, three languages kept in sync.

---
name: Workbench
mode: experience
---

# Design system: Workbench

A portfolio that reads like a well-kept spec sheet: white paper, near-black ink, one ice-blue field, and the work itself shown large. Calm and precise, with the confidence of someone who ships.

Scene: a recruiter on a laptop in daylight, flipping between this page and a CV PDF. Light is the default; dark is a full equal theme for evening reading.

## Colour (strategy: restrained ground, one committed field)

| Token       | Light     | Dark      | Role                                                        |
| ----------- | --------- | --------- | ----------------------------------------------------------- |
| `--bg`      | `#ffffff` | `#0f1110` | page ground                                                 |
| `--surface` | `#f3f3f3` | `#181b19` | alternating section ground, panels                          |
| `--ink`     | `#232323` | `#ececec` | text                                                        |
| `--muted`   | `#5c5f5d` | `#a3a8a5` | secondary text (AA on bg and surface)                       |
| `--line`    | `#e2e3e2` | `#2a2e2b` | hairlines                                                   |
| `--ice`     | `#cbe8ff` | `#bfe2ff` | the committed field: hero panel, closing section, selection |
| `--ice-ink` | `#0b5b94` | `#9fd4ff` | ice blue as text, icon or focus ring (AA)                   |
| `--on-ice`  | `#0b2236` | `#0b2236` | text on the ice field                                       |

No violet anywhere. Brand icons keep their own colours.

## Type

Hanken Grotesk (variable, self-hosted via next/font). Display 400 with tracking -0.038em at hero size, easing to -0.02em at h2 and 0 for body. Body 17/1.6, justified with hyphenation on phones, measure 60-70ch. Numerals tabular in dates.

Scale: hero `clamp(2.5rem, 5vw + 0.5rem, 4.5rem)`/1.02; h2 `clamp(2rem, 3vw + 0.75rem, 3rem)`/1.08; h3 1.375rem/1.25; body 1.0625rem; small 0.875rem.

## Shape and depth

Radius scale: 10px controls, 20px panels, full pills for primary buttons. Flat by default; hairlines separate. One soft shadow (`0 1px 2px rgb(0 0 0/.04), 0 12px 32px -12px rgb(0 0 0/.18)`) for floating cards and the dialog only.

## Layout

12-column grid inside a 1200px wrap, 24px gutters, 20px side margin on phones. Hero is a split: text in five columns, the ice-blue panel with Marlon's cut-out in six. Sections alternate `--bg` / `--surface` grounds.

## Motion

- Ease: `cubic-bezier(0.23, 1, 0.32, 1)` for entrances, 180-260ms for UI.
- Hero enters once on load (short rise + fade, 60ms stagger). Nothing else fades in on scroll.
- One authored moment: the featured project images develop from greyscale to colour once as they come into view.
- Buttons press to `scale(0.97)`; links draw their underline; project images zoom 1.02 on hover.
- Under `prefers-reduced-motion` everything is static and visible.

## Chrome

Sticky translucent header (`backdrop-filter: blur(16px) saturate(180%)`) with a scroll edge hairline that appears only once content passes under it. Selection, caret, focus ring and scrollbar themed from the palette.

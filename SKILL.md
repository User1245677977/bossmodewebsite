---
name: bossmode-design
description: Use this skill to generate well-branded interfaces and assets for Boss Mode, the performance-luxury functional beverage brand (Boss Mode Energy + Boss Mode Myo-Peptide), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `slides/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Core rules at a glance

- **Two product moods, one root.** Myo-Peptide → paper bg + Signal Pink accent. Energy → Royal/black bg + Electric Blue accent. Use `data-product="myo|energy|black"` on `<body>` to swap context.
- **Voice is imperative, performance-coded.** Short, declarative sentences. ALL-CAPS section labels with `letter-spacing: 0.16em`. No hedge words. No emoji. No exclamation points.
- **Type:** Big Shoulders Display (display, 800/900) + Archivo (body) + JetBrains Mono (stats/pillars). Display sizes go BIG.
- **Shadows are FLAT and HARD** — `6px 6px 0 0 #0A0A0A`. No blur on chrome.
- **Radii are small** — 4–8px on cards/buttons. 999px ONLY for capsules/flavor pills.
- **Signature pattern:** low-poly facet imagery. Use `assets/facets-{navy|pink|lightblue|black}.png` full-bleed for section openers.
- **Iconography:** Lucide stroke-only at 1.75px. Never emoji, never duotone.

# Boss Mode — Marketing Site UI Kit

A high-fidelity recreation of the **bossmode.com** marketing surface — homepage hero, product grid, PDP, science panel, footer.

> **Note:** there is no upstream codebase or live site available. This kit is a designed-from-the-ground-up interpretation that strictly follows the brand foundations in `../../README.md` and `../../colors_and_type.css`. Treat it as a starting point — the visual language is right; specific page composition should be confirmed against final marketing wireframes.

## What's here

```
index.html               ← interactive homepage demo (top-nav swaps between Home / PDP)
Nav.jsx                  ← sticky top nav, paper bg, ink type
Hero.jsx                 ← full-bleed facet hero with stacked wordmark
ProductGrid.jsx          ← 6-up SKU grid (energy + myo)
PillarStrip.jsx          ← 3 numbered pillars
PDP.jsx                  ← product detail (can image, capsule chips, stat block, CTA)
ScienceStrip.jsx         ← horizontal ingredient breakdown
Footer.jsx               ← ink footer with stacked wordmark
ui.jsx                   ← shared atoms: Button, Capsule, Eyebrow, Stat
```

## Demonstrates

- Both contexts: **Myo (paper)** default, **Energy (royal)** swap
- Hard-shadow buttons, capsule pills, eyebrows, stat readouts
- Facet pattern as section opener
- Sticky nav with primary CTA top-right
- Click-thru: nav between Home and a Strawberry Milkshake PDP

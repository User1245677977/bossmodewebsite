# Boss Mode — Design System

> **Two categories, one mission.** Boss Mode Energy and Boss Mode Myo-Peptide.
> The performance-luxury functional beverage brand — geometric, disciplined, and unapologetically loud — built for people who treat their body like it's worth investing in.

---

## Brand at a glance

Boss Mode is a beverage company with two product lines that share a single visual + verbal universe:

### 1. Boss Mode Energy
Clean, performance-driven energy drinks — green tea caffeine, Cognizin® citicoline, CognatiQ®, N-Acetyl-L-Tyrosine, L-theanine. 5g sugar, no artificial sweeteners.
- **Apex Punch** — royal/plum facets, electric-blue stripe
- **Candied Strawberry** — candied red, blue stripe
- **Frosted Lemonade** — sun yellow with cream "drip" lid

Tagline: **SIP. DOMINATE. REPEAT.** • **UNLOCK PEAK STATE.**

### 2. Boss Mode Myo-Peptide
World's first RTD peptide shakes. 20g protein, 2.4g PeptiStrong® peptides, MCT oil, PeakO2® organic mushroom blend. 5g sugar.
- **Strawberry Milkshake** — soft pink facets
- **Vanilla Marshmallow Milk** — electric blue with red/yellow facet pop
- **Chai Latte (Peptide Tea)** — navy with warm pastel facets

Lockup: **BOSS MODE™ / MYO-PEPTIDE** (signature pink capsule under the wordmark).

### Audience
- **The Athlete** — trains 5×/week, hunting an edge, needs RTD convenience
- **The Wellness Native** — mushrooms, nootropics, peptides, new-product seeker

---

## Sources & provenance

This system was built from the assets the user provided — there is no upstream codebase or Figma file linked. If you have access to the originals (custom wordmark font, brand book, packaging dielines), drop them in and we'll true the system up.

| Asset | Source | Used for |
|---|---|---|
| `assets/logo-energy.png` | uploaded | Energy stacked wordmark (BOSS / MODE / ENERGY) |
| `assets/logo-myo.png` | uploaded | Myo-Peptide lockup on white |
| `assets/logo-myo-peptide-clean.png` | uploaded | Myo-Peptide lockup, paper variant |
| `assets/can-energy-{apex,lemonade,strawberry}.png` | uploaded | Energy SKU renders |
| `assets/can-myo-{chai,strawberry,vanilla}.png` | uploaded | Myo-Peptide SKU renders |
| `assets/facets-{navy,pink,lightblue,black}.png` | uploaded | Slide background — geometric facet pattern |
| `assets/facets-purple-frame.png` | extracted from `Artboard 5.pdf` | Royal+plum facet frame (top + bottom band) |

> **Brand fonts (supplied):** **Orbitron Variable** (display, weights 400–900) and **Barlow Condensed Regular** (body) live in `fonts/`. **Note:** only the regular weight of Barlow Condensed was provided; bolder body weights synthesize. Request additional weights (500, 600, 700) for true bold.

---

## CONTENT FUNDAMENTALS

> Imperative. Confident. Performance-coded. Not bro-y, not wellness-soft — somewhere between a coach and a luxury sportswear brand.

### Voice rules

- **Imperative mood by default.** "Sip. Dominate. Repeat." not "We help you sip and dominate."
- **Second person.** Address the reader as **you**. Never "we" except for category claims ("Our flavors will be…").
- **Short, declarative sentences.** Cut every hedge ("might," "could," "perhaps," "designed to help support…"). If a benefit is real, state it.
- **Structure is a feature.** Numbered pillars (`01 / CLEAN ENERGY`), two-line theses, ALL-CAPS section labels, slash dividers (`PEPTIDES // PROTEIN // MUSHROOMS`).
- **No exclamation points.** The volume comes from typography, not punctuation.
- **No emoji.** Ever. Replace with a labeled icon, an ingredient capsule, or just whitespace.
- **Trademarks are loud.** `PeptiStrong®`, `PeakO2®`, `Cognizin®`, `CognatiQ®` — capitalized with the ®, treated like proper nouns.

### Casing system

| Treatment | Used for | Example |
|---|---|---|
| `ALL CAPS, TIGHT-TRACKED` | wordmarks, hero displays, section openers | **BOSS MODE** • **UNLOCK PEAK STATE** |
| `ALL CAPS, WIDE-TRACKED 0.16em` | eyebrow labels, tags, capsule chips | **APEX PUNCH** • **20g PROTEIN** |
| `Title Case` | navigation, button labels, product names in body | "Shop Myo-Peptide", "Strawberry Milkshake" |
| `Sentence case` | body copy, supporting paragraphs | "Built for people who treat their body like it's worth investing in." |

### Voice examples (lifted from the brand)

- **SIP. DOMINATE. REPEAT.**
- **UNLOCK PEAK STATE.**
- **20g PROTEIN**
- **PEPTIDES • PROTEIN • ORGANIC MUSHROOMS**
- **FEATURING PeptiStrong®**

### Voice anti-patterns (do not write)

- ~~"Wellness shouldn't be complicated. ✨"~~ — soft + emoji
- ~~"Our team designed this drink to potentially help you feel more focused."~~ — hedge + we-voice
- ~~"Boss Mode is here to help you crush your goals!"~~ — exclamation + bro-y + cliché
- ~~"You'll love how amazing this tastes."~~ — empty modifier ("amazing")

---

## VISUAL FOUNDATIONS

### Color
**Two product moods, one root.**
- **Myo-Peptide** lives on **paper** (`#F4EFE4`) with **Signal Pink** (`#EE3D8B`) as the loud accent. Type is ink-black, almost editorial.
- **Energy** lives on **Royal** (`#2B2A82`) or **Black**, with **Electric Blue** (`#2BB6E8`) glow accents and white type.
- Flavor codes the can: red (strawberry), royal (apex), sun (lemonade), navy (chai), pink (myo-strawberry), blue (vanilla marshmallow).
- **Never use bluish-purple gradients** as bg fills — the palette already does that work via the facet pattern.

### Type
- **Display:** Orbitron (variable, brand-supplied) — geometric, square-cornered, technical. Used for BOSS MODE wordmark and all display headings.
- **Inline display:** Orbitron with `-webkit-text-stroke: 1px currentColor` — the outlined-stroke wordmark used on the Apex Punch can.
- **Body:** Barlow Condensed (brand-supplied) — tall condensed athletic. Note: only Regular 400 was supplied; bolder weights synthesize. Request additional weights if needed.
- **Mono:** JetBrains Mono — used for ingredient stat-readouts, pillar numbers, slash dividers.
- Eyebrows ALWAYS use `letter-spacing: 0.16em` — the brand's signature.

### Backgrounds
The brand has **one signature background motif: low-poly faceted triangulation** in 4 colorways (navy/purple, pink, light blue, black). They are full-bleed raster images, used as:
- Section openers (full-bleed)
- Card framing strips (top and bottom band — see `assets/facets-purple-frame.png`)
- Can label fields (matches the can the section is selling)

Otherwise, surfaces are **flat solids** — no gradients in UI chrome, no noise, no grain. The facet imagery itself supplies the texture.

### Layout
- **Generous gutters, hard alignment.** Content sits on a strict 12-col grid; nothing free-floats.
- **Stack the wordmark.** When BOSS MODE appears as a hero, stack it BOSS / MODE on two lines — never one line — and push tracking tight.
- **Eyebrow → headline → body → CTA.** Almost every block follows this 4-step rhythm.
- **Capsule pills for flavor + ingredient names** (pink fill, white type, pill radius). These are the only fully-rounded shape in the system.

### Borders, radii, shadows
- **Default radius is small (4–8px).** Cards = 8px. Capsules = 999px. Buttons = 4px.
- **Shadows are FLAT and HARD** — `6px 6px 0 0 #0A0A0A`. No blur. The athletic-poster look.
- A subtle ambient `shadow-ambient` exists for elevated surfaces (modals, menus) but is rarely used.
- Hairline borders are 1px, low-opacity ink (`rgba(10,10,10,.12)`).

### Hover, press, focus
- **Hover:** darker accent fill (e.g. pink → `--bm-pink-deep`) OR shift the hard shadow inward (`6px 6px → 3px 3px`). Choose one per component.
- **Press:** flatten shadow (`0 0`) and translate `2px 2px` so the button visibly "lands."
- **Focus:** double ring — `2px paper` + `2px pink` — applied via `:focus-visible`. No browser default.
- **Disabled:** desaturate to `--bm-grade-300`, drop shadow, `cursor: not-allowed`.

### Motion
- **Disciplined, athletic.** No bounces, no spring. Uses `cubic-bezier(.2,.7,.2,1)` (snappy ease-out).
- Default duration **200ms**. Page transitions **420ms** max.
- Hovers are instant (`120ms`).
- **No looping animations** in marketing chrome. The facet imagery is static.

### Transparency & blur
- **Transparency is rare.** Used only for: hairline borders (12% ink), overlays on can imagery (40% royal scrim), focus halos.
- **Blur is rarer.** No frosted glass. The brand prefers opacity.

### Imagery
- **Can renders** — front-3/4, on a colored ground that matches the SKU. White/grey shadow under the can. No drop shadows on the can itself.
- **Facet pattern** — full bleed; never tiled; never overlaid with text without a solid scrim or capsule beneath the text.
- **Lifestyle shots** (when present) — high-contrast, slightly cool, low-key. Athlete > gym > kitchen. No stock-y studio.

### Layout fixed elements
- **Sticky top nav** on web — paper bg, ink type, single-row, ~64px tall.
- **Logo always top-left**, anchor.
- **CTA button always top-right**, primary-pink fill.

### What to avoid
- Bluish-purple gradient backgrounds (AI tropey)
- Emoji
- Drop-shadowed cards with rounded corners and a colored left border
- Hand-drawn or "wellness-soft" illustration
- Inter, Roboto, or Open Sans for body
- Soft pastel-only palettes (the system needs the LOUD pink/blue to pop)

---

## ICONOGRAPHY

Boss Mode does **not** rely heavily on iconography — the brand is typographic and photographic. When icons are needed (nav, ingredient panel, footer), use:

- **Lucide** ([lucide.dev](https://lucide.dev)) at `1.75px` stroke. CDN: `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.
- **Stroke-only**, never filled, never duotone.
- **Currentcolor** so they inherit `var(--fg)` or `var(--accent)`.
- **20px / 24px / 32px** sizes only.

> **Substitution flag:** the source brand has no first-party icon system in the assets we received. **Lucide is our placeholder.** If you have a custom set, drop it in `assets/icons/` and we'll swap.

### Special glyphs

The brand uses these as ICONS in copy:
- **`//`** — slash divider between concepts (`PROTEIN // PEPTIDES // MUSHROOMS`)
- **`•`** — bullet between flavor + flag (`APEX PUNCH • 12 FL OZ`)
- **`→`** — directional CTA (`Shop now →`)
- **`®` `™`** — trademark badges, treated as part of the wordmark

### What NOT to use
- Emoji (any)
- Filled / duotone icons
- "Cute" line illustrations
- Auto-generated stock SVG illustrations

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← cross-compatible Agent Skill manifest
colors_and_type.css        ← all CSS vars (color, type, spacing, motion)

assets/                    ← brand visuals
  logo-energy.png            BOSS MODE ENERGY stacked wordmark
  logo-myo.png               BOSS MODE / MYO-PEPTIDE lockup (white bg)
  logo-myo-peptide-clean.png MYO-PEPTIDE lockup, paper variant
  can-energy-apex.png        Apex Punch SKU
  can-energy-lemonade.png    Frosted Lemonade SKU
  can-energy-strawberry.png  Candied Strawberry SKU
  can-myo-chai.png           Chai Latte (Peptide Tea) SKU
  can-myo-strawberry.png     Strawberry Milkshake SKU
  can-myo-vanilla.png        Vanilla Marshmallow Milk SKU
  facets-navy.png            Faceted bg (navy/purple)
  facets-pink.png            Faceted bg (pink)
  facets-lightblue.png       Faceted bg (light blue)
  facets-black.png           Faceted bg (black)
  facets-purple-frame.png    Royal/plum facet frame (top + bottom bands)

preview/                   ← Design System tab cards (one HTML per token group)
slides/                    ← sample slides (16:9 deck)
ui_kits/
  bossmode-marketing/      ← marketing site UI kit (homepage, PDP, etc.)
```

### Quick start for designers

```html
<link rel="stylesheet" href="colors_and_type.css">
<body data-product="myo">  <!-- or "energy", "black" -->
  <div class="eyebrow">FEATURING PeptiStrong®</div>
  <h1 class="display-l">UNLOCK<br>PEAK STATE.</h1>
  <p>Built for people who treat their body like it's worth investing in.</p>
</body>
```

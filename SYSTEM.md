# Supernova Design System

Supernova is the shared design foundation for all of Judy's projects. Every project that uses Supernova inherits these tokens, rules, and conventions. Never hardcode a value that has a Supernova token.

Token source of truth lives in `foundations/tokens/`:
- `Value.tokens.json` — primitives (raw color scales, spacing, font, etc.)
- `Light.tokens.json` — semantic tokens for light mode
- `Dark.tokens.json` — semantic tokens for dark mode

---

## Color system overview

Two brand anchors:
- **Pink** — primary brand identity (action color, CTAs, logo)
- **Green-1 (Seafoam)** — secondary brand identity

Neutral: **Gray** (0–100 scale, 0 = white, 100 = near-black)

Semantic palettes: Red (error), Yellow (warning), Green-2 (success), Blue/Cyan (info)

Extended palettes: Orange, Purple, Raspberry, Fuchsia

All colors are named on a **10–100 scale** in the primitives. In semantic tokens, the scale collapses to named roles (see below).

---

## Token rules

### Text tokens

Always use a text token for any foreground color. Never use a raw color primitive for text.

#### Default text

| Token | How to use |
|---|---|
| `text/1` | **Go-to text token.** Primary text — use this as your default. |
| `text/2` | Secondary text — use for less important text. |
| `text/3` | Tertiary text — use for the least important text. |
| `text/invert` | Inverted text — use against dark backgrounds. |
| `text/white` | Always white, regardless of light or dark mode. |
| `text/black` | Always black (near-black), regardless of light or dark mode. |

#### Brand text

| Token | How to use |
|---|---|
| `text/brand/dark` | Darkest brand color for text — use against light backgrounds. |
| `text/brand/light` | Lighter brand color for text — use against light or dark backgrounds. |
| `text/brand/invert` | Lightest brand color — use for inverted brand text against dark backgrounds. |

#### State / interactive text

| Token | How to use |
|---|---|
| `text/brand/action/main` | **Main action color.** Use for interactable text (links, CTAs). |
| `text/brand/action/visited` | Past action color — use for visited links. |
| `text/empty` | "Empty" placeholder color for text. |
| `text/disabled/main` | Disabled text. |
| `text/disabled/invert` | Disabled text against dark backgrounds. |

#### Semantic state text

Each semantic state has three text roles: `1` (darkest, for light backgrounds), `action` (main), and `invert` (lightest, for dark backgrounds).

| Token | How to use |
|---|---|
| `text/state/success/1` | Darkest success text — use against light backgrounds. |
| `text/state/success/action` | Main success action color. |
| `text/state/success/invert` | Lightest success text — use against dark backgrounds. |
| `text/state/warning/1` | Darkest warning text — use against light backgrounds. |
| `text/state/warning/action-darker` | Slightly darker warning — use when higher contrast is needed. |
| `text/state/warning/action-main` | Main warning action color. |
| `text/state/warning/invert` | Lightest warning text — use against dark backgrounds. |
| `text/state/error/1` | Darkest error text — use against light backgrounds. |
| `text/state/error/action` | Main error action color. |
| `text/state/error/invert` | Lightest error text — use against dark backgrounds. |
| `text/state/info/1` | Darkest info text — use against light backgrounds. |
| `text/state/info/action` | Main info action color. |
| `text/state/info/invert` | Lightest info text — use against dark backgrounds. |

#### Palette text

Use when you need expressive, non-semantic color for text (e.g. tags, labels, category colors). Each palette color has three roles: `1` (darkest), `action` (main), `invert` (lightest for dark backgrounds).

Available palettes: `cyan`, `orange`, `seafoam`, `purple`, `yellow`, `raspberry`, `fuchsia`

Pattern: `text/palette/{color}/1`, `text/palette/{color}/action`, `text/palette/{color}/invert`

---

### Surface tokens

Always use a surface token for any background color. Never use a raw color primitive for surfaces.

#### Default surfaces

| Token | How to use |
|---|---|
| `surface/1` | **Go-to surface token.** Primary background — use this as your default. |
| `surface/2` | Secondary surface — lightest gray; use for hover backgrounds. |
| `surface/3` | Tertiary surface — use when a darker surface is needed. |
| `surface/4` | Quaternary surface — use when an even darker surface is needed. |
| `surface/5` | Quinary surface — darkest light gray; use when more emphasis is needed. |
| `surface/invert/main` | Main inverted surface — use with light or dark text. |
| `surface/invert/darker` | Darker inverted surface — use with light text. |
| `surface/invert/darkest` | Darkest inverted surface — use with light text. |
| `surface/white` | Always white, regardless of light or dark mode — use with dark text. |

#### Brand surfaces — Pink

| Token | How to use |
|---|---|
| `surface/brand/pink/1` | Primary, lightest pink surface — use with dark text. |
| `surface/brand/pink/2` | Secondary pink surface — use with dark text. |
| `surface/brand/pink/3` | Tertiary pink surface — use for hover states and accents. |
| `surface/brand/pink/logo` | Lighter pink surface — use for logo backgrounds. |
| `surface/brand/pink/action/main` | **Primary action surface** — use for CTAs and primary buttons. |
| `surface/brand/pink/action/hover` | Darker pink hover — use when primary action hover is pink (not green). |

#### Brand surfaces — Green

| Token | How to use |
|---|---|
| `surface/brand/green/1` | Primary, lightest green surface — use with dark text. |
| `surface/brand/green/2` | Secondary green surface — use with dark text. |
| `surface/brand/green/3` | Tertiary green surface — use for hover states and accents. |
| `surface/brand/green/logo` | Lighter green surface — use for logo backgrounds. |
| `surface/brand/green/action/main` | Green action surface — use for secondary green CTAs. |
| `surface/brand/green/action/hover` | **Primary button hover** — primary buttons transition to this green on hover. |

#### State / interactive surfaces

| Token | How to use |
|---|---|
| `surface/disabled` | Disabled surface — pair with `text/disabled/invert`. |

#### Semantic state surfaces

Each state has `1` (lightest, pair with dark text), `2`, `3`, and `action` (darkest, pair with light text).

| State | Tokens |
|---|---|
| Success | `surface/state/success/1`, `/2`, `/3`, `/action` |
| Warning | `surface/state/warning/1`, `/2`, `/3`, `/action` |
| Error | `surface/state/error/1`, `/2`, `/3`, `/action`, `/action-hover` |
| Info | `surface/state/info/1`, `/2`, `/3`, `/action` |

Rules:
- `1`, `2`, `3` — light tints; pair with **dark text**
- `action` — saturated/dark; pair with **light text**
- `error/action-hover` — darker error; use for error actions on hover

#### Palette surfaces

Use for expressive, non-semantic backgrounds (tags, labels, category color blocks). Each palette color has `1` (lightest), `2`, `3`, and `action` (darkest).

Available palettes: `purple`, `orange`, `seafoam`, `raspberry`

Pattern: `surface/palette/{color}/1`, `/2`, `/3`, `/action`

Rules:
- `1`, `2`, `3` — pair with **dark text**
- `action` — pair with **light text**

---

### Border tokens

#### Border color

| Token | How to use |
|---|---|
| `border/color/1` | **Go-to border token.** Primary border — use this as your default. |
| `border/color/2` | Secondary border — use when a darker border is needed. |
| `border/color/3` | Tertiary border — use when an even darker border is needed. |
| `border/color/invert` | Inverted, darkest border — use when high contrast is needed. |
| `border/color/brand/1` | Lighter brand border. |
| `border/color/brand/action` | **Primary action border** — use for focus states on interactive elements. |
| `border/color/success/action` | Success focus state border. |
| `border/color/warning/action` | Warning focus state border. |
| `border/color/warning/action-hover` | Slightly darker warning border — use for warning actions on hover. |
| `border/color/error/action` | Error focus state border. |
| `border/color/info/action` | Info focus state border. |

#### Border width

| Token | Value | How to use |
|---|---|---|
| `border/width/default` | 1px | **Go-to border width.** Use this as your default. |
| `border/width/focus` | 2px | Focus ring border — use for keyboard focus states. |
| `border/width/lg` | 4px | Thicker border — use when more weight is needed. |
| `border/width/xl` | 8px | Heaviest border — use when even more weight is needed. |

---

### Radius tokens

| Token | Value | How to use |
|---|---|---|
| `radius/none` | 0 | Sharp corners. |
| `radius/minimal` | 2px | Minimally rounded corners. |
| `radius/less-rounded` | 8px | Slightly rounded corners. |
| `radius/rounded` | 12px | Standard rounded corners. |
| `radius/more-rounded` | 16px | More rounded — use for chips and pill-adjacent elements. |
| `radius/full` | 360px | Fully rounded — use for badges, tags, and pill shapes. |

---

### Spacing tokens

Spacing uses T-shirt size names. All values are in px.

| Token | Value | How to use |
|---|---|---|
| `spacing/none` | 0 | No spacing. |
| `spacing/minimal` | 2px | Minimal spacing. |
| `spacing/3xs` | 4px | — |
| `spacing/2xs` | 6px | — |
| `spacing/xs` | 8px | — |
| `spacing/sm` | 12px | — |
| `spacing/md` | 16px | — |
| `spacing/lg` | 24px | Often used as page margins for sm, md, lg breakpoints (600–1329px). |
| `spacing/xl` | 32px | — |
| `spacing/2xl` | 40px | — |
| `spacing/3xl` | 48px | Often used as page margins for xl breakpoints (1330px+). |
| `spacing/4xl` | 56px | — |
| `spacing/5xl` | 64px | — |
| `spacing/6xl` | 72px | — |
| `spacing/7xl` | 80px | — |

---

### Typography tokens

Font families: **Karla** for headers, **Inter** for body/text/labels.
Load both before using any type styles:
```html
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;600;800&family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

| Token | CSS var | Value |
|---|---|---|
| `font/family/header` | `--sn-font-family-header` | Karla |
| `font/family/body` | `--sn-font-family-body` | Inter |
| `font/weight/regular` | `--sn-font-weight-regular` | 400 |
| `font/weight/semibold` | `--sn-font-weight-semibold` | 600 |

Font sizes (CSS vars from `tokens.primitives.css`): `--sn-font-size-{10|12|14|16|18|20|24|32}`

There are no standalone line-height primitives. Line-height is carried by the composite type tokens below. (Line-height will move to percentage values once Figma variables support them.)

### Composite type tokens

Composite tokens bundle weight + size + line-height + family into a single CSS `font` shorthand value. Use them anywhere you set typography — nothing hardcoded.

```css
/* Direct usage */
.my-heading { font: var(--sn-type-header-xl-semibold); }

/* In component CSS */
.sn-btn { font: var(--sn-type-label-lg-regular); }
```

Source: `foundations/typography/type-tokens.css` → built to `dist/tokens.typography.css`. Consumers load `dist/tokens.typography.css` alongside the other token layers.

Token pattern: `--sn-type-{category}-{size}-{weight}`

#### Header tokens (`--sn-type-header-*`)

| Token | Size | Weight | Family |
|---|---|---|---|
| `--sn-type-header-xl-regular` | 32px / 1.6 | 400 | Karla |
| `--sn-type-header-xl-semibold` | 32px / 1.6 | 600 | Karla |
| `--sn-type-header-xl-black` | 32px / 1.6 | 800 | Karla |
| `--sn-type-header-lg-regular` | 24px / 1.6 | 400 | Karla |
| `--sn-type-header-lg-semibold` | 24px / 1.6 | 600 | Karla |
| `--sn-type-header-lg-black` | 24px / 1.6 | 800 | Karla |
| `--sn-type-header-md-regular` | 20px / 1.6 | 400 | Karla |
| `--sn-type-header-md-semibold` | 20px / 1.6 | 600 | Karla |
| `--sn-type-header-md-black` | 20px / 1.6 | 800 | Karla |
| `--sn-type-header-sm-regular` | 18px / 1.6 | 400 | Karla |
| `--sn-type-header-sm-semibold` | 18px / 1.6 | 600 | Karla |
| `--sn-type-header-sm-black` | 18px / 1.6 | 800 | Karla |

#### Text tokens (`--sn-type-text-*`)

| Token | Size | Line-height | Weight | Family |
|---|---|---|---|---|
| `--sn-type-text-lg-regular` | 16px | 24px | 400 | Inter |
| `--sn-type-text-lg-semibold` | 16px | 24px | 600 | Inter |
| `--sn-type-text-md-regular` | 14px | 20px | 400 | Inter |
| `--sn-type-text-md-semibold` | 14px | 20px | 600 | Inter |
| `--sn-type-text-sm-regular` | 12px | 18px | 400 | Inter |
| `--sn-type-text-sm-semibold` | 12px | 18px | 600 | Inter |

Paragraph classes (`.sn-paragraph-*`) share the same composite tokens as their text equivalents.

#### Label tokens (`--sn-type-label-*`)

| Token | Size | Line-height | Weight | Family | Notes |
|---|---|---|---|---|---|
| `--sn-type-label-lg-regular` | 16px | 16px | 400 | Inter | |
| `--sn-type-label-lg-semibold` | 16px | 16px | 600 | Inter | |
| `--sn-type-label-md-regular` | 14px | 14px | 400 | Inter | |
| `--sn-type-label-md-semibold` | 14px | 14px | 600 | Inter | |
| `--sn-type-label-sm-regular` | 12px | 12px | 400 | Inter | |
| `--sn-type-label-sm-semibold` | 12px | 12px | 600 | Inter | |
| `--sn-type-label-xs-semibold` | 10px | 10px | 600 | Inter | Pair with `letter-spacing: 0.2px` and `text-transform: uppercase` — not in shorthand |

---

### Typography style classes

Source: `foundations/typography/typography.css`

Class naming pattern: `.sn-{category}-{size}-{weight}`

#### Headers — `font/family/header`, `line-height: 1.6`

| Class | Size | Weight |
|---|---|---|
| `.sn-header-xl-regular` | 32px | 400 |
| `.sn-header-xl-semibold` | 32px | 600 |
| `.sn-header-xl-black` | 32px | 800 |
| `.sn-header-lg-regular` | 24px | 400 |
| `.sn-header-lg-semibold` | 24px | 600 |
| `.sn-header-lg-black` | 24px | 800 |
| `.sn-header-md-regular` | 20px | 400 |
| `.sn-header-md-semibold` | 20px | 600 |
| `.sn-header-md-black` | 20px | 800 |
| `.sn-header-sm-regular` | 18px | 400 |
| `.sn-header-sm-semibold` | 18px | 600 |
| `.sn-header-sm-black` | 18px | 800 |

#### Text — `font/family/body`, for UI text and short strings

| Class | Size | Line-height | Weight |
|---|---|---|---|
| `.sn-text-lg-regular` | 16px | 24px | 400 |
| `.sn-text-lg-semibold` | 16px | 24px | 600 |
| `.sn-text-md-regular` | 14px | 20px | 400 |
| `.sn-text-md-semibold` | 14px | 20px | 600 |
| `.sn-text-sm-regular` | 12px | 18px | 400 |
| `.sn-text-sm-semibold` | 12px | 18px | 600 |

#### Paragraph — `font/family/body`, for body copy and long-form content

Same size + line-height as Text. The distinction is semantic — use `paragraph` for flowing prose, `text` for UI strings.

| Class | Size | Line-height | Weight |
|---|---|---|---|
| `.sn-paragraph-lg-regular` | 16px | 24px | 400 |
| `.sn-paragraph-lg-semibold` | 16px | 24px | 600 |
| `.sn-paragraph-md-regular` | 14px | 20px | 400 |
| `.sn-paragraph-md-semibold` | 14px | 20px | 600 |
| `.sn-paragraph-sm-regular` | 12px | 18px | 400 |
| `.sn-paragraph-sm-semibold` | 12px | 18px | 600 |

#### Labels — `font/family/body`, tight line-height (= font size), for UI chrome

| Class | Size | Line-height | Weight | Notes |
|---|---|---|---|---|
| `.sn-label-lg-regular` | 16px | 16px | 400 | |
| `.sn-label-lg-semibold` | 16px | 16px | 600 | |
| `.sn-label-md-regular` | 14px | 14px | 400 | |
| `.sn-label-md-semibold` | 14px | 14px | 600 | |
| `.sn-label-sm-regular` | 12px | 12px | 400 | |
| `.sn-label-sm-semibold` | 12px | 12px | 600 | |
| `.sn-label-xs-semibold` | 10px | 10px | 600 | All-caps, `letter-spacing: 0.2px`. No regular variant. |

---

### Scale tokens

Scale tokens expose the full raw color scales as CSS custom properties. Use them when the aliased semantic tokens don't have the specific shade you need — for decorative color, gradients, illustrations, or one-off UI moments that don't map cleanly to a semantic role.

CSS var pattern: `--sn-scale-{group}-{color}-{step}`

Steps run **10–100** (lightest to darkest) in all scales. Lower = lighter, higher = darker.

#### Base scales

| Group | CSS prefix | Colors |
|---|---|---|
| Brand (pink) | `--sn-scale-base-brand-{10–100}` | Primary brand pink scale |
| Gray | `--sn-scale-base-gray-{0–100}` | Neutral gray scale (0 = white) |

#### State scales

| Group | CSS prefix |
|---|---|
| Success | `--sn-scale-state-success-{10–100}` |
| Warning | `--sn-scale-state-warning-{10–100}` |
| Error | `--sn-scale-state-error-{10–100}` |
| Info | `--sn-scale-state-info-{10–100}` |

#### Palette scales

| Group | CSS prefix |
|---|---|
| Purple | `--sn-scale-palette-purple-{10–100}` |
| Orange | `--sn-scale-palette-orange-{10–100}` |
| Seafoam | `--sn-scale-palette-seafoam-{10–100}` |
| Raspberry | `--sn-scale-palette-raspberry-{10–100}` |

Rules:
- **Prefer semantic tokens first.** Scale tokens are the escape hatch, not the default.
- **Never use a scale token where a semantic token exists.** If `text/state/success/1` works, use it — not `--sn-scale-state-success-100`.
- Steps 10–30 are light tints (pair with dark text). Steps 70–100 are dark shades (pair with light text). Step 60 is typically the "main" saturated value.

---

### Elevation tokens

Elevation tokens define surface depth hierarchy for dark mode. In dark interfaces, elevation is expressed through lightness — higher surfaces are lighter, not darker.

CSS var pattern: `--sn-elevation-{level}`

| Token | CSS var | Hex | Use for |
|---|---|---|---|
| `elevation/none` | `--sn-elevation-none` | `#222328` | Base dark surface — page background |
| `elevation/low` | `--sn-elevation-low` | `#333D4D` | Resting elements — cards, sidebars |
| `elevation/low-medium` | `--sn-elevation-low-medium` | `#4D5563` | Resting elevated elements |
| `elevation/medium` | `--sn-elevation-medium` | `#5D6573` | Interacted state surfaces |
| `elevation/medium-high` | `--sn-elevation-medium-high` | `#6E7580` | Higher interacted surfaces |
| `elevation/high` | `--sn-elevation-high` | `#848991` | Most elevated — modals, overlays, tooltips |

Rules:
- Elevation tokens are **dark mode surfaces**. The values are fixed dark grays — they don't flip between light/dark mode.
- Use them for surfaces in dark contexts (dark sidebars, dark cards, dark overlays) where you need depth hierarchy.
- In light mode, use `surface/1`–`surface/5` for the equivalent hierarchy.

---

### Component tokens

Component tokens are pre-resolved color assignments for specific UI components. They exist so you don't have to figure out which semantic token maps to which component state — the answer is already in the token name.

CSS var pattern: `--sn-components-{component}-{property}-{variant}`

#### Surface

| Token | CSS var | Use for |
|---|---|---|
| `components/surface/1` | `--sn-components-surface-1` | Secondary buttons, dropdown buttons, inputs — resting state |

#### Text (state, for banners and snackbars)

| Token | CSS var |
|---|---|
| `components/text/state/action` | `--sn-components-text-state-action` |
| `components/text/state/success` | `--sn-components-text-state-success` |
| `components/text/state/warning` | `--sn-components-text-state-warning` |
| `components/text/state/error` | `--sn-components-text-state-error` |
| `components/text/state/info` | `--sn-components-text-state-info` |

#### Badge surfaces

| Token | CSS var |
|---|---|
| `components/badge/surface/yellow` | `--sn-components-badge-surface-yellow` |
| `components/badge/surface/orange` | `--sn-components-badge-surface-orange` |

#### Chip surfaces

| Token | CSS var |
|---|---|
| `components/chip/surface/active/hover` | `--sn-components-chip-surface-active-hover` |
| `components/chip/surface/active/default` | `--sn-components-chip-surface-active-default` |

#### Dropdown

| Token | CSS var |
|---|---|
| `components/dropdown/surface/menu` | `--sn-components-dropdown-surface-menu` |

#### Selection controls (checkbox, radio)

| Token | CSS var | Use for |
|---|---|---|
| `components/selection-controls/border/hover` | `--sn-components-selection-controls-border-hover` | Border on hover |
| `components/selection-controls/border/disabled` | `--sn-components-selection-controls-border-disabled` | Border when disabled |
| `components/selection-controls/border/default` | `--sn-components-selection-controls-border-default` | Border at rest |
| `components/selection-controls/surface/on/disabled` | `--sn-components-selection-controls-surface-on-disabled` | Checked + disabled fill |
| `components/selection-controls/surface/off/disabled` | `--sn-components-selection-controls-surface-off-disabled` | Unchecked + disabled fill |
| `components/selection-controls/text/off` | `--sn-components-selection-controls-text-off` | Label text when unchecked |
| `components/selection-controls/text/on/disabled` | `--sn-components-selection-controls-text-on-disabled` | Label text when checked + disabled |

---

## Components

Pre-built, design-vetted components in `components/`. Always use these instead of building from scratch. Each component has its own CSS file and a co-located `.md` with full usage docs and token reference.

| Component | CSS | Docs |
|---|---|---|
| Button + Icon Button | `components/button/button.css` | `components/button/button.md` |
| Chip + Chip Group | `components/chip/chip.css` | `components/chip/chip.md` |
| Badge | `components/badge/badge.css` | `components/badge/badge.md` |
| Input / Field | `components/input/input.css` | `components/input/input.md` |
| Selection Controls | `components/selection-controls/selection-controls.css` | `components/selection-controls/selection-controls.md` |
| Dropdown | `components/dropdown/dropdown.css` | `components/dropdown/dropdown.md` |

---

## Rules for Claude

1. **Never hardcode a hex value.** Always use a Supernova token.
2. **Text and surface always travel in pairs.** When choosing a text token, pick the matching surface contrast pairing (e.g. light surfaces → dark text tokens; `action` surfaces → `invert` text tokens).
3. **Default to `/1` for the primary role.** `text/1`, `surface/1`, `border/color/1` are your go-to choices unless there's a specific reason to deviate.
4. **Dark mode is built in.** Light/Dark token files handle mode switching automatically — never write separate dark-mode CSS for individual color values.
5. **Use semantic tokens, not primitives.** Use `text/state/error/action` not `color/red/60` even if you know the value. Scale tokens (`--sn-scale-*`) are the permitted escape hatch when no semantic token fits — never reach for raw hex.
6. **Focus states use `border/width/focus` (2px) + `border/color/brand/action`** unless the context is a state-specific element (error → `border/color/error/action`).
7. **`text/white` and `text/black` are mode-invariant.** Use them when the color must not flip between light and dark modes.
8. **`surface/white` is also mode-invariant.** Use it when the background must stay white in both modes.
9. **Read this file before writing any styles** in any Supernova project.

# Supernova Design System

Shared design foundation for all Judy Wu projects. Provides design tokens (color, spacing, typography, radius, elevation) and pre-built CSS components, all synchronized from Figma.

---

## Structure

```
supernova-design-system/
├── foundations/
│   ├── tokens/
│   │   ├── primitives.tokens.json   ← raw scale values (color, spacing, radius, font)
│   │   ├── light.tokens.json        ← semantic tokens, light mode
│   │   └── dark.tokens.json         ← semantic tokens, dark mode
│   └── typography/
│       └── typography.css           ← type scale utility classes
├── components/
│   ├── button/        button.css + button.md
│   ├── chip/          chip.css + chip.md
│   ├── badge/         badge.css + badge.md
│   ├── input/         input.css + input.md
│   ├── selection-controls/   selection-controls.css + selection-controls.md
│   └── dropdown/      dropdown.css + dropdown.md
├── dist/              ← compiled output (committed, do not edit manually)
│   ├── tokens.light.css
│   ├── tokens.dark.css
│   ├── tokens.primitives.css
│   └── tokens.typography.css   ← composite --sn-type-* tokens
├── build.mjs          ← Style Dictionary build script
├── SYSTEM.md          ← full token reference and system rules
└── design-system.html ← visual component preview
```

---

## Using in a project

Link the token and component CSS files directly — no install or build step required for consumers.

```html
<head>
  <!-- Token layers — load in this order -->
  <link rel="stylesheet" href="../supernova-design-system/dist/tokens.primitives.css">
  <link rel="stylesheet" href="../supernova-design-system/dist/tokens.typography.css">
  <link id="tokens-light" rel="stylesheet" href="../supernova-design-system/dist/tokens.light.css">
  <link id="tokens-dark"  rel="stylesheet" href="../supernova-design-system/dist/tokens.dark.css" disabled>

  <!-- Typography utility classes (optional — only if you use .sn-header-*, .sn-text-*, etc.) -->
  <link rel="stylesheet" href="../supernova-design-system/foundations/typography/typography.css">

  <!-- Components — include only what you use -->
  <link rel="stylesheet" href="../supernova-design-system/components/button/button.css">
  <link rel="stylesheet" href="../supernova-design-system/components/chip/chip.css">
  <link rel="stylesheet" href="../supernova-design-system/components/badge/badge.css">
  <link rel="stylesheet" href="../supernova-design-system/components/input/input.css">
  <link rel="stylesheet" href="../supernova-design-system/components/selection-controls/selection-controls.css">
  <link rel="stylesheet" href="../supernova-design-system/components/dropdown/dropdown.css">
</head>
```

Toggle dark mode by swapping which token file is disabled:

```js
function toggleTheme(dark) {
  document.getElementById('tokens-light').disabled = dark;
  document.getElementById('tokens-dark').disabled = !dark;
}
```

---

## Running the build

The build step is only needed when token source files (`foundations/tokens/*.json`) change. The compiled output in `dist/` is committed so consumers never need to run it.

```bash
npm install        # first time only — installs Style Dictionary
npm run build      # compiles tokens → dist/*.css
npm run build:js   # also outputs dist/tokens.js (ES6 named exports, for non-CSS consumers)
```

**Do not edit `dist/` files directly.** They are overwritten on every build.

---

## Documentation

- **`SYSTEM.md`** — token reference, color system, typography, spacing, elevation, and system rules
- **`components/<name>/<name>.md`** — usage examples and token tables for each component
- **`design-system.html`** — open in a browser to preview all components in light and dark mode

---

## Adding a component

1. Create `components/<name>/` with `<name>.css` and `<name>.md`
2. Add component-specific tokens to `foundations/tokens/light.tokens.json` and `dark.tokens.json` if needed, then run `npm run build`
3. Add a showcase section to `design-system.html`
4. Add a row to the components table in `SYSTEM.md`

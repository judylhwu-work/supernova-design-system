# Chip

**CSS:** `components/chip/chip.css`
**Figma:** supernova-design-system → Chip (node 2470-13493)

---

## Chip

```html
<!-- Gray chip — use on white/light backgrounds -->
<button class="sn-chip sn-chip-gray">Label</button>

<!-- White chip — use on gray/colored backgrounds -->
<button class="sn-chip sn-chip-white">Label</button>

<!-- Active/selected state -->
<button class="sn-chip sn-chip-gray sn-chip--active" aria-selected="true">Label</button>

<!-- Disabled -->
<button class="sn-chip sn-chip-gray" aria-disabled="true">Label</button>

<!-- With icons (inherit currentColor automatically) -->
<button class="sn-chip sn-chip-gray">
  <svg width="12" height="12">…</svg>
  Label
  <svg width="12" height="12">…</svg>
</button>
```

| State | Token | Light value |
|---|---|---|
| Gray default bg | `--sn-surface-2` | `#F4F4F5` |
| Gray hover bg | `--sn-surface-3` | `#DFE0E2` |
| White default bg | `--sn-surface-1` | `#FFFFFF` |
| White hover bg | `--sn-surface-2` | `#F4F4F5` |
| Active bg | `--sn-components-chip-surface-active-default` | `#FFDAEC` |
| Active hover bg | `--sn-components-chip-surface-active-hover` | `#FFB5D9` |
| Active text | `--sn-text-black` | `#222328` (mode-invariant) |
| Disabled bg | `--sn-surface-disabled` | `#C4C6C9` |
| Disabled text | `--sn-text-disabled-invert` | `#FFFFFF` |

Max-width is enforced at 240px. Focus uses `border-width: 2px` + `border/color/brand/action` (not outline, to avoid layout shift).

---

## Chip Group

A pill-shaped container grouping related chips into a single selection control. Use for filter bars and segmented pickers.

```html
<!-- Gray group — use on white/light backgrounds -->
<div class="sn-chip-group" role="group" aria-label="Filter">
  <button class="sn-chip sn-chip-gray sn-chip--active" aria-selected="true">All</button>
  <button class="sn-chip sn-chip-gray">Recent</button>
  <button class="sn-chip sn-chip-gray">Saved</button>
  <div class="sn-chip-group-divider" role="separator"></div>
  <button class="sn-chip sn-chip-gray">Design</button>
</div>

<!-- White group — use on gray/colored backgrounds -->
<div class="sn-chip-group sn-chip-group-white" role="group" aria-label="Filter">
  <button class="sn-chip sn-chip-white sn-chip--active" aria-selected="true">All</button>
  <button class="sn-chip sn-chip-white">Recent</button>
</div>

<!-- Disabled group — disable the container label + each chip individually -->
<div class="sn-chip-group" role="group" aria-disabled="true">
  <button class="sn-chip sn-chip-gray" aria-disabled="true" disabled>All</button>
  <button class="sn-chip sn-chip-gray" aria-disabled="true" disabled>Recent</button>
</div>
```

| Class | Purpose | Token |
|---|---|---|
| `sn-chip-group` | Base container — gray bg, 4px padding, 12px radius | `--sn-surface-3` (#DFE0E2) |
| `sn-chip-group-white` | White bg variant — use on gray/colored surfaces | `--sn-surface-1` |
| `sn-chip-group-divider` | 1px × 24px separator between chip sections | `--sn-surface-disabled` (gray) / `--sn-surface-5` (white group) |

Chip pairing rule:
- Gray group → use `sn-chip-gray` chips inside
- White group → use `sn-chip-white` chips inside

The container background does not change in the disabled state — only the chips inside are individually disabled.

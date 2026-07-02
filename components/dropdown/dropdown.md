# Dropdown

**CSS:** `components/dropdown/dropdown.css`
**Figma:** supernova-design-system → Dropdown (node 2518-217540, menu 2532-225533)

Covers: dropdown trigger button (`.sn-select`) and dropdown menu panel (`.sn-dropdown-menu`).

---

## Trigger button

```html
<!-- Use inside .sn-field to get label + helper text -->
<div class="sn-field">
  <label class="sn-field-label">Label</label>
  <button class="sn-select" type="button" aria-haspopup="listbox">
    <span class="sn-select-value">Selected option</span>
    <svg class="sn-select-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <span class="sn-field-helper">Optional helper</span>
</div>

<!-- Empty / placeholder state -->
<button class="sn-select sn-select--empty" type="button" aria-haspopup="listbox">
  <span class="sn-select-value">Select…</span>
  <svg class="sn-select-chevron" …/>
</button>

<!-- Medium size (40px) -->
<button class="sn-select sn-select--md" …>…</button>

<!-- Open state — triggers focus ring styles -->
<button class="sn-select" aria-expanded="true" …>…</button>

<!-- Validation states — modifier on .sn-field, same as Input -->
<div class="sn-field sn-field--error">…</div>
<div class="sn-field sn-field--warning">…</div>

<!-- Disabled -->
<button class="sn-select" disabled>…</button>
```

---

## Menu panel

Position the menu with `position: absolute; top: calc(100% + 4px)` on the wrapper.

```html
<ul class="sn-dropdown-menu" role="listbox">

  <!-- Optional search header -->
  <div class="sn-dropdown-search">
    <svg width="16" height="16">…</svg>
    <input type="search" placeholder="Search…">
  </div>

  <!-- Section (multiple sections get a border-top divider between them) -->
  <div class="sn-dropdown-section">
    <li class="sn-dropdown-section-header">Section label</li>

    <!-- Basic item -->
    <li class="sn-dropdown-item" role="option" tabindex="0">
      <span class="sn-dropdown-item-label">Item label</span>
    </li>

    <!-- Item with icon and description -->
    <li class="sn-dropdown-item" role="option" tabindex="0">
      <svg class="sn-dropdown-item-icon" width="16" height="16">…</svg>
      <span class="sn-dropdown-item-label">Item label</span>
      <span class="sn-dropdown-item-desc">Supporting text</span>
    </li>

    <!-- Selected item -->
    <li class="sn-dropdown-item sn-dropdown-item--selected" role="option" tabindex="0" aria-selected="true">
      <span class="sn-dropdown-item-label">Selected item</span>
    </li>

    <!-- Disabled item -->
    <li class="sn-dropdown-item" role="option" tabindex="-1" aria-disabled="true">
      <span class="sn-dropdown-item-label">Disabled item</span>
    </li>
  </div>

</ul>
```

---

## Token reference

| Element | Token | Light value |
|---|---|---|
| Button bg (rest) | `--sn-components-surface-1` | `#FFFFFF` |
| Button border (rest) | `--sn-border-color-3` | `#9CA0A6` |
| Button hover bg | `--sn-surface-brand-pink-1` | `#FFECF5` |
| Button hover border | `--sn-border-color-invert` | `#222328` |
| Button focus border (2px) | `--sn-border-color-brand-action` | `#CC377F` |
| Button disabled bg | `--sn-surface-disabled` | `#C4C6C9` |
| Menu bg | `--sn-components-dropdown-surface-menu` | `#FFFFFF` |
| Menu border | `--sn-border-color-2` | `#C4C6C9` |
| Menu radius | `--sn-radius-rounded` | `12px` |
| Menu shadow | `0 4px 8px 0 rgba(34,35,40,0.24)` | — |
| Item hover bg | `--sn-surface-2` | `#F4F4F5` |
| Item selected bg | `--sn-surface-brand-pink-1` | `#FFECF5` |
| Item disabled text | `--sn-text-disabled-main` | `#9CA0A6` |

## Notes

- Button states (hover, focus, disabled, error, warning) use identical tokens to `.sn-input`.
- Button heights: **32px** default / **40px** with `sn-select--md`.
- Item label `line-height` is **16px** even though `font-size` is 14px — per Figma spec.
- Section header `line-height` is **14px** (matches font-size).
- The `sn-dropdown-section` div is a direct child of `ul` — technically invalid HTML. Future refactor: use `<li role="group">` instead.

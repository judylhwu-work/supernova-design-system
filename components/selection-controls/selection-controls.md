# Selection Controls

**CSS:** `components/selection-controls/selection-controls.css`
**Figma:** supernova-design-system → Selection Controls (node 8972-3164)

Covers: checkbox, radio button, switch (toggle).

---

## Checkbox

```html
<!-- Off -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-checkbox">
  <span class="sn-selection-label">Label</span>
</label>

<!-- On -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-checkbox" checked>
  <span class="sn-selection-label">Label</span>
</label>

<!-- Indeterminate — set via JS -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-checkbox" id="cb">
  <span class="sn-selection-label">Label</span>
</label>
<script>document.getElementById('cb').indeterminate = true;</script>

<!-- Disabled -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-checkbox" disabled>
  <span class="sn-selection-label">Label</span>
</label>
```

---

## Radio

```html
<label class="sn-selection-wrap">
  <input type="radio" class="sn-radio" name="group">
  <span class="sn-selection-label">Option A</span>
</label>

<label class="sn-selection-wrap">
  <input type="radio" class="sn-radio" name="group" checked>
  <span class="sn-selection-label">Option B</span>
</label>
```

---

## Switch

```html
<!-- Default size (48×24px) -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-switch" role="switch">
  <span class="sn-selection-label">Toggle</span>
</label>

<!-- On -->
<label class="sn-selection-wrap">
  <input type="checkbox" class="sn-switch" role="switch" checked>
  <span class="sn-selection-label">Toggle</span>
</label>

<!-- Small (32×16px) -->
<input type="checkbox" class="sn-switch sn-switch--sm" role="switch">

<!-- Disabled -->
<input type="checkbox" class="sn-switch" role="switch" disabled>
```

---

## Token reference

| State | Token | Light value |
|---|---|---|
| Off border | `--sn-components-selection-controls-border-default` | `#848991` |
| Off hover ring | `box-shadow: 0 0 0 4px var(--sn-surface-3)` | `#DFE0E2` |
| On fill | `--sn-surface-brand-pink-action-main` | `#FF459F` |
| On hover fill | `--sn-surface-brand-pink-action-hover` | `#CC377F` |
| On hover ring | `box-shadow: 0 0 0 4px var(--sn-surface-3)` | `#DFE0E2` |
| Focus ring | `box-shadow: 0 0 0 2px var(--sn-border-color-brand-action)` | `#CC377F` |
| Disabled-off fill | `--sn-components-selection-controls-surface-off-disabled` | `#C4C6C9` |
| Disabled-on fill | `--sn-components-selection-controls-surface-on-disabled` | `#FFB5D9` |
| Disabled border | `--sn-components-selection-controls-border-disabled` | `#C4C6C9` |
| Switch off track | `--sn-surface-invert-main` | `#848991` |
| Switch on track | `--sn-surface-brand-pink-action-main` | `#FF459F` |
| Thumb bg | `--sn-components-surface-1` | `#FFFFFF` |

## Notes

- Hover and focus rings are `box-shadow`, not `border` — avoids layout shift.
- Checkmark, indeterminate dash, and radio dot are inline SVG `background-image` — works on `<input>` with `appearance: none` cross-browser.
- Label color uses `:has()` — works in Chrome 105+, Safari 15.4+, Firefox 121+.
- Disabled label: unchecked → `text-off` (#848991 gray); checked → `text-on-disabled` (#FFB5D9 pink muted).
- Switch thumb position: off = `left: 3px`; on = `left: 27px` (48 − 18 − 3). Small: off = `left: 3px`; on = `left: 19px` (32 − 10 − 3).

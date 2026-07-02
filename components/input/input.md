# Input / Field

**CSS:** `components/input/input.css`
**Figma:** supernova-design-system → Input (node 13240-5406)

---

## Usage

```html
<!-- Basic field: label + input + helper -->
<div class="sn-field">
  <label class="sn-field-label" for="id">Label <span class="sn-field-required">*</span></label>
  <input class="sn-input" id="id" type="text" placeholder="Placeholder">
  <span class="sn-field-helper">Helper text</span>
</div>

<!-- Validation states — modifier on .sn-field -->
<div class="sn-field sn-field--error">
  <label class="sn-field-label">Label</label>
  <input class="sn-input" type="text">
  <span class="sn-field-helper">Error message</span>
</div>
<div class="sn-field sn-field--warning">…</div>

<!-- Disabled -->
<input class="sn-input" type="text" disabled>

<!-- Textarea -->
<textarea class="sn-input sn-input--textarea" placeholder="Write here…"></textarea>

<!-- With leading / trailing icons -->
<div class="sn-input-wrap">
  <span class="sn-input-icon-lead"><svg width="16" height="16">…</svg></span>
  <input class="sn-input sn-input--has-lead sn-input--has-trail" type="text">
  <span class="sn-input-icon-trail"><svg width="16" height="16">…</svg></span>
</div>
```

## Token reference

| State | Token | Light value |
|---|---|---|
| Default bg | `--sn-components-surface-1` | `#FFFFFF` |
| Default border | `--sn-border-color-3` | `#9CA0A6` |
| Hover bg | `--sn-surface-brand-pink-1` | `#FFECF5` |
| Hover border | `--sn-border-color-invert` | `#222328` |
| Focus border (2px) | `--sn-border-color-brand-action` | `#CC377F` |
| Disabled bg | `--sn-surface-disabled` | `#C4C6C9` |
| Disabled text | `--sn-text-disabled-invert` | `#FFFFFF` |
| Disabled border | `--sn-border-color-2` | `#C4C6C9` |
| Error border | `--sn-border-color-state-error-action` | `#FF2A00` |
| Warning border | `--sn-border-color-state-warning-action` | `#C7AD01` |
| Helper text | `--sn-text-3` | `#6E7580` |
| Error helper | `--sn-text-state-error-action` | `#CC2200` |
| Warning helper | `--sn-text-state-warning-action-darker` | `#958201` |

## Notes

- Default height: **32px**. Textarea: `min-height: 80px`, `resize: vertical`.
- Focus uses `border-width: 2px` (not outline) — avoids layout shift.
- Validation state modifier goes on `.sn-field`, not `.sn-input` — so label and helper text color both update automatically.
- Icon padding compensation: `sn-input--has-lead` adds left padding; `sn-input--has-trail` adds right padding. Use together with `.sn-input-wrap`.

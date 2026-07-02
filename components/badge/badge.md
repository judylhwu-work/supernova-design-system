# Badge

**CSS:** `components/badge/badge.css`
**Figma:** supernova-design-system → Badge

---

## Usage

```html
<span class="sn-badge sn-badge-brand">Design</span>
<span class="sn-badge sn-badge-brand-green">Design</span>
<span class="sn-badge sn-badge-success">Shipped</span>
<span class="sn-badge sn-badge-warning">In review</span>
<span class="sn-badge sn-badge-error">Blocked</span>
<span class="sn-badge sn-badge-neutral">Draft</span>
<span class="sn-badge sn-badge-dark">Beta</span>
```

| Class | Background | Border | Text | Use for |
|---|---|---|---|---|
| `sn-badge-brand` | `--sn-surface-brand-pink-2` | `--sn-surface-brand-pink-3` | `--sn-scale-base-brand-80` | Pink brand / category tags |
| `sn-badge-brand-green` | `--sn-surface-brand-green-2` | `--sn-surface-brand-green-3` | `--sn-text-brand-green-dark` | Green brand / category tags |
| `sn-badge-success` | `--sn-surface-state-success-1` | `--sn-border-color-state-success-action` | `--sn-text-1` | Success, completed |
| `sn-badge-warning` | `--sn-surface-state-warning-1` | `--sn-border-color-state-warning-action` | `--sn-text-1` | In progress, pending |
| `sn-badge-error` | `--sn-surface-state-error-1` | `--sn-border-color-state-error-action` | `--sn-text-1` | Error, blocked |
| `sn-badge-neutral` | `--sn-surface-4` | `--sn-border-color-2` | `--sn-text-2` | Neutral, draft |
| `sn-badge-dark` | `--sn-surface-invert-main` | — | `--sn-text-white` | Inverted, high-contrast |

Typography is always `label/xs/semibold` (10px, 600, uppercase, 0.2px letter-spacing) — do not override.

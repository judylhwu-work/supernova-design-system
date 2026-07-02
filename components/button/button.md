# Button

**CSS:** `components/button/button.css`
**Figma:** supernova-design-system → Button

---

## Button

```html
<!-- Always needs: sn-btn + one variant class -->
<button class="sn-btn sn-btn-primary">Label</button>
<button class="sn-btn sn-btn-secondary">Label</button>
<button class="sn-btn sn-btn-text">Label</button>
<button class="sn-btn sn-btn-text-secondary">Label</button>
<button class="sn-btn sn-btn-destructive">Label</button>
<button class="sn-btn sn-btn-secondary-destructive">Label</button>
<button class="sn-btn sn-btn-text-destructive">Label</button>

<!-- Size modifiers (default is lg = 48px) -->
<button class="sn-btn sn-btn-primary sn-btn-md">Label</button>
<button class="sn-btn sn-btn-primary sn-btn-sm">Label</button>

<!-- Works on <a> tags too -->
<a class="sn-btn sn-btn-primary" href="…">Label</a>

<!-- Disabled -->
<button class="sn-btn sn-btn-primary" disabled>Label</button>
```

| Class | Style | Use for |
|---|---|---|
| `sn-btn-primary` | Contained, green fill | CTAs, primary actions |
| `sn-btn-secondary` | Outlined, pink border + pink-dark text | Secondary actions |
| `sn-btn-text` | Transparent, pink semibold text | Tertiary / inline actions |
| `sn-btn-text-secondary` | Transparent, green semibold text | Neutral inline actions |
| `sn-btn-destructive` | Contained, red fill | Destructive primary actions |
| `sn-btn-secondary-destructive` | Outlined, red border + red text | Destructive secondary actions |
| `sn-btn-text-destructive` | Transparent, red semibold text | Destructive inline actions |
| `sn-btn-md` | 40px height | Medium size |
| `sn-btn-sm` | 32px height | Small size |

Note: Contained buttons use `font-weight: 400`; text buttons use `font-weight: 600` — intentional per design.

---

## Icon Button

```html
<!-- Always needs: sn-btn-icon + one variant class + aria-label -->
<button class="sn-btn-icon sn-btn-icon-primary" aria-label="Delete">
  <svg width="16" height="16">…</svg>
</button>
<button class="sn-btn-icon sn-btn-icon-secondary" aria-label="Settings">
  <svg width="16" height="16">…</svg>
</button>

<!-- Size modifiers (default is lg = 48px) -->
<button class="sn-btn-icon sn-btn-icon-primary sn-btn-icon-md" aria-label="Add">…</button>
<button class="sn-btn-icon sn-btn-icon-primary sn-btn-icon-sm" aria-label="Add">…</button>

<!-- Disabled -->
<button class="sn-btn-icon sn-btn-icon-primary" aria-label="Delete" disabled>…</button>
```

| Class | Style | Use for |
|---|---|---|
| `sn-btn-icon-primary` | Circular, transparent; pink icon; pink bg on hover | Primary icon actions |
| `sn-btn-icon-secondary` | Circular, transparent; green icon; green bg on hover | Secondary / neutral icon actions |
| `sn-btn-icon-destructive` | Circular, transparent; red icon; red bg on hover | Destructive icon actions |
| `sn-btn-icon-md` | 40px diameter | Medium size |
| `sn-btn-icon-sm` | 32px diameter | Small size |

Always include `aria-label` — icon buttons have no visible text.

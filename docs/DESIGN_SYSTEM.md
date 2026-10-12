# Design System — MediCare Plus

This document serves as the single source of truth for the project's CSS styling, colors, typography, elevations, and reusable UI components.

## CSS Variables (`:root`)

Defined in `frontend/css/style.css`:

```css
:root {
  /* Brand Palette — Healthcare & Pharmaceutical */
  --primary-color: #0d9488;       /* Medical Teal 600 */
  --primary-hover: #0f766e;       /* Teal 700 */
  --primary-dark: #115e59;        /* Teal 800 */
  --primary-light: #ccfbf1;       /* Teal 100 */
  --primary-subtle: #f0fdfa;      /* Teal 50 */

  --secondary-color: #0284c7;     /* Clinical Sky 600 */
  --secondary-hover: #0369a1;     /* Sky 700 */
  --secondary-light: #e0f2fe;     /* Sky 100 */

  --accent-color: #10b981;        /* Wellness Emerald 500 */
  --accent-hover: #059669;        /* Emerald 600 */
  --accent-light: #d1fae5;        /* Emerald 100 */

  /* Status & Regulatory */
  --warning-color: #d97706;       /* Rx Prescription Required (Amber 600) */
  --warning-light: #fef3c7;       /* Amber 100 */
  --warning-border: #fcd34d;      /* Amber 300 */
  
  --danger-color: #e11d48;        /* Rose 600 */
  --danger-light: #ffe4e6;        /* Rose 100 */

  --success-color: #10b981;       /* Emerald 500 */
  --success-light: #d1fae5;       /* Emerald 100 */

  /* Neutral Backgrounds & Surfaces */
  --background-color: #f8fafc;   /* Slate 50 */
  --bg-surface: #ffffff;
  --bg-muted: #f1f5f9;           /* Slate 100 */
  --bg-card: #ffffff;
  --bg-dark: #0f172a;            /* Slate 900 */

  /* Typography Colors */
  --text-main: #0f172a;           /* Slate 900 */
  --text-light: #475569;          /* Slate 600 */
  --text-muted: #94a3b8;          /* Slate 400 */
  --text-inverted: #ffffff;

  /* Typography Scale */
  --font-family-main: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-xs: 0.75rem;       /* 12px */
  --font-size-sm: 0.875rem;      /* 14px */
  --font-size-base: 1rem;        /* 16px */
  --font-size-md: 1.125rem;      /* 18px */
  --font-size-lg: 1.25rem;       /* 20px */
  --font-size-xl: 1.5rem;        /* 24px */
  --font-size-2xl: 1.875rem;     /* 30px */
  --font-size-3xl: 2.25rem;      /* 36px */

  /* Spacing Scale */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;

  /* Border Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  /* Elevations */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

## UI Components Specification

### 1. Buttons
- `.btn`: Base button styling with flex alignment and smooth transitions.
- `.btn-primary`: Teal background (`--primary-color`), white text, hover lift and shadow.
- `.btn-secondary`: Clinical sky blue (`--secondary-color`) for secondary actions.
- `.btn-outline`: Subtle slate border for neutral actions.
- `.btn-outline-primary`: Teal outlined button.
- `.btn-pill`: Fully rounded pill border radius (`--radius-pill`).
- `.btn-sm`, `.btn-lg`: Size variants for compact controls or hero CTAs.

### 2. Badges & Regulatory Tags
- `.badge-rx`: High-contrast amber badge for medications requiring valid doctor's prescription.
- `.badge-otc`: Mint green badge for Over-the-Counter medicines.
- `.badge-discount`: Coral red discount percentage pill.
- `.badge-category`: Subtle slate category indicator.

### 3. Cards
- `.product-card`: 4:3 image ratio, prescription and discount badge overlay, brand, title, dosage, star ratings, price, and responsive "Add to Cart" button.
- `.category-card`: Medical icon container, title, description, and product count indicator with hover state.
- `.feature-item`: Trust value proposition indicator (100% Genuine, 30-min delivery, licensed pharmacist, secure).

### 4. Layout & Navigation
- `.top-bar`: Emergency phone contact, pharmacist helpline, and promotional announcement.
- `.site-header`: Sticky navigation bar with blur effect, brand logo, live search form, navigation links, and reactive cart badge.
- `.hero-section`: Gradient medical hero with trust stats and interactive prescription upload callout.
- `.site-footer`: 4-column responsive footer with license details, regulatory disclaimers, and newsletter subscription.

### 5. Dialogs & Feedback
- `.toast`: Slide-in notification for cart events and prescription uploads.
- `.modal-dialog`: Backdrop overlay and accessible modal window for product quick view and prescription uploads.
- `.skeleton-card`: Shimmering placeholder animation during async data fetching.


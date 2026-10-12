# Learning Log & Retrospective

The goal of this document is to capture the "wins," the mistakes, and the lessons learned throughout the lifecycle of the Medicine Shop project. This is a living document—update it whenever you encounter a significant bug, a tough architectural challenge, or a "lightbulb" moment.

## How to use this log
- **Mistake**: What went wrong? Why did it happen?
- **Lesson**: How will we fix it or handle it better next time?
- **Wins**: What did we implement that we are proud of?

---

### Phase 1: Setup & Initialization
*   **Mistake:** Initially, frontend colors and layout had placeholder stub values (`#000000`) without clear contrast ratios or healthcare design tokens.
*   **Lesson:** Defining an interface-first design system with CSS custom properties (`:root`) upfront ensures all subsequent team members (Catalog, Detail, Auth) build consistent, accessible components.
*   **Wins:** Established complete medical color tokens (teal, clinical sky, amber Rx alerts), spacing system, responsive elevation shadows, and CSS reset.

### Phase 2: Frontend Implementation
*   **Mistake:** Product cards rendered with hardcoded fields could break if mock data differed from the backend entity definition.
*   **Lesson:** Strictly align frontend rendering with `docs/API_CONTRACT.md` schema (`id`, `name`, `brand`, `price`, `category`, `prescriptionRequired`, `imageUrl`), using resilient fallback placeholders for images.
*   **Wins:** Implemented full semantic homepage with hero section, trust indicators, interactive prescription upload dropzone, filter pill controls, quick view modal, toast feedback notifications, and responsive navigation drawer.

### Phase 3: Logic & Integration
*   **Mistake:** Direct coupling between UI components and cart mutations could create synchronization bugs across pages.
*   **Lesson:** Used decoupled event dispatching (`window.dispatchEvent('cart:updated')`) so the navbar cart badge automatically synchronizes whenever any component adds an item.
*   **Wins:** Successfully connected mock async API client (`fetchMedicines`, `fetchCategories`) with simulated network latency to mimic production REST behavior. 

---

## Technical Learnings
- *Example: Learned how to use `localStorage` to persist a cart across page refreshes.*
- *Example: Found a better way to structure CSS using BEM (Block Element Modifier) methodology.*

---

## Team & Process Learnings
- *Example: Realized that we need PR descriptions to be more specific to avoid conflicts.*

# Accessibility Checklist

1.  **Contrast:** Ensure text color (`text-white/70`) against dark background (`#0A0A0A`) meets WCAG AA standards (4.5:1 ratio).
2.  **Focus States:** All interactive elements (Buttons, Inputs, Cards) must have a visible focus ring (`focus:ring-2 focus:ring-blue-500`) for keyboard navigation.
3.  **Motion:** Respect `prefers-reduced-motion`. If user setting is enabled, disable the Hero Canvas animation and orbital movements.
4.  **Semantic HTML:** Use `<section>`, `<header>`, `<main>`, `<button>` correctly. Do not use `<div>` for clickable elements without `role="button"`.
5.  **Alt Text:** Ensure architectural diagrams (SVGs) have `aria-label` or `title` tags describing the topology.
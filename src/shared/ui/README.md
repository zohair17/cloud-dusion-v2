# Presentation kit (not yet designed)

This folder is reserved and intentionally empty. UI design is a later phase.

- `primitives/` — design-system atoms (Button, Badge, Card, Container, Heading …)
- `layout/`     — Header, Footer, Breadcrumbs, page shells
- `sections/`   — reusable content sections (Hero, FeatureGrid, StepList, CTABand …)

**Rule:** components render read models handed to them by route segments. They
never import from `@/content` and never call a repository directly.

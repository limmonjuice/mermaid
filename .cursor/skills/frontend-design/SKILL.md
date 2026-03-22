---
name: frontend-design
description: Crafts production-grade frontends with distinctive design; avoids generic AI aesthetics. Use when building UIs, dashboards, landing pages, settings panels, or when the user asks for frontend design, interfaces, or polished UI code.
---

# Frontend Design

Generate distinctive, production-grade frontend interfaces that stand out from generic AI-generated designs. Establish a design framework before coding, then implement with bold aesthetic choices.

## When to Apply

Apply this skill when the user:
- Asks to build, create, or design a frontend, UI, dashboard, landing page, or settings panel
- Requests an interface for an app, startup, or product
- Asks for "polished" or "production-grade" UI/frontend code
- Mentions design direction (e.g. dark mode, minimal, luxury, playful)

## Design Framework (Do First)

Before writing code, briefly establish:

1. **Purpose** – What is this interface for? (e.g. music streaming dashboard, AI security landing, settings panel)
2. **Audience** – Who uses it? (e.g. developers, consumers, enterprise)
3. **Aesthetic direction** – Pick one and commit:
   - **Brutalist** – Raw, bold type, stark contrast, exposed structure
   - **Maximalist** – Dense layout, rich color, pattern, ornament
   - **Retro-futuristic** – CRT vibes, neon, scanlines, tech nostalgia
   - **Luxury** – Serif typography, ample whitespace, subtle gold/cream
   - **Playful** – Rounded shapes, bright palette, micro-interactions
   - **Editorial** – Magazine-like hierarchy, strong headlines, grid-breaking
   - **Dark / terminal** – Monospace, dark background, accent highlights

Do not default to "modern minimal" or "clean" unless the user asks for it.

## Avoid

- **Fonts**: Generic system stacks only (Inter, Roboto, system-ui as primary)
- **Colors**: Predictable purple/violet gradients, single-accent blue
- **Layout**: Centered card on gradient background, identical rounded corners everywhere
- **Components**: Cookie-cutter card grids, same button style for everything

Use distinctive type (e.g. from Google Fonts), a considered palette, and intentional asymmetry or grid breaks.

## Key Design Areas

| Area | Guidance |
|------|----------|
| **Typography** | Unexpected pairings (e.g. display + monospace, serif + sans). Clear hierarchy; avoid same weight/size everywhere. |
| **Motion** | Orchestrated transitions; scroll-triggered or hover states that support the narrative. Avoid random bouncy animations. |
| **Spatial composition** | Asymmetry, overlapping elements, or grid-breaking blocks. Not everything centered in a single column. |
| **Visual depth** | Gradients, subtle textures, shadows, or layered effects that fit the chosen aesthetic. |

## Workflow

1. **Confirm** – If the request is vague, ask 1–2 questions (e.g. "Dark or light? Any brand colors or vibe?") then apply the framework.
2. **Decide** – Set purpose, audience, and one aesthetic direction.
3. **Implement** – Write markup/CSS (or framework of choice) with that direction: typography, palette, spacing, and motion aligned to the aesthetic.
4. **Review** – Ensure no generic-AI defaults (system font soup, purple gradient, centered card) slipped in.

## Output

- Production-ready code (semantic HTML, clear class names, responsive where relevant).
- Optional short design note at the top (e.g. "Aesthetic: retro-futuristic; palette: dark + cyan/orange accents").

For more aesthetic options and anti-patterns, see [reference.md](reference.md).

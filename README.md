# Inteligente11 Lab

The official web experience laboratory of **Inteligente11**.

Inteligente11 Lab is a growing collection of modern, reusable, and documented web experiments. It provides a reliable foundation for future websites, landing pages, applications, prototypes, and commercial demonstrations.

The project is developed as a professional laboratory rather than a collection of isolated demos. Every experiment is designed with production-quality structure, responsive behavior, performance, and accessibility in mind.

## Description

This repository explores how design, motion, interaction, and technology can work together to create clear and memorable digital experiences.

The laboratory includes work across areas such as:

- Cinematic hero sections
- Text animation
- Scroll-driven storytelling
- Motion UI
- Interactive backgrounds
- Reusable components
- Visual effects
- Responsive experiences
- Performance optimization
- Accessibility

## Objectives

- Build a curated library of reusable web experiences.
- Establish consistent implementation and documentation standards.
- Validate visual ideas without compromising maintainability.
- Create production-ready foundations for client and internal projects.
- Explore motion and interaction with progressive enhancement.
- Keep every experiment responsive, accessible, and performance-conscious.
- Avoid premature abstractions and unnecessary dependencies.

## Architecture

The repository separates application composition, shared building blocks, layouts, pages, global styles, and isolated experiments.

Experiments are grouped by category and remain self-contained. Each experiment owns only the files required for its implementation. Shared abstractions are introduced only after a genuine reuse case appears.

The current laboratory starts with `Hero001VideoWalk`, a fullscreen cinematic hero prepared for an ambient video background.

## Technology Stack

| Technology | Role | Status |
| --- | --- | --- |
| React | Component-based user interfaces | Active |
| TypeScript | Static typing and maintainable source code | Active |
| Vite | Development server and production build tooling | Active |
| CSS | Current styling and motion implementation | Active |
| Oxlint | Current source-code linting | Active |
| Tailwind CSS | Utility-first styling for future use cases | Planned |
| ESLint | Extended linting workflows where required | Planned |
| Git | Version control and incremental delivery | Active |
| Vercel | Intended deployment platform | Planned |

No dependency is added until an experiment has a concrete need for it.

## Project Structure

```text
inteligente11-lab/
├── public/
│   ├── images/
│   │   ├── backgrounds/
│   │   ├── characters/
│   │   ├── placeholders/
│   │   └── textures/
│   └── videos/
│       ├── backgrounds/
│       ├── hero/
│       └── transitions/
├── src/
│   ├── app/
│   ├── components/
│   ├── experiments/
│   │   └── heroes/
│   │       └── Hero001VideoWalk/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

### Directory Responsibilities

- `app/`: application-level composition and configuration when required.
- `components/`: reusable components proven to serve multiple experiences.
- `experiments/`: isolated laboratory experiences grouped by category.
- `layouts/`: reusable page-level layout structures.
- `pages/`: route or screen composition.
- `styles/`: global styles and project-wide design foundations.
- `public/images/`: image assets grouped by purpose.
- `public/videos/`: video assets grouped by experience type.

## Experiment Convention

Every experiment uses a category, a sequential identifier, and a descriptive name:

```text
src/experiments/<category>/<Category><number><Name>/
```

Example:

```text
src/experiments/heroes/Hero001VideoWalk/
├── Hero001VideoWalk.tsx
└── Hero001VideoWalk.css
```

Guidelines:

- Use English for source code, identifiers, and filenames.
- Keep each experiment focused on one clearly defined experience.
- Create only the files required by the current implementation.
- Keep styles local unless they are genuinely global.
- Do not introduce hooks, utilities, or shared components before they are needed.
- Preserve keyboard access, reduced-motion support, and responsive behavior.
- Document experiment-specific requirements as the library grows.

## Development Workflow

Install the existing dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Before completing any change, run:

```bash
npm run lint
npm run build
```

The delivery workflow is incremental:

1. Audit the current implementation and repository state.
2. Define the smallest necessary scope.
3. Implement one focused change.
4. Review responsive behavior and accessibility.
5. Run lint and the production build.
6. Review the diff before committing.

## Roadmap

- [x] Establish the initial React, TypeScript, and Vite foundation.
- [x] Define the experiment and multimedia asset architecture.
- [x] Build the first cinematic hero experiment.
- [ ] Integrate final production media for `Hero001VideoWalk`.
- [ ] Document experiment variants and usage guidance.
- [ ] Add text animation studies.
- [ ] Explore scroll-driven storytelling patterns.
- [ ] Develop interactive background experiments.
- [ ] Extract reusable components from validated experiments.
- [ ] Establish performance and accessibility review benchmarks.
- [ ] Prepare the public Vercel deployment workflow.

## License

Copyright © Inteligente11. All rights reserved.

This repository is not currently distributed under an open-source license. No permission is granted to copy, modify, distribute, or use its source code or assets without prior written authorization from Inteligente11.

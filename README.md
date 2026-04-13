# NeonBlade UI - Software Developer Portfolio Template

A sleek, dark-themed portfolio template for developers with runtime theme switching.

This free, open-source template showcases:

- Skills
- Projects
- Experience timeline
- Contact and social links

Built with reusable NeonBlade UI components on top of Next.js App Router.

## Live Preview

Preview the template here:

- https://neonbladeui-sd-portfolio-template.vercel.app/

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- next/font (Geist, Geist Mono, Orbitron)

## Project Structure

The template is split into focused files inside `src/app/template/`:

```text
src/
  app/
    layout.tsx                    # Root layout and fonts
    page.tsx                      # Home route entry point
    template/
      index.tsx                   # Thin orchestrator — wires sections + theme state
      config.tsx                  # All portfolio content (name, projects, experience…)
      themes.ts                   # Theme type definition + THEMES registry
      ThemeSwitcher.tsx           # Floating collapsible theme switcher component
      HeroSection.tsx             # Hero section
      AboutSection.tsx            # About / skills / stats section
      ProjectsSection.tsx         # Projects grid section
      ExperienceSection.tsx       # Experience timeline section
      ContactSection.tsx          # Contact card section
  components/
    neonblade-ui/                 # Reusable NeonBlade UI components
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run in development:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build and run production:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Customize Your Portfolio

### Personal content — `src/app/template/config.tsx`

This is the only file you need to edit to make the portfolio yours. Update the `CONFIG` object:

| Field                            | Description                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`, `title`, `tagline`       | Your headline info                                                                           |
| `location`, `email`, `resumeUrl` | Contact details                                                                              |
| `defaultTheme`                   | Starting theme ID: `"M1"` \| `"S1"` \| `"M3"` \| `"S5"`                                      |
| `navItems`                       | Navigation links                                                                             |
| `skillLabels`                    | Tech stack labels (colors come from the active theme)                                        |
| `projects`                       | Project cards — set `projectIndex: 0 \| 1 \| 2` to pick the card's color pair from the theme |
| `experience`                     | Timeline entries                                                                             |
| `socialLinks`                    | Footer / contact social links                                                                |

### Themes — `src/app/template/themes.ts`

Four built-in themes are included:

| ID   | Name           | Colors                |
| ---- | -------------- | --------------------- |
| `M1` | Mint + Amber   | `#7affb2` + `#ffb700` |
| `S1` | Phosphor Green | `#39ff6e`             |
| `M3` | Violet + Acid  | `#a259ff` + `#d4ff00` |
| `S5` | Lava White     | `#e8e8e8`             |

To add a custom theme, append a new entry to the `THEMES` object in `themes.ts` following the `Theme` interface, then reference its ID in `CONFIG.defaultTheme`.

### Theme switcher

A floating switcher is rendered in the bottom-right corner. It is collapsed by default — click it to expand a panel listing all available themes. The active theme's swatch colors and label are always visible on the trigger button.

## Portfolio Sections

| Section    | File                    |
| ---------- | ----------------------- |
| Hero       | `HeroSection.tsx`       |
| About      | `AboutSection.tsx`      |
| Projects   | `ProjectsSection.tsx`   |
| Experience | `ExperienceSection.tsx` |
| Contact    | `ContactSection.tsx`    |
| Footer     | inline in `index.tsx`   |

## NeonBlade UI Components Used

- `navbar`
- `corner-cut-button`
- `neon-glow-corner-cut-card`
- `badge`
- `timeline`
- `footer`
- `accent-frame`
- `glitch-text`
- `datalines-with-grid`

## Fonts

Fonts are configured in `src/app/layout.tsx` using `next/font/google`.

- Geist
- Geist Mono
- Orbitron (used for headlines and section typography)

## Free and Open Source

This project is intended to be a free open-source starter/template for developer portfolios.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

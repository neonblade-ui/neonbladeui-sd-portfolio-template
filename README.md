# NeonBlade UI - Software Developer Portfolio Template

A sleek, dark-themed portfolio template for developers.

This free, open-source template showcases:

- Skills
- Projects
- Experience timeline
- Contact and social links

Built with reusable NeonBlade UI components on top of Next.js App Router.

## Live Preview

Preview the template here:

- https://neonbladeui.neuronrush.com/templates/software-developer-portfolio

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- next/font (Geist, Geist Mono, Orbitron)

## Project Structure

Key files and folders:

```text
src/
	app/
		layout.tsx           # Root layout and fonts
		page.tsx             # Home route entry point
		template/index.tsx   # SoftwareDeveloperPortfolio component + CONFIG
	components/
		neonblade-ui/        # Reusable NeonBlade UI components
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

All primary content is centralized in:

- `src/app/template/index.tsx`

Update the `CONFIG` object to personalize the template:

- `name`, `title`, `tagline`, `location`, `email`, `resumeUrl`
- `navItems`
- `skills`
- `projects`
- `experience`
- `socialLinks`
- `accentColor` and `accentColorB`

The portfolio sections included are:

- Hero
- About
- Projects
- Experience
- Contact
- Footer

## NeonBlade UI Components Used

This template composes the following UI components:

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
- Orbitron (used by the portfolio headline and section typography)

## Free and Open Source

This project is intended to be a free open-source starter/template for developer portfolios.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

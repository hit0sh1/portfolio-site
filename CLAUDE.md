# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture

This is a Next.js 15 portfolio site with the following structure:

### Tech Stack
- Next.js 15.4.4 with App Router
- React 19.1.0
- TypeScript with strict mode
- Tailwind CSS v4 (using @import syntax)
- ESLint with Next.js configuration

### Component Structure
The site is a single-page application with these main sections:
- `HeroSection` - Landing area with name and CTA buttons
- `AboutSection` - Personal introduction
- `SkillsSection` - Technical skills showcase
- `ProjectsSection` - Portfolio projects
- `ContactSection` - Contact information
- `Navbar` - Navigation component

All components are in `/components` directory and imported into `app/page.tsx`.

### Key Patterns
- Components use default exports
- Styling uses Tailwind CSS classes directly in JSX
- Japanese language content (lang="ja" in html)
- Path aliases configured: `@/*` maps to root directory
- No test framework currently configured
# Digital Studio - Premium Digital Experience Showcase

A modern, high-performance portfolio website showcasing web development, UI/UX design, branding, and motion graphics services. Built with cutting-edge technologies and premium design principles.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Animation Overview](#animation-overview)
- [Three.js Scene](#threejs-scene)
- [Design & Ui Approach](#design-ui)
- [Design Decisions](#design-decisions)
- [Future Improvements](#future-improvements)

## Features

✨ **Modern Design System** - Premium color palette with semantic design tokens  
🎬 **GSAP Animations** - Smooth scroll-triggered animations throughout  
🌐 **Three.js Integration** - 3D blob in hero section + floating particles background  
🌙 **Dark Mode Support** - Toggle between light and dark themes with localStorage persistence  
📱 **Fully Responsive** - Mobile-first design that works on all devices  
⚡ **Performance Optimized** - Fast load times with optimized animations and rendering  
♿ **Accessible** - ARIA labels, semantic HTML, and proper contrast ratios

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

## Project Structure

```
digital-studio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navigation.tsx      # Main navigation bar with mobile menu
│   │   │   ├── footer.tsx          # Footer component
│   │   │   └── page-transition.tsx # Page entrance animations
│   │   ├── sections/
│   │   │   ├── hero.tsx            # Hero section with 3D blob
│   │   │   ├── services.tsx        # Services grid with scroll animations
│   │   │   ├── portfolio.tsx       # Project showcase
│   │   │   ├── about.tsx           # About section with skill badges
│   │   │   ├── testimonials.tsx    # Client testimonials carousel
│   │   │   └── contact.tsx         # Contact form
│   │   ├── three/
│   │   │   ├── three-blob.tsx      # Animated 3D icosahedron
│   │   │   └── three-particles.tsx # Background particle system
│   │   ├── ui/                     # Reusable UI components (shadcn/ui)
│   │   └── theme-provider.tsx      # Dark/light theme management
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn helper)
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── package.json
├── vite.config.ts                  # Vite configuration
└── tsconfig.json                   # TypeScript configuration
```

## Animation Overview

### GSAP Animations

The project uses GSAP (GreenSock Animation Platform) v3.14.2 with the ScrollTrigger plugin for sophisticated animations:

#### 1. **Hero Section** (`src/components/sections/hero.tsx`)

- Timeline-based entrance animations
- Sequential fade-in and slide-up effects for heading, subheading, and CTA buttons
- Runs on component mount

#### 2. **Services Section** (`src/components/sections/services.tsx`)

- Scroll-triggered staggered card animations
- Cards fade in and slide up as user scrolls
- Markers enabled for debugging scroll positions

#### 3. **Portfolio Section** (`src/components/sections/portfolio.tsx`)

- Title animation triggered on scroll
- Fade and slide effects synchronized with viewport entry

#### 4. **About Section** (`src/components/sections/about.tsx`)

- Multiple scroll triggers for different content blocks
- Heading, content paragraphs, and skill badges animate independently
- Staggered badge animations for visual interest

#### 5. **Testimonials Section** (`src/components/sections/testimonials.tsx`)

- Container scroll-triggered fade-in
- Individual testimonial cards animate when switching between reviews
- Smooth transitions using `gsap.fromTo()`

#### 6. **Contact Section** (`src/components/sections/contact.tsx`)

- Scroll-triggered heading and form animations
- Sequential reveal for better user focus

#### 7. **Page Transitions** (`src/components/layout/page-transition.tsx`)

- Initial page load animation
- Fade-in effect for the main content wrapper

### Three.js Scene

The project uses React Three Fiber (R3F) to integrate Three.js with React:

#### 1. **Particle System** (`src/components/three/three-particles.tsx`)

**Scene Description:**

- 800 floating particles in 3D space
- Particles have random initial positions within a 40x40x40 unit cube
- Each particle has individual velocity vectors
- Particles bounce off invisible boundaries at ±20 units
- Purple color (#a855f7) with 60% opacity
- Fixed background layer, doesn't interfere with page scrolling

**Technical Details:**

- Uses BufferGeometry for efficient rendering
- Custom particle physics with velocity-based movement
- Updates every frame via `useFrame()` hook
- Camera positioned at [0, 0, 15] with 75° FOV

#### 2. **Animated Blob** (`src/components/three/three-blob.tsx`)

**Scene Description:**

- Icosahedron geometry (20-sided polyhedron) with 2 subdivision levels
- Continuous rotation on X and Y axes
- Purple gradient material (#7c3aed base, #a855f7 emissive)
- Metallic finish (0.4) with slight roughness (0.25)
- Two-light setup: warm golden (#fbbf24) primary, cool purple accent
- Casts and receives shadows

**Technical Details:**

- Positioned in hero section (right side, vertically centered)
- Scale factor of 2 for prominence
- Camera at [0, 0, 6] with 45° FOV
- Rotation speeds: 0.004 rad/frame (X), 0.006 rad/frame (Y)

## Design & UI Approach

The UI was built using a system-driven approach rather than a separate high-fidelity design file.
Layout, spacing, and visual hierarchy decisions were made directly at the component level to allow
tight iteration between structure, animation, and performance.

A consistent set of design tokens (spacing, typography, colors) was applied across all sections,
following real-world front-end workflows where engineers often collaborate with or extend existing
design systems.

## Design Decisions & Tools

### Technology Stack

- **React 19.2** - Latest React features with concurrent rendering
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS with custom design tokens
- **GSAP 3.14** - Professional-grade animations
- **Three.js + R3F** - 3D graphics and WebGL rendering
- **Lucide React** - Consistent icon system

### Design System

- **Custom Design Tokens** - Defined in `src/index.css` for consistent theming
- **Light/Dark Mode** - Automatic theme switching with localStorage persistence
- **Responsive Breakpoints** - Mobile-first approach with Tailwind's breakpoint system
- **Color Palette** - Purple accent (#a855f7) with neutral grays

### Component Architecture

- **Composition Pattern** - Small, reusable components from shadcn/ui
- **Section-Based Layout** - Each major page section is a separate component
- **React Hooks** - Custom hooks for theme management and animations
- **Type Safety** - Full TypeScript coverage with strict mode

### Performance Optimizations

- **Code Splitting** - Vite handles automatic chunking
- **Lazy Loading** - Images and heavy components loaded on demand
- **GPU Acceleration** - Three.js offloads work to GPU
- **Animation Cleanup** - GSAP contexts properly cleaned up on unmount

## Future Improvements

1. **Animation Enhancements**

   - Add custom easing curves for more personality
   - Implement parallax scrolling effects
   - Add magnetic cursor interactions on hover

2. **3D Scene Upgrades**

   - Add more complex geometries (morph targets)
   - Implement post-processing effects (bloom, depth of field)
   - Create interactive 3D elements that respond to mouse movement

3. **Features**

   - Add a blog section with MDX support
   - Implement project filtering/search
   - Add email functionality to contact form (EmailJS/Resend)
   - Create admin panel for content management

4. **Performance**

   - Implement view transitions API for page navigation
   - Optimize Three.js bundle size with tree-shaking

5. **Accessibility**

   - Add keyboard navigation for 3D scenes
   - Implement reduced-motion preferences
   - Improve screen reader announcements for animations
   - Add skip-to-content links

6. **Developer Experience**
   - Add Storybook for component documentation
   - Implement E2E tests with Playwright
   - Add pre-commit hooks with Husky

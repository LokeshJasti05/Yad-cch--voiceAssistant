# Yadṛcchā - Phase 0

A modern, cinematic landing page for the OFRADAR Phase 0 developer release.

## Features

- **Cinematic Hero**: Initial sequence with title reveal + transition to main dashboard.
- **Scroll Reveal**: "Phase 0 is out" section appears on scroll.
- **Developer Tools**: Quick links to GitHub, Docker Hub, and a local ZIP download.
- **Ephemeral Feel**: "10 minute availability" countdown timer.
- **Responsive**: Fully responsive design from mobile to ultrawide.
- **Accessible**: Respects `prefers-reduced-motion`.

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4 (CSS variables for theme)
- **Animations**: Framer Motion + CSS Keyframes
- **Icons**: Lucide React

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Configuration

Configuration is handled via props in `PhaseSection.jsx` or by modifying `client/src/App.jsx`.

- **GitHub URL**: `githubUrl` prop
- **Docker Hub**: `dockerHubUrl` prop
- **ZIP Download**: `zipUrl` prop

## Assets

- Place the release ZIP file in `public/assets/project-phase0.zip`.
- Reference images and other static assets go in `public/assets/`.

## Analytics Hooks

The `PhaseSection` component exposes the following callbacks for analytics:

- `onDownloadClick`
- `onGithubClick`
- `onDockerClick`
- `onCountdownStart`
- `onCountdownEnd`

Check the browser console in dev mode to see these events firing.

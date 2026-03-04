# Liquid Glass Button — Behance Case Study

A single-page, high-fidelity Behance-style case study for the Liquid Glass Button micro-interaction project. Built with **React** and **Tailwind CSS**.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your assets**  
   Copy your 11 design images into `public/assets/` so they are available at `/assets/...`. Required filenames:

   - `__2026-03-03___11.00.44-44242895-6992-4827-b3a9-d0cb1685d4b5.png`
   - `____-48eae77a-e8c9-4a12-b5ba-0baf4f379cca.png`
   - `__2026-03-03___11.19.43-6175c46a-0496-451f-b999-25a756508323.png`
   - `__2026-03-03___11.18.57-22cd1f13-3cdf-41df-aa93-794019ceff50.png`
   - `__2026-03-03___11.21.15-7f7c99ba-9247-4ca6-92ea-ea15786d1ae6.png`
   - `__2026-03-03___11.01.59-72e8c107-187d-4860-8301-7009964cf0d8.png`
   - `__2026-03-03___10.56.40-54ff2a0a-6715-48a6-af17-bd816bcfb64b.png`
   - `__2026-03-03___11.17.05-215d384c-f6e7-4bba-ab04-14f370c1bf36.png`
   - `__2026-03-03___11.20.25-7827a35e-e3c9-4f7d-b490-f617443348ac.png`
   - `__2026-03-03___11.21.44-121d02ee-6bcf-4d20-a2ad-1dd193e10c46.png`
   - `__2026-03-03___11.56.09-d7613e74-ad8a-428c-bd25-143928320273.png`

   If your images are in another folder (e.g. from Cursor), copy them into `public/assets/` with the same names, or update the paths in `src/assets.js`.

3. **Run the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Layout

- **Max content width:** 1400px (Behance standard)
- **Sections:** The Concept → Complete Work (Bright / Dark / Mixed) → Component display → Interaction details → Logic & States → Detail 1–3 → Visual Spec → Engineering Mastery
- **Backgrounds:** Dark (slate-950) for Bright button, radial glow for Dark button, diagonal gradient for the mixed section.

## Tech

- React 18
- Vite 5
- Tailwind CSS 3

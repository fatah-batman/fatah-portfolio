# Mohammed Fatahuddin - Portfolio Website

A personal portfolio website built with React, Vite, Tailwind CSS v4, and framer-motion.

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## Customizing Content

All text content, links, and projects are centralized in one file. You do not need to edit any components to update your portfolio.

Open `src/data/portfolio.ts` and modify:
- `siteConfig`: Your name, tagline, email
- `aboutData`: Your bio and photo URL
- `projects`: Add or remove projects
- `videoWork`: Add your YouTube video IDs and descriptions
- `skills`: Update your skill categories
- `socialLinks`: Your GitHub, LinkedIn, and email links

### Placeholders to update (marked with `TODO` in code)
- Replace `https://via.placeholder.com/...` with your actual photos.
- Replace `dQw4w9WgXcQ` with your actual YouTube video IDs.
- Add your `resume.pdf` to the `public/` folder.
- Add an `og-image.png` (1200x630px) to the `public/` folder for LinkedIn link previews.

## Deployment

This site is completely static and ready to be deployed on Vercel.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Vercel will automatically detect that it is a Vite project and configure the build settings.
5. Click **Deploy**.

## Tech Stack
- **Framework**: React + Vite (Fast static builds)
- **Styling**: Tailwind CSS v4
- **Animations**: framer-motion
- **Icons**: react-icons
- **Typography**: Inter & Space Grotesk (Self-hosted via @fontsource)

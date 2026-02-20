# Setup Guide

**Project:** Azhagu-swe Portfolio  
**Version:** 1.0.0  
**Last Updated:** 2026-02-20

---

## 1. Prerequisites

| Tool | Minimum Version | Recommended Version |
| :--- | :--- | :--- |
| **Node.js** | 18.x | 20.x (LTS) |
| **npm** | 9.x | 10.x |
| **Git** | 2.x | Latest |

### 1.1 Verify Installation

```bash
node --version    # Expected: v20.x.x
npm --version     # Expected: 10.x.x
git --version     # Expected: 2.x.x
```

---

## 2. Installation

### 2.1 Clone Repository

```bash
git clone https://github.com/azhagu-swe/azhagu-swe.github.io.git
cd azhagu-swe.github.io
```

### 2.2 Install Dependencies

```bash
npm install
```

This will install approximately 500 packages (~300MB disk space).

### 2.3 Verify Installation

```bash
npm run lint
```

Expected output: No errors (warnings are acceptable).

---

## 3. Environment Variables

### 3.1 Environment File Structure

Create a `.env.local` file in the project root (not committed to Git):

```bash
# .env.local
# Copy this template for local development

# Giscus Configuration (Optional - for guestbook comments)
NEXT_PUBLIC_GISCUS_REPO="your-org/your-repo"
NEXT_PUBLIC_GISCUS_REPO_ID="R_kgDO..."
NEXT_PUBLIC_GISCUS_CATEGORY_ID="DIC_kwDO..."
NEXT_PUBLIC_GISCUS_MAPPING="pathname"
NEXT_PUBLIC_GISCUS_THEME="preferred_color_scheme"

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ID=""
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=""

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3.2 Environment Variable Reference

| Variable | Required | Default | Description |
| :--- | :---: | :---: | :--- |
| `NEXT_PUBLIC_GISCUS_REPO` | No | `""` | GitHub repository for Giscus comments (e.g., `azhagu-swe/azhagu-swe.github.io`). |
| `NEXT_PUBLIC_GISCUS_REPO_ID` | No | `""` | Giscus repository ID (obtain from [giscus.app](https://giscus.app)). |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | No | `""` | Giscus discussion category ID for comments. |
| `NEXT_PUBLIC_GISCUS_MAPPING` | No | `"pathname"` | How Giscus maps discussions to pages (`pathname`, `url`, `title`, `og:title`). |
| `NEXT_PUBLIC_GISCUS_THEME` | No | `"preferred_color_scheme"` | Giscus theme (`light`, `dark`, `dark_dimmed`, `preferred_color_scheme`). |
| `NEXT_PUBLIC_ANALYTICS_ID` | No | `""` | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`). |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | No | `""` | Vercel Analytics project ID (if using Vercel deployment). |
| `NEXT_PUBLIC_SITE_URL` | No | `""` | Base URL for canonical links and OpenGraph metadata. |

### 3.3 Obtaining Giscus Credentials

1. Visit [giscus.app](https://giscus.app)
2. Enter your repository name
3. Select the **Announcements** or **Comments** category
4. Copy the generated `repo`, `repoId`, and `categoryId` values
5. Add them to your `.env.local` file

> **Note:** The guestbook will function without Giscus configuration; comments simply won't load.

---

## 4. Development

### 4.1 Start Development Server

```bash
npm run dev
```

- **URL:** [http://localhost:3000](http://localhost:3000)
- **Features:** Hot Module Replacement (HMR), React DevTools, source maps

### 4.2 Project Structure

```
azhagu-swe.github.io/
├── app/                    # Next.js App Router
│   ├── blog/               # Blog listing & post pages
│   ├── guestbook/          # Guestbook page
│   ├── resume/             # Interactive resume
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── layout/             # Navbar, Sidebar, Footer
│   ├── ui/                 # Design system (Button, Card, etc.)
│   └── blog/               # Blog-specific components
├── content/                # MDX content source
│   ├── blog/               # Blog posts (*.mdx)
│   └── projects/           # Project case studies (*.mdx)
├── lib/                    # Utilities
│   ├── data.ts             # Static data (resume, links)
│   ├── mdx.ts              # MDX processing utilities
│   └── schemas.ts          # Zod validation schemas
├── public/                 # Static assets
│   ├── images/             # Optimized images
│   └── fonts/              # Custom fonts
├── scripts/                # Build scripts
│   └── generate-rss.js     # RSS feed generator
├── docs/                   # Documentation (this folder)
├── velite.config.ts        # Velite CMS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### 4.3 Adding Content

#### Blog Post Template

Create a new file in `content/blog/your-post-slug/index.mdx`:

```markdown
---
title: "Your Post Title"
description: "A compelling description for SEO"
date: "2026-02-20"
tags: ["typescript", "nextjs", "react"]
author: "Alagappan P"
draft: false
coverImage: "/images/cover.jpg"
---

# Your Content Here

Write your blog post in Markdown with support for JSX components.

```typescript
// Code blocks are syntax-highlighted automatically
const greeting = "Hello, World!";
```
```

---

## 5. Build & Deployment

### 5.1 Production Build

```bash
npm run build
```

**Output:** `out/` directory containing static HTML, CSS, JS, and assets.

### 5.2 Local Production Preview

```bash
npm run start
```

- **URL:** [http://localhost:3000](http://localhost:3000)
- **Note:** Serves the production build from `out/` directory.

### 5.3 Deploy to GitHub Pages

Deployment is automated via GitHub Actions on every push to `main`:

```bash
git add .
git commit -m "feat: add new blog post"
git push origin main
```

**CI/CD Pipeline:**
1. GitHub Actions triggers on push
2. Runs `npm ci` for deterministic builds
3. Executes `npm run lint` and type checking
4. Runs `npm run build`
5. Deploys `out/` to GitHub Pages

### 5.4 Manual Deployment

```bash
# Install gh-pages globally
npm install -g gh-pages

# Deploy the build output
npm run build
gh-pages -d out
```

---

## 6. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build (static export) |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm test` | Run Playwright E2E tests |
| `npm run test:ui` | Run tests with UI debugger |

---

## 7. Troubleshooting

### 7.1 Common Issues

| Issue | Solution |
| :--- | :--- |
| **Build fails with "Module not found"** | Run `npm install` to ensure all dependencies are installed. |
| **Port 3000 already in use** | Set `PORT=3001` in `.env.local` or kill the process using port 3000. |
| **Giscus comments not loading** | Verify `NEXT_PUBLIC_GISCUS_REPO_ID` and `NEXT_PUBLIC_GISCUS_CATEGORY_ID` are correct. |
| **Images not displaying** | Ensure `images: { unoptimized: true }` is set in `next.config.mjs` for static export. |
| **TypeScript errors in MDX** | Install MDX types: `npm install -D @types/mdx`. |

### 7.2 Clean Rebuild

```bash
# Remove build artifacts and reinstall
rm -rf .next out node_modules
npm install
npm run build
```

---

## 8. System Requirements

| Resource | Minimum | Recommended |
| :--- | :--- | :--- |
| **RAM** | 4 GB | 8 GB |
| **Disk Space** | 500 MB | 1 GB |
| **CPU** | 2 cores | 4+ cores |
| **Network** | 10 Mbps | 50+ Mbps (for dependency installation) |

---

**See Also:**
- [API Specification](./API_SPEC.md)
- [Architecture Overview](./ARCHITECTURE.md)
- [README](../README.md)

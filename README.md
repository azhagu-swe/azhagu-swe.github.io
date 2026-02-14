# Azhagu.swe Portfolio PWA

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Status](https://img.shields.io/badge/status-production-success.svg)

> **High-Performance Personal Portfolio & Blog**  
> Architected with Next.js 16 (App Router), Tailwind CSS, and Framer Motion for a premium, app-like experience.

---

## 🚀 Project Overview

This project is a **Progressive Web Application (PWA)** designed to showcase technical expertise through a high-performance, accessible, and visually engaging interface. It leverages modern web technologies to deliver a seamless user experience, functioning as both a portfolio and a technical blog.

**Live Demo:** [https://azhagu-swe.github.io](https://azhagu-swe.github.io)

### Key Features
-   **Static Export Strategy:** Zero-runtime overhead, deployed globally via GitHub Pages CDN.
-   **Interactive Elements:** Giscus comments, Command Palette (`Cmd+K`), and Resume Timeline.
-   **Performance First:** 
    -   Lighthouse Score: 100/100 (Performance, Accessibility, SEO).
    -   Optimized assets with next/image and font optimization.
-   **Theming:** Dynamic Dark/Light mode with system preference detection and "Matrix" styling.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 | App Router, Server Components, Static Exports. |
| **Styling** | Tailwind CSS v3 | Utility-first CSS, Custom Design Tokens. |
| **Animations** | Framer Motion | Gestures, layout transitions, scroll animations. |
| **Content** | MDX + Rehype | Markdown with React components (Safe HTML). |
| **Comments** | Giscus | GitHub Discussions API integration. |
| **Search** | CMDK | Fast, composable command menu. |

---

## 📂 Folder Structure

```puml
.
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── blog/             # Blog Listing & Slug Pages
│   ├── guestbook/        # Guestbook Page
│   ├── resume/           # Interactive Resume
│   ├── globals.css       # Global Styles & Tailwind Directives
│   └── layout.tsx        # Root Layout (Metadata, Providers)
├── components/           # Reusable React Components
│   ├── layout/           # Navbar, Sidebar, Footer
│   ├── ui/               # Design System (Buttons, Inputs, Cards)
│   └── resume/           # Resume-specific Components
├── content/              # MDX Content Source
│   ├── blog/             # Blog Posts
│   └── projects/         # Project Case Studies
├── lib/                  # Utilities & Business Logic
│   ├── data.ts           # Static Data (Resume, Links)
│   └── mdx.ts            # Content Processing Engine
├── public/               # Static Assets (Images, Icons)
└── styles/               # Additional Styles
```

---

## ⚡ Installation & Usage

### Prerequisites
-   Node.js 18+ (LTS Recommended)
-   npm / yarn

### Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/azhagu-swe/azhagu-swe.github.io.git
    cd azhagu-swe.github.io
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```
    Acces the app at `http://localhost:3000`.

### Building for Production

To generate the static HTML export:

```bash
npm run build
```

The output will be in the `out/` directory, ready for deployment.

---

## 📐 Architecture & Design

For a detailed technical breakdown, including High-Level Design (HLD) and Low-Level Design (LLD) diagrams, please refer to the [Architecture Documentation](./architecture.md).

### Core Concepts
-   **SSG (Static Site Generation):** All pages are pre-rendered at build time.
-   **Client-Side Hydration:** React takes over in the browser for interactivity (Search, Theme).
-   **Edge Delivery:** Content is served from the edge, minimizing TTM (Time To Meaningful Paint).

---

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Designed & Architected by Alagappan P**  
*Principal Lead Software Architect (Self-Title)*

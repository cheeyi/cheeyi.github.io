# cheeyi.me

My personal website and blog, built with [Astro](https://astro.build). Previously built with Jekyll, migrated to Astro in November 2025 for better performance and modern tooling.

## 🚨 Prerequisites

**Node.js v18.20.8+ or Node.js v20+ required**

```sh
# Check your Node version
node --version

# If needed, upgrade Node (using nvm)
nvm install 20
nvm use 20
```

## 🚀 Quick Start

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at **http://localhost:4321/**

## 📝 Creating New Blog Posts

### Step-by-Step Guide

1. **Create a new markdown file** in `src/content/blog/`:

```bash
# Example: src/content/blog/my-new-post.md
touch src/content/blog/my-new-post.md
```

2. **Add front matter** at the top:

```markdown
---
title: "Your Post Title"
pubDate: 2025-11-20T12:00:00+08:00
categories: notes  # or "random"
description: "A brief description for SEO"
---

Your post content starts here...
```

3. **Write content** using Markdown:
   - Code blocks with syntax highlighting
   - Images: `![Alt text](/assets/images/your-image.jpg)`
   - Links: `[text](url)`

4. **Add images** (if needed):
   - Place in `public/assets/images/`
   - Or organize in subdirectories: `public/assets/images/post-name/`

5. **Test locally**:

```bash
npm run dev
# Visit http://localhost:4321/blog/my-new-post/
```

### Example Blog Post

```markdown
---
title: "Building a Modern Web App"
pubDate: 2025-11-20T14:30:00+08:00
categories: notes
description: "My experience building a web app with Astro and TypeScript."
---

## Introduction

This is my new blog post...

## Code Example

```typescript
const greet = (name: string) => {
  console.log(`Hello, ${name}!`);
};
```\`

![My screenshot](/assets/images/screenshot.png)

Check out [Astro](https://astro.build) for more info!
```

## 🚀 Deployment

### Automatic Deployment

This site **automatically deploys** to GitHub Pages when you push to `main`:

```bash
git add .
git commit -m "Add new blog post"
git push origin main
```

### Monitor Deployment

1. Go to **Actions** tab: https://github.com/cheeyi/cheeyi.github.io/actions
2. Watch "Deploy to GitHub Pages" workflow (~1-2 min)
3. Visit https://cheeyi.me when complete

### GitHub Pages Setup (Already Configured)

- Source: **GitHub Actions**
- Custom domain: **cheeyi.me** (configured via CNAME file)

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── public/
│   ├── favicon.svg
│   └── assets/              # Static files
│       ├── images/          # Blog images
│       ├── docs/            # PDFs (resume)
│       └── css/             # Custom CSS
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── content/
│   │   └── blog/            # 📝 Blog posts go here
│   │       ├── hello-world.md
│   │       ├── endianness-ios.md
│   │       └── ...
│   ├── layouts/
│   │   └── BlogPost.astro   # Post template
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About page
│   │   ├── resume.astro     # Resume
│   │   ├── blog/            # Blog listing
│   │   └── rss.xml.js       # RSS feed
│   ├── styles/              # Global CSS
│   ├── consts.ts            # Site config
│   └── content.config.ts    # Content schema
├── astro.config.mjs         # Astro config
├── package.json
├── tsconfig.json
├── CNAME                    # Custom domain
└── README.md                # This file
```

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.15.9
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/) (github-light theme)
- **Deployment**: GitHub Pages via GitHub Actions
- **Package Manager**: npm
- **Node Version**: 20+

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deploying           |
| `npm run astro`           | Run Astro CLI commands                           |

## 📊 Features

- ✅ **5 Blog Posts** with syntax highlighting
- ✅ **RSS Feed** at `/rss.xml`
- ✅ **Sitemap** automatically generated
- ✅ **SEO Optimized** with meta tags
- ✅ **Fast Performance** (sub-second page loads)
- ✅ **Mobile Responsive** design
- ✅ **TypeScript** for type safety
- ✅ **Automatic Deployments** via GitHub Actions

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [GitHub Pages Deployment](https://docs.astro.build/en/guides/deploy/github/)
- [Shiki Syntax Highlighting](https://shiki.matsu.io/)

## 📜 License

[MIT License](LICENSE)

---

**Live Site**: [cheeyi.me](https://cheeyi.me)
**Built with**: Astro
**Migrated from**: Jekyll (November 2025)

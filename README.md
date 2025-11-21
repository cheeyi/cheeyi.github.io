# cheeyi.me

My personal website and blog, built with [Astro](https://astro.build). Previously built with Jekyll, [migrated to Astro in November 2025](https://cheeyi.me/blog/migrating-to-astro/) for better performance and modern tooling.

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

1. **Create a new file** in `src/content/blog/`:
   - Use `.md` for standard posts.
   - Use `.mdx` if you need to use components (like `<GithubRepoCard />`) inside the post.

```bash
# Example
touch src/content/blog/my-new-post.mdx
```

2. **Add front matter** at the top:

```markdown
---
title: "Your Post Title"
pubDate: 2025-11-20T12:00:00+08:00
categories: tech  # or "random"
description: "A brief description for SEO"
---

Your post content starts here...
```

3. **Write content** using Markdown/MDX:
   - Code blocks with syntax highlighting
   - Images: `![Alt text](../../assets/my-image.jpg)` (Relative path to `src/assets` allows Astro to optimize images)
   - Links: `[text](url)`

### Example Blog Post

```markdown
---
title: "Building a Modern Web App"
pubDate: 2025-11-20T14:30:00+08:00
categories: tech
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

![My screenshot](../../assets/screenshot.png)
```

## 🚀 Deployment

### Automatic Deployment

This site **automatically deploys** to GitHub Pages when pushed to `main`:

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

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Syntax Highlighting**: [Shiki](https://shiki.matsu.io/)
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

- ✅ **Blog** with syntax highlighting and MDX support
- ✅ **RSS Feed** at `/rss.xml`
- ✅ **Sitemap** automatically generated
- ✅ **SEO Optimized** with meta tags
- ✅ **Fast Performance** (Zero JS by default)
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

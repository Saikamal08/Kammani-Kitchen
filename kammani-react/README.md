# Kammani Telugu Kitchen — React Website

A fully responsive, production-ready React website for **Kammani Telugu Kitchen**, an authentic Telugu cuisine restaurant with 5 branches across Hyderabad.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimised production build in the `build/` folder ready for deployment.

---

## 📁 Project Structure

```
kammani-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Menu.js / Menu.css
│   │   ├── Branches.js / Branches.css
│   │   ├── Catering.js / Catering.css
│   │   ├── Reviews.js / Reviews.css
│   │   └── Footer.js / Footer.css
│   ├── hooks/
│   │   └── useReveal.js       ← Scroll animation hook
│   ├── App.js
│   ├── index.js
│   └── index.css              ← Global design tokens & base styles
└── package.json
```

---

## 🎨 Design System

All design tokens are defined as CSS variables in `src/index.css`:

| Token | Value | Usage |
|---|---|---|
| `--saffron` | `#E8872A` | Primary accent, CTAs |
| `--maroon` | `#7B1D1D` | Brand colour, navbar |
| `--maroon-deep` | `#4E0E0E` | Section backgrounds |
| `--ivory` | `#FDF6EC` | Light backgrounds |
| `--teak` | `#2C1A0E` | Footer background |
| `--ff-display` | Playfair Display | Headings & hero text |
| `--ff-body` | Nunito | Body copy & UI |

---

## 🧩 Sections

1. **Navbar** — Sticky, frosted-glass on scroll, mobile hamburger menu
2. **Hero** — Full-screen with animated glow, stats, CTA buttons
3. **About** — Story card with floating badge, brand pillars
4. **Menu** — 6 category cards (Biryani, Curries, Chinese, Starters, Soups, Desserts)
5. **Branches** — All 5 Hyderabad locations with live Swiggy/Zomato/Maps links
6. **Catering** — Features list + booking CTA box
7. **Reviews** — 3 real Google reviews with 4.4★ badge
8. **Footer** — Social links, navigation, order links

---

## 📦 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag the `build/` folder into [netlify.com/drop](https://netlify.com/drop)

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/kammani-telugu-kitchen"
npm run build && npx gh-pages -d build
```

---

## 📞 Contact Info (in the website)
- **Phone:** +91 91334 56668
- **Hours:** 11:00 AM – 11:00 PM, All Days
- **Instagram:** [@kammanitelugukitchen](https://www.instagram.com/kammanitelugukitchen)

---

*Built with React 18 · No external UI library dependencies*

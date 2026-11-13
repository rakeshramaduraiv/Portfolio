# Rakesh R – Portfolio

Personal portfolio website for **Rakesh R**, a final-year B.Tech AI & Data Science student.

**Live stack:** React 18 + Vite + Tailwind CSS 3  
**Features:** Dark/light toggle · Typing animation · Particle canvas hero · Scroll animations · Filter tabs · Contact form (Formspree) · LeetCode & GitHub stats cards · Back-to-top · Scroll progress bar · SEO meta + Open Graph

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev
```

---

## Deploy to Vercel (recommended – zero config)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**.
4. Done — every push to `main` auto-deploys.

---

## Deploy to GitHub Pages

### Option A – `gh-pages` package

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Set base in vite.config.js:
# base: '/YOUR_REPO_NAME/'   ← only if deploying to a sub-path

npm run deploy
```

Then in your GitHub repo → **Settings → Pages → Source → gh-pages branch**.

### Option B – GitHub Actions (auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Updating Content

All portfolio data lives in **`src/data.js`**. Edit that single file to update:
- Personal info, links, resume URL
- Skills, experience, projects, certifications, education

No other files need to change for content updates.

---

## Contact Form

The form uses [Formspree](https://formspree.io). To use your own endpoint:
1. Sign up at formspree.io and create a form.
2. Replace the endpoint URL in `src/components/Contact.jsx`:
   ```js
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...);
   ```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ParticleCanvas.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── CodingProfile.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ScrollUtils.jsx
├── hooks/
│   ├── useReveal.js
│   └── useTyping.js
├── data.js          ← all content here
├── App.jsx
├── main.jsx
└── index.css
```

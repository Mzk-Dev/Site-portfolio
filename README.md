# 👨‍💻 Maksym Cherenov - Portfolio Website

Modern React portfolio website for Full Stack Developer with blue professional design.

## 🎯 Features

- ✅ **Professional Hero Section** with photo and contact info
- ✅ **About Section** with skills and expertise
- ✅ **Work Experience Timeline** with 2 positions
- ✅ **Education Section** with university background
- ✅ **Responsive Design** - works on all devices
- ✅ **Clean Blue Theme** matching CV design
- ✅ **Social Links** to GitHub, LinkedIn

## 🚀 Quick Start

### Installation

```bash
# Extract
tar -xzf portfolio.tar.gz
cd portfolio

# Install with Yarn
yarn install

# Run dev server
yarn dev

# Build for production
yarn build
```

After `yarn dev` open http://localhost:5173

## 📁 Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Hero section with photo
│   │   ├── About.jsx        # Skills & expertise
│   │   ├── Experience.jsx   # Work history
│   │   ├── Education.jsx    # Education background
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx
│   ├── App.css             # All styles (564 lines)
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🎨 Sections

### 1. Hero
- Large photo on left (300x300px)
- Name and title on right
- Contact information card with:
  - Phone: +380999674439
  - Email: maximkasupp@gmail.com
  - Location: Krakow, Poland
- Social links (GitHub, LinkedIn)
- Blue gradient background

### 2. About
3 cards with:
- **Personal Profile** - Summary of experience
- **Areas of Expertise** - Technical skills list
- **Other Skills** - Soft skills

### 3. Work Experience
Timeline with 2 positions:
- **React Developer** at Hut8 (2023-2026)
- **WordPress Developer** at 88.eu (2020-2023)

Each with:
- Icon
- Company & period
- Responsibilities list

### 4. Education
- **Bachelor's Degree** - Kharkiv Polytechnic Institute
- **Secondary School** - Berdiansk School №11
- Full background story

### 5. Footer
- Name & title
- Quick links
- Social media icons
- Copyright

## 🎨 Customization

### Change Photo

Replace image URL in `Hero.jsx`:

```jsx
<img 
  src="YOUR_IMAGE_URL" 
  alt="Your Name"
/>
```

### Update Contact Info

Edit in `Hero.jsx`:

```jsx
<span>+YOUR_PHONE</span>
<span>your@email.com</span>
```

### Modify Colors

In `App.css`:

```css
:root {
  --primary: #3b6eb7;        /* Main blue */
  --primary-dark: #2c5490;   /* Dark blue */
}
```

### Add Experience

In `Experience.jsx` add to `jobs` array:

```jsx
{
  id: 3,
  title: 'YOUR TITLE',
  company: 'Company Name',
  period: '2020 – 2023',
  responsibilities: [...]
}
```

## 📱 Responsive

- **Desktop**: >960px - Full layout
- **Tablet**: 768-960px - Adjusted grid
- **Mobile**: <768px - Stacked layout

## 🔧 Technologies

- **React 18.2.0**
- **Vite 5.0.8** - Build tool
- **React Icons 5.0.1** - Icon library
- **Yarn** - Package manager

## 📝 Commands

```bash
yarn dev              # Dev server
yarn build            # Production build
yarn preview          # Preview build
```

## 🚀 Deployment

### Vercel
```bash
yarn build
vercel --prod
```

### Netlify
```bash
yarn build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
yarn build
# Copy dist/ to gh-pages branch
```

## 🎯 SEO Ready

- Semantic HTML
- Meta tags in `index.html`
- Descriptive alt texts
- Social media links

## 📄 License

MIT

## 👤 Contact

**Maksym Cherenov**
- Email: maximkasupp@gmail.com
- GitHub: https://github.com/Mzk-Dev/
- LinkedIn: https://www.linkedin.com/in/max-cherenov/
- Phone: +380999674439

---

Built with React + Vite ⚡

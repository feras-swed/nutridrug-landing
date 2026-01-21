# التداخلات الغذائية الدوائية Nutidrug interact - Landing Page

Modern, bilingual landing page for the التداخلات الغذائية الدوائية Nutidrug interact mobile application.

## 🌐 Live Demo

**GitHub Pages URL:** `https://feras-swed.github.io/nutridrug-landing/index.html`

## 📱 About

This landing page provides information and download access for the التداخلات الغذائية الدوائية Nutidrug interact app - a comprehensive offline medical guide for drug-food interactions.

## ✨ Features

- 🌍 **Bilingual Support** - Arabic and English with RTL/LTR
- 🎨 **Modern Design** - Medical theme with blue/green gradients
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Lightweight** - No frameworks, pure HTML/CSS/JS
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. That's it! No build tools required.

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page"
   git branch -M main
   git remote add origin https://github.com/feras-swed/nutridrug-landing.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Set Source to: `main` branch / `root`
5. Wait 1-2 minutes for deployment
6. Visit: `https://feras-swed.github.io/nutridrug-landing`

## 📦 Adding the APK Download Link

### Method 1: GitHub Releases (Recommended)

1. Go to your repository
2. Click on "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `NutriDrug Interact v1.0.0 - Beta`
5. Upload your APK file as an asset
6. Publish release
7. Copy the download URL (it will look like this):
   ```
   https://github.com/feras-swed/nutridrug-landing/releases/download/v1.0.0/nutidrug-interact.apk
   ```
8. Update `js/main.js` line ~115:
   ```javascript
   // Replace this line:
   // window.location.href = 'YOUR_GITHUB_RELEASE_URL';
   
   // With:
   window.location.href = 'https://github.com/feras-swed/nutridrug-landing/releases/download/v1.0.0/nutidrug-interact.apk';
   ```
9. Also update `index.html` to remove the "coming soon" note

## 📂 Project Structure

```
nutridrug-landing/
├── index.html          # Main landing page
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # Interactive functionality
├── images/
│   ├── logo.png       # App logo
│   ├── icon.png       # App icon
│   └── screenshots/   # App screenshots (optional)
└── README.md          # This file
```

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-blue: #2563eb;
    --primary-green: #10b981;
    --accent-teal: #14b8a6;
    /* ... more colors */
}
```

### Content

All content is in `index.html` with `data-ar` and `data-en` attributes for bilingual support.

### Adding Screenshots

1. Add your screenshot images to `images/screenshots/`
2. Update the hero section or create a new screenshots section in `index.html`

## 🔧 Technologies Used

- Pure HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Cairo for Arabic, Inter for English)
- Font Awesome Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is part of a graduation project for clinical nutrition students at the University of Science and Technology.

## 👨‍💻 Developer

**Feras Ezz El-Din Swed**
- LinkedIn: [feras-swed-722383205](https://www.linkedin.com/in/feras-swed-722383205/)
- WhatsApp: +967 737 972 946

## 🤝 Academic Team

Developed under the supervision of:
**Prof. Dr. Sadeq Hasan Al-Sharaji**
Professor of Clinical Nutrition - University of Science and Technology

---

Made with ❤️ for a healthier future

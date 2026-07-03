# ☕ Tanjore Degree Coffee

A beautiful, premium, and fully responsive landing page website for **Tanjore Degree Coffee**—an authentic South Indian filter coffee decoction brand. Founded in 2013 by Shri C. Saminathan, Tanjore Degree Coffee brings the true essence, rich aroma, and premium quality of traditional filter coffee to coffee lovers.

---

## 🌟 Features

- **Responsive Landing Page**: Clean and modern user interface optimized for all screen sizes (mobile, tablet, desktop).
- **Hero Banner**: A striking presentation of the brand's identity with the tagline *"Sip The Essence Of Luxury"*.
- **About Us Section**: Insights into the brand's origin, founder, and core values of **Authenticity** and **Quality**.
- **Interactive Image Gallery**: A showcase of high-quality coffee and cafe imagery.
- **Client Testimonials Slider**: An interactive, automated, and manual slide-show showcasing authentic client reviews.
- **Functional Contact Form**: A styled query form integrated directly with Formspree for easy message delivery.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structuring the content.
- **CSS3**: Custom styles featuring beautiful typography (Google Fonts Outfit/Material Symbols), hover animations, responsive media queries, and clean layouts.
- **JavaScript (ES6+)**: Custom dynamic features including:
  - Mobile hamburger navigation menu.
  - Automated auto-slide testimonials carousel with manual navigation controls.
  - Window resizing support to maintain slider alignment.
- **Iconography**: Font Awesome and Google Material Symbols.

---

## 📁 Project Directory Structure

```text
Tanjore/
├── Images/            # Image assets including logo, reviews, background, and gallery images
├── README.md          # Project documentation
├── coffee.css         # Styling stylesheet containing layout rules and responsive styling
├── home.js            # Vanilla JavaScript file for navigation and slider logic
├── index.html         # Main HTML document structure
└── versel.json        # Configuration file for Vercel deployment and routing rewrites
```

---

## 🚀 How to Run Locally

Since this is a client-side frontend project, you can run it directly:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KINSHUKHERE/Tanjore.git
   cd Tanjore
   ```

2. **Open in browser**:
   - Double-click `index.html` to open it in your browser.
   - Alternatively, use a development server like VS Code's **Live Server** extension or run:
     ```bash
     npx serve .
     ```

---

## 🌐 Deployment

The project is configured for deployment on [Vercel](https://vercel.com) using the `versel.json` configuration file, which maps routes to the main index file for a seamless Single Page Application experience:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 📞 Contact Details

- **Address**: 364, 37th Street TVS Avenue, Anna Nagar West Extn., Chennai - 600101
- **Phone**: +91 90031 06755
- **Email**: tanjoredegreecoffee@yahoo.in
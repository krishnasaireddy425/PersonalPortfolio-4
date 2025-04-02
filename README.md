# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio features a unique day/night mode toggle and interactive parallax scrolling effects.

## 🌟 Features

- Parallax Scrolling  
  The site uses React Spring’s Parallax component to create layered backgrounds for a captivating scrolling experience.

- Day/Night Mode  
  Users switch between a vibrant day mode and a tranquil night mode. This toggling mechanism integrates smoothly with the site’s layout and navigation.

- Responsive Layout  
  The design adjusts for various screen sizes and mobile devices, ensuring an optimal user experience.

- Animated Transitions and Effects  
  Framer Motion handles visual animations, providing smooth transitions and hover effects to enhance interactivity.

- Sectioned Content  
  It includes clear sections: Hero, About, Projects, and Contact. Each section loads within the parallax layout or the day mode layout, depending on the user’s preference.

- Interactive Contact Form  
  Visitors can submit inquiries or feedback from within the portfolio itself.

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/PersonalPortfolio-4.git
cd PersonalPortfolio-4
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 📦 Project Structure

```
client/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── App.tsx        # Main application component
├── public/
│   └── assets/        # Static assets (images, SVGs)
└── index.html         # Entry HTML file
```

## 🚀 Deployment

The project is configured for deployment on GitHub Pages:

1. Build the project:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

## 👤 Author

Krishna Sai Reddy Peddinti


# Modern Portfolio Website

A sleek and interactive portfolio website built with React, TypeScript, and Tailwind CSS, featuring particle animations and smooth transitions.

## Features

- Interactive particle background animation
- Smooth scroll animations using Framer Motion
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript
- Dynamic project showcase
- Contact form integration
- Modern UI components with shadcn/ui

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - @tsparticles/react
  - shadcn/ui components

- **Backend:**
  - Node.js
  - Express
  - PostgreSQL with Drizzle ORM

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts
└── shared/
    └── schema.ts
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the app

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run check` - Type-check the codebase

## Features Breakdown

- **Hero Section:** Dynamic typewriter effect and particle animation background
- **About Section:** Animated skill cards and professional summary
- **Projects Section:** Grid layout of featured projects with hover animations
- **Contact Section:** Integrated contact form with validation

## Deployment

The project is configured for deployment on Replit with automatic builds and deployments.

## Environment Variables

Required environment variables:
- `DATABASE_URL`: PostgreSQL database connection string
- Other configuration variables as needed

## License

MIT License


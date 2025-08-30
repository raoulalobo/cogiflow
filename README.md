# FlowTech Website

A modern, responsive website for FlowTech - an all-in-one business automation platform. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, minimalist design inspired by leading automation platforms
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js App Router for optimal performance
- 🎭 **Interactive Components**: Engaging animations and micro-interactions
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper focus management
- 🎯 **SEO Optimized**: Meta tags, structured data, and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Custom components built on shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and animations
├── components/
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── HowItWorks.tsx    # Process explanation
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── FinalCTA.tsx      # Call-to-action section
│   └── Footer.tsx        # Site footer
└── lib/
    └── utils.ts          # Utility functions
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Color Palette

The website uses a carefully crafted color palette:

- **Primary**: Purple (#8B5CF6, #A855F7) - Main brand color
- **Secondary**: Blue (#3B82F6, #2563EB) - Accent color
- **Gradients**: Purple to Blue transitions
- **Neutrals**: Modern grays (#F8FAFC, #1E293B)

## Sections Overview

1. **Header**: Sticky navigation with mobile menu
2. **Hero**: Compelling headline with animated dashboard preview
3. **Services**: Four key service offerings with interactive cards
4. **How It Works**: Three-step process explanation
5. **Testimonials**: Customer success stories with statistics
6. **Final CTA**: Email capture form with trial signup
7. **Footer**: Site links and company information

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic code splitting by Next.js
- **Responsive Images**: Multiple breakpoints for optimal loading
- **Lazy Loading**: Components loaded on demand

## Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Responsive Text**: Scalable typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software for FlowTech.
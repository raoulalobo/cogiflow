# FlowTech Website - Project Documentation

## 🎯 Project Overview
**FlowTech** - Custom automation website emphasizing "Test-Before-Pay" approach and bespoke n8n solutions.

## 🏗️ Technical Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom Design System
- **UI Components:** Custom shadcn/ui components
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## 🎨 Design System
### Color Palette
- **Primary:** Purple (#8B5CF6, #A855F7)
- **Secondary:** Blue (#3B82F6, #2563EB) 
- **Gradients:** Purple-to-Blue
- **Neutrals:** Modern grays

### Key Design Principles
- Minimalist, professional aesthetic
- Gradient text for emphasis
- Subtle animations and micro-interactions
- Mobile-first responsive design

## 🚀 Development Commands
```bash
npm run dev     # Development server (localhost:3001)
npm run build   # Production build
npm run start   # Production server
npm run lint    # Code linting
```

## 📁 Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── HowItWorks.tsx      # Process explanation (Test-Before-Pay)
│   ├── Opportunities.tsx   # Template problems vs custom solutions
│   ├── PricingPhilosophy.tsx # Pricing approach explanation
│   ├── FinalCTA.tsx        # Call-to-action section
│   └── Footer.tsx          # Site footer
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## 🎯 Business Positioning

### Core Value Proposition
- **No Generic Templates:** 100% custom automation solutions
- **Test-Before-Pay:** Zero upfront risk for clients
- **Affordable Pricing:** Accessible to all business sizes
- **Personal Guidance:** Custom consultation and ongoing support

### Key Differentiators
1. **Custom-Built Solutions:** No templates, everything built from scratch
2. **Risk-Free Model:** Clients test and approve before paying
3. **Personal Approach:** One-on-one consultation and support
4. **Fair Pricing:** No hidden costs, transparent pricing

### Target Message
"Stop wasting time with generic templates. Get custom n8n automation built specifically for YOUR business. Test everything first, pay only when you're completely satisfied."

## 🔧 Technical Notes

### Important Files
- `tailwind.config.js` - Custom design tokens and colors
- `next.config.js` - Next.js configuration
- `src/app/layout.tsx` - SEO metadata and page structure
- `src/app/globals.css` - Custom animations and global styles

### Custom Animations
- Blob animations for background elements
- Smooth transitions and hover effects
- Custom gradient text effects
- Responsive micro-interactions

### Performance Features
- Optimized images and assets
- Mobile-first responsive design
- Fast page loads with Next.js optimization
- SEO-optimized metadata

## 🎨 Component Guide

### Hero Section
- Emphasizes custom solutions over templates
- "Test-Before-Pay" value propositions
- Animated dashboard preview mockup

### Services Section  
- Personal consultation focus
- Bespoke development emphasis
- Custom AI agents and n8n workflows

### How It Works
- 3-step "Test-Before-Pay" process
- Risk-free approach highlighted
- Clear benefit explanations

### Pricing Philosophy
- Addresses template confusion problem
- Explains custom approach benefits
- Transparent pricing model

## 🌟 Key Success Metrics
- Clear differentiation from template-based competitors
- Emphasis on custom, bespoke solutions
- Risk-free value proposition
- Professional, trustworthy presentation

## 📝 Content Strategy
- **Problem-focused:** Addresses template confusion
- **Solution-oriented:** Custom automation benefits
- **Trust-building:** Test-before-pay approach
- **Value-driven:** Affordable, accessible pricing

---
*Last Updated: 2025-08-30*
*Site URL: http://localhost:3001*
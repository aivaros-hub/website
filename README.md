# Aivaros.ai Marketing Website

A modern, production-ready marketing website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **SEO Optimized**: Meta tags, semantic HTML, and proper heading structure
- **Premium Design**: Clean, minimalistic UI with smooth animations
- **Multi-Page Structure**: Complete website with navigation and routing
- **Contact Form**: Client-side validation with backend integration placeholder
- **Accessible**: WCAG compliant components

## 📄 Pages

1. **Home** (`/`) - Hero, platform features, agent suites overview
2. **Agent Ecosystem** (`/agent-ecosystem`) - Deep dive into AI agent platform
3. **Products** (`/products`) - Detailed agent suite descriptions
4. **Industries** (`/industries`) - Industry-specific solutions
5. **About** (`/about`) - Company vision, mission, and story
6. **Contact** (`/contact`) - Contact form and company information
7. **Privacy Policy** (`/privacy`) - Privacy policy
8. **Terms of Service** (`/terms`) - Terms and conditions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Animations**: Framer Motion (optional)

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
aivaros-website/
├── app/
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── agent-ecosystem/    # Agent ecosystem page
│   ├── products/           # Products/suites page
│   ├── industries/         # Industries page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
├── components/
│   └── layout/
│       ├── Navigation.tsx  # Header navigation
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Design System

### Colors

- **Brand Purple**: `#6366F1`
- **Brand Blue**: `#3B82F6`
- **Brand Teal**: `#14B8A6`
- **Dark**: `#0F172A`
- **Light**: `#F8FAFC`

### Typography

- **Font Family**: Inter
- **Headings**: Bold, large sizes
- **Body**: Regular weight, comfortable line-height

## 🔧 Customization

### Updating Company Information

Edit the footer and contact page to update:
- Address: `981 Verdin St, Prosper, Texas 75078`
- Email: `connect@aivaros.ai`

### Adding Backend Integration

The contact form in `app/contact/page.tsx` has a placeholder for backend integration:

```typescript
// TODO: Replace with actual API endpoint
// await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
```

### Modifying Content

All page content is in the respective page files under the `app/` directory. Simply edit the components to update text, images, or layout.

## 🚢 Deployment

This Next.js app can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **AWS/GCP/Azure**: Use containerization or static export

### Environment Variables

Add any environment variables to `.env.local`:

```bash
# Example
NEXT_PUBLIC_API_URL=https://api.aivaros.ai
```

## 📝 License

© 2025 Aivaros.ai. All rights reserved.

## 📞 Support

For questions or support, contact: connect@aivaros.ai

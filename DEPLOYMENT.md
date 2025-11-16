# Deployment Guide for Aivaros.ai Website

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"
7. Your site will be live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Netlify Deployment

```bash
# Build the site
npm run build

# Netlify will use these settings:
# Build command: npm run build
# Publish directory: .next
```

## Custom Domain Setup

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add "aivaros.ai"
4. Follow DNS configuration instructions

### DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Environment Variables

If you need environment variables for production:

1. In Vercel/Netlify dashboard, go to Settings → Environment Variables
2. Add variables like:
   - `NEXT_PUBLIC_API_URL`
   - `CONTACT_FORM_API_KEY`
   - etc.

## Performance Optimization

The site is already optimized with:
- ✅ Static generation where possible
- ✅ Image optimization (use Next.js Image component when adding images)
- ✅ Code splitting
- ✅ Font optimization (Inter loaded via next/font/google)

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test page load speed (aim for <3s)
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Submit sitemap to Google Search Console

## Monitoring

Consider adding:
- **Analytics**: Google Analytics, Plausible, or Fathom
- **Error Tracking**: Sentry
- **Performance Monitoring**: Vercel Analytics or Web Vitals

## Updating Content

To update content after deployment:
1. Edit the files in your local repo
2. Commit and push to Git
3. Vercel/Netlify will auto-deploy the changes

## Contact Form Backend

The contact form currently uses client-side validation with a placeholder for backend integration.

### Option 1: Vercel Serverless Functions

Create `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using SendGrid, Resend, or your email service
  // await sendEmail(data);
  
  return NextResponse.json({ success: true });
}
```

### Option 2: External Form Service
- Formspree
- Netlify Forms
- EmailJS

## Support

For deployment issues, contact: connect@aivaros.ai

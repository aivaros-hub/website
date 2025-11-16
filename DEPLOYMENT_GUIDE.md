# Aivaros.ai Website - Cloudflare Pages Deployment

This repository is configured for automatic deployment to Cloudflare Pages (100% FREE, unlimited bandwidth).

## 🚀 One-Time Setup Instructions

### Step 1: Create Cloudflare Pages Project

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign up/login (free)
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Connect your GitHub account and select `aivaros-hub/website`
5. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
6. Click **Save and Deploy**

### Step 2: Get Cloudflare Credentials

#### Get API Token:
1. Go to [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use template: **Edit Cloudflare Workers**
4. Or create custom token with permissions:
   - Account → Cloudflare Pages → Edit
5. Click **Continue to summary** → **Create Token**
6. **Copy the token** (save it securely - you won't see it again!)

#### Get Account ID:
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Workers & Pages** in sidebar
3. Your **Account ID** is shown in the right sidebar
4. Or find it in the URL: `dash.cloudflare.com/YOUR_ACCOUNT_ID/`

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository: `https://github.com/aivaros-hub/website`
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"** and add these TWO secrets:

| Secret Name | Value | Where to Get It |
|------------|-------|-----------------|
| `CLOUDFLARE_API_TOKEN` | Your API token | From Step 2 above |
| `CLOUDFLARE_ACCOUNT_ID` | Your account ID | From Step 2 above |

### Step 4: Connect Your Domain (aivaros.ai)

#### In Cloudflare:
1. In Cloudflare dashboard, go to **Workers & Pages**
2. Click on your `aivaros-website` project
3. Go to **Custom domains** tab
4. Click **Set up a custom domain**
5. Enter: `aivaros.ai`
6. Cloudflare will show you DNS records to add

#### Update GoDaddy DNS:

**Option A: Use Cloudflare Nameservers (Recommended)**
1. In Cloudflare, click **Add site** and enter `aivaros.ai`
2. Cloudflare will give you 2 nameservers (e.g., `nina.ns.cloudflare.com`)
3. Go to GoDaddy → Domain Settings → Nameservers
4. Change to **Custom** and enter Cloudflare's nameservers
5. Wait 5-30 minutes for DNS propagation

**Option B: Keep GoDaddy DNS (Add CNAME)**
1. Go to GoDaddy → DNS Management for aivaros.ai
2. Add these records:

```
Type: CNAME
Name: @
Value: aivaros-website.pages.dev
TTL: 600

Type: CNAME  
Name: www
Value: aivaros-website.pages.dev
TTL: 600
```

## ✅ That's It!

Now every time you push to `main`, your site will automatically deploy to Cloudflare Pages!

## 🎉 Benefits of Cloudflare Pages

- ✅ **100% FREE forever** (no bandwidth limits)
- ✅ **Unlimited requests**
- ✅ **Global CDN** (fast worldwide)
- ✅ **Automatic HTTPS/SSL**
- ✅ **Built-in DDoS protection**
- ✅ **No credit card required**

## 🔄 How It Works

1. Push code to GitHub `main` branch
2. GitHub Action triggers automatically
3. Builds your Next.js site
4. Deploys to Cloudflare Pages
5. Your site is live at https://aivaros.ai 🎉

## 📝 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 🔧 Troubleshooting

### If deployment fails:
1. Check GitHub Actions logs
2. Verify secrets are set correctly
3. Make sure Cloudflare project name is `aivaros-website`
4. Check build logs in Cloudflare dashboard

### If domain doesn't work:
1. Wait 5-30 minutes for DNS propagation
2. Verify DNS records in Cloudflare/GoDaddy
3. Check SSL certificate is active in Cloudflare

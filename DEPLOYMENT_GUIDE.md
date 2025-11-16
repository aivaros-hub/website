# Aivaros.ai Website - Auto Deployment Setup

This repository is configured for automatic deployment to Vercel on every push to `main`.

## 🚀 Setup Instructions

### 1. Create Vercel Project

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import this GitHub repository: `aivaros-hub/website`
4. Click **Deploy**

### 2. Get Vercel Credentials

After your first deployment, get these values from Vercel:

#### Get Vercel Token:
1. Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Create a new token with name: `GitHub Actions`
3. Copy the token (save it securely)

#### Get Project IDs:
Run these commands in your terminal:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Get your IDs (they're in .vercel/project.json)
cat .vercel/project.json
```

You'll see output like:
```json
{
  "orgId": "team_xxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxx"
}
```

### 3. Add GitHub Secrets

1. Go to your GitHub repository: `https://github.com/aivaros-hub/website`
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"** and add these three secrets:

| Secret Name | Value | Where to Get It |
|------------|-------|-----------------|
| `VERCEL_TOKEN` | Your Vercel token | From Step 2 above |
| `VERCEL_ORG_ID` | Your org/team ID | From `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Your project ID | From `.vercel/project.json` |

### 4. Connect Your Domain (aivaros.ai)

1. In Vercel dashboard, go to your project
2. Click **Settings → Domains**
3. Add: `aivaros.ai` and `www.aivaros.ai`
4. Update your GoDaddy DNS:

**For aivaros.ai:**
```
Type: A Record
Name: @
Value: 76.76.21.21
TTL: 600
```

**For www.aivaros.ai:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

## ✅ That's It!

Now every time you push to `main`, your site will automatically deploy to production!

## 🔄 How It Works

1. Push code to GitHub `main` branch
2. GitHub Action triggers automatically
3. Builds your Next.js site
4. Deploys to Vercel
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
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

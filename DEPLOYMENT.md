# Literacy Through Technology Initiative - Vercel Deployment Guide

## Pre-Deployment Setup Complete ✅

The following files have been configured for Vercel deployment:

### 1. Updated `package.json`
- Added proper scripts section with build, start, dev commands
- Added @vercel/node dependency for API functions
- Set proper name and version

### 2. Created `vercel.json`
- Configured to use pnpm as package manager
- Set proper build and output directories
- Configured SPA routing for React Router

### 3. Created `.nvmrc`
- Specifies Node.js version 18 for Vercel

### 4. Updated `server.ts`
- Added Vercel compatibility
- Added API health check endpoint
- Configured for both local development and production

### 5. Created `api/index.ts`
- Sample Vercel API function for testing

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N** (for first deployment)
   - Project name: **literacy-through-technology** (or your preference)
   - Directory: **./** (current directory)

4. For subsequent deployments:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel at [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the configuration and deploy

## Environment Variables (Important!)

If your application needs environment variables, set them in Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add any required variables from your `env.json` file

**Note**: Your `env.json` file is gitignored for security, so you'll need to manually configure these in Vercel's dashboard.

## Build Configuration Summary

- **Framework**: React with Vite
- **Package Manager**: pnpm
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Node Version**: 18
- **API Functions**: Located in `/api` directory

## Troubleshooting

### Common Issues:

1. **npm Error on Vercel**: Fixed by configuring pnpm in vercel.json
2. **Build Failures**: Ensure all dependencies are properly listed in package.json
3. **Routing Issues**: Configured SPA routing in vercel.json for React Router
4. **API Endpoints**: Use `/api/*` paths for serverless functions

### Testing Locally:

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Test the built application
pnpm start
```

## Post-Deployment

After successful deployment, your app will be available at:
- Production: `https://your-app-name.vercel.app`
- API endpoint: `https://your-app-name.vercel.app/api`

The deployment is now ready! 🚀
# GitHub Pages Deployment Guide

## Quick Deploy Steps

### Option 1: Using the dist folder

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy the `dist/` folder contents** to the root of your GitHub Pages repository

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

### Option 2: Manual Build and Deploy

1. **Navigate to your GitHub repository root**:
   ```bash
   cd C:\Users\shriselvam24\Desktop\sivaramgs.github.io
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **The dist folder will be automatically deployed via GitHub Actions**

4. **Go back to repository root and commit**:
   ```bash
   cd ..
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

## ✅ What Was Cleaned Up

The following unnecessary files were removed:
- CUSTOMIZATION.md
- DEPLOYMENT.md
- DOCUMENTATION_INDEX.md
- INSTALL_NODEJS.md
- PRELAUNCH_CHECKLIST.md
- PREVIEW.html
- PROJECT_SUMMARY.md
- QUICKSTART.md
- START_HERE.md
- public/assets/img/README.md

## 📦 Production Bundle

The production build is now in the `dist/` folder with:
- Optimized and minified JavaScript
- Compressed CSS (27.17 kB → 4.99 kB gzipped)
- Optimized assets
- Total bundle size: ~95 kB gzipped

## 🌐 GitHub Pages Settings

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select branch: `main` and folder: `/` (root)
5. Save and wait for deployment

Your portfolio will be live at: `https://sivaramgs.github.io/`

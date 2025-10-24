# GitHub Pages Deployment Guide

This guide documents all changes needed to deploy a Vite + React + TypeScript application to GitHub Pages with full PWA support, dynamic routing, and repository portability.

## Prerequisites

- Vite + React + TypeScript application
- React Router for client-side routing
- GitHub repository

## Required Changes

### 1. TypeScript Configuration

**Create `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Create `tsconfig.node.json`:**
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

**Create `src/vite-env.d.ts`:**
```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PROD: boolean
    readonly DEV: boolean
    readonly MODE: string
    readonly BASE_URL: string
    readonly SSR: boolean
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
```

### 2. Update `package.json`

Add TypeScript and React type definitions to `devDependencies`:
```json
{
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "typescript": "^5.3.3",
    "vite": "6.3.5"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Then run: `npm install`

### 3. Configure Vite for Dynamic Base Path

**Update `vite.config.ts`:**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Use VITE_BASE_PATH env variable, or default to root path
  // For GitHub Pages: VITE_BASE_PATH is auto-set by GitHub Actions using repo name
  // For custom domain: defaults to '/' (root)
  // For local development: uses '/' (root)
  const base = process.env.VITE_BASE_PATH || '/';
  
  return {
    base,
    publicDir: 'src/public',
    plugins: [react()],
    resolve: {
      // ... your existing aliases ...
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
```

### 4. Update `index.html` for PWA

Replace your `<head>` section with:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App Name</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    
    <!-- Apple Touch Icon (iOS) -->
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    
    <!-- PWA Manifest -->
    <link rel="manifest" href="/manifest.json" />
    
    <!-- Theme Color (for mobile browsers) -->
    <meta name="theme-color" content="#000000" />
    
    <!-- Apple Mobile Web App -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Your App Name" />
    
    <!-- Description for SEO and PWA -->
    <meta name="description" content="Your app description" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 5. Update `.gitignore`

Add these lines:
```
/node_modules
/build
/.vite
.DS_Store
```

### 6. PWA Configuration Files

**Create `src/public/manifest.json`:**
```json
{
  "name": "Your App Name",
  "short_name": "App",
  "description": "Your app description",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "orientation": "any",
  "icons": [
    {
      "src": "./icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./icon-maskable-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

**Create `src/public/.nojekyll`:**
Empty file (prevents GitHub Pages from ignoring underscore-prefixed files)

**Create `src/public/404.html`:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script>
      // Redirect to index.html with the path stored in sessionStorage
      // Automatically detect the base path from the current location
      sessionStorage.setItem('redirectPath', location.pathname + location.search + location.hash);
      
      // Get the base path by finding where /404.html is located
      const currentPath = location.pathname;
      const basePath = currentPath.substring(0, currentPath.lastIndexOf('/404.html'));
      
      // Redirect to the base path (root of the app)
      location.replace(basePath || '/');
    </script>
    <title>Redirecting...</title>
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

**Create `src/public/service-worker.js`:**
```javascript
const CACHE_NAME = 'app-v1';

// Dynamically determine the base path from the service worker's scope
function getBasePath() {
  const scope = self.registration.scope;
  const url = new URL(scope);
  return url.pathname;
}

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const basePath = getBasePath();
      return cache.addAll([
        basePath,
        `${basePath}index.html`
      ]);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const basePath = getBasePath();
  
  // For navigation requests (HTML pages), always return index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(`${basePath}index.html`);
      })
    );
    return;
  }

  // For other requests, try cache first, then network
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### 7. Update React Router Configuration

**Update `src/App.tsx`:**
```typescript
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  // Use Vite's BASE_URL which is set from vite.config.ts base option
  const basename = import.meta.env.BASE_URL;
  
  return (
    <>
      <ServiceWorkerRegistration />
      <Router basename={basename}>
        <RedirectHandler />
        {/* Your routes */}
      </Router>
    </>
  );
}

// Component to handle 404.html redirects from GitHub Pages
function RedirectHandler() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      const basePath = import.meta.env.BASE_URL;
      const cleanPath = redirectPath.replace(basePath, '/');
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
}
```

### 8. Service Worker Registration

**Create `src/components/ServiceWorkerRegistration.tsx`:**
```typescript
import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Use Vite's BASE_URL which automatically uses the correct path
        const basePath = import.meta.env.BASE_URL;
        const swPath = `${basePath}service-worker.js`;
        
        navigator.serviceWorker
          .register(swPath)
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return null;
}
```

### 9. Create PWA Icons

Create these image files in `src/public/`:
- `favicon.png` (32x32 or 48x48px)
- `apple-touch-icon.png` (180x180px, solid background)
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)
- `icon-maskable-512.png` (512x512px, important content in center 80%)

### 10. GitHub Actions Workflow

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        env:
          # Auto-detect deployment type:
          # - If CNAME exists (custom domain): use root path '/'
          # - If no CNAME (GitHub Pages subdirectory): use '/{repo-name}/'
          VITE_BASE_PATH: ${{ hashFiles('CNAME') != '' && '/' || format('/{0}/', github.event.repository.name) }}
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './build'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Deployment Steps

### Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build and preview:**
   ```bash
   npm run build
   npm run preview
   ```

### GitHub Pages Setup

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Wait for the workflow to complete

3. **Access your site:**
   - Site will be available at: `https://[username].github.io/[repo-name]/`

### For Custom Domain

If deploying to a custom domain (e.g., `yourdomain.com`):

1. **Configure custom domain:**
   - Go to Settings → Pages
   - Add your custom domain under "Custom domain"
   - GitHub will automatically create a `CNAME` file in your repository root
   - Configure DNS as per GitHub's instructions

2. **Push the CNAME file:**
   ```bash
   git pull  # Pull the CNAME file GitHub created
   git push  # Triggers rebuild with automatic root path detection
   ```

**That's it!** The workflow automatically detects the `CNAME` file and uses root path (`/`) instead of the subdirectory path. No manual workflow changes needed!

## Key Features

✅ **Repository Portable** - Works with any repository name, no hardcoded paths  
✅ **Auto-Detection** - GitHub Actions automatically detects repo name and custom domain  
✅ **Smart CNAME Detection** - Automatically uses root path when custom domain is configured  
✅ **PWA Support** - Full Progressive Web App with offline capabilities  
✅ **Client-Side Routing** - React Router works with direct URL access  
✅ **Zero Configuration** - No manual workflow changes needed for custom domains  
✅ **TypeScript** - Full type safety for Vite environment variables  

## Troubleshooting

### Blank Page After Deployment
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Check GitHub Actions tab for build errors
- Verify GitHub Pages source is set to "GitHub Actions"

### 404 on Routes
- Ensure `404.html` exists in `src/public/`
- Check that `RedirectHandler` component is included in App.tsx

### Service Worker Not Registering
- Check console for errors
- Verify base path matches deployment URL
- Clear browser cache and service worker

### Assets Not Loading
- Verify `base` path in `vite.config.ts` is correctly configured
- Check that `publicDir` points to `src/public`
- Ensure all icon files exist in `src/public/`

## Repository Portability

This configuration is **fully portable**. To use it for a new project:

1. Clone/fork the repository
2. Rename repository to anything you want
3. Push to GitHub
4. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
5. Done! Automatically works with new repo name

No need to search and replace repository names anywhere in the code!



# Bonsai Brand Website

This repo provides a full setup for a GitHub Pages hosted React website. If you are using Figma Make to build your website then specific instructions to adapt the generated code to a version that is compatible with GitHub Pages is available within the [GITHUB-PAGES.md](GITHUB-PAGES.md) file.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to build for production.

Run `npm run preview` to preview the production build locally.

## Deployment

This site is configured to work on any repository name, custom domain, or subdirectory - **completely automatically!**

### GitHub Pages Subdirectory (Automatic)

Deploys to: `https://[your-username].github.io/[repo-name]/`

**If starting with an empty repository:**
1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch
5. The site will be automatically deployed

**If you've already made your initial commit:**
1. Configure GitHub Pages (Settings → Pages → Source: GitHub Actions)
2. Either click "Run workflow" in the Actions tab, or run:
   ```bash
   git commit --allow-empty -m "Trigger GitHub Pages deployment"
   git push origin main
   ```

**✨ Zero configuration needed!** The GitHub Actions workflow automatically detects your repository name and configures the base path. Works with any repo name, even if you rename it or clone the repo!

### Custom Domain at Root

Deploys to: `https://yourdomain.com/`

1. Configure your custom domain in GitHub Pages settings (Settings → Pages → Custom domain)
2. Update `.github/workflows/deploy.yml` and remove the VITE_BASE_PATH environment variable:
```yaml
- name: Build
  run: npm run build  # Remove env section
```

That's it! The site will automatically work at the root of your custom domain.

### Cloning for a New Project

This template is fully portable! When you clone or fork this repo:

1. **Rename the repository** to anything you want
2. Push to GitHub
3. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)
4. Done! It automatically works with your new repo name

No need to search and replace "Bonsaicopy" anywhere - it's all dynamic!

### How It Works

The site intelligently adapts to its environment:

- **GitHub Actions**: Auto-detects repository name from `github.event.repository.name`
- **Base Path**: Automatically set to `/[repo-name]/` for GitHub Pages subdirectories
- **Custom Domain**: Defaults to `/` (root) when no environment variable is set
- **Local Development**: Always uses `/` (root) for localhost

All paths (manifest, service worker, routing, 404 redirects) dynamically adjust to work anywhere!

**Note**: The `rollupOptions` configuration in `vite.config.ts` is essential for GitHub Pages to properly serve the custom 404.html file for client-side routing.
  
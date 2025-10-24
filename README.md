
# Bonsai (Copy)

This is a code bundle for Bonsai (Copy). The original project is available at https://www.figma.com/design/Di3JgV3LTTJ6FxpbLzb0lA/Bonsai--Copy-.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to build for production.

Run `npm run preview` to preview the production build locally.

## Deployment

This site is configured to work on multiple domains and paths automatically.

### GitHub Pages Subdirectory (Default)

Deploys to: `https://[your-username].github.io/Bonsaicopy/`

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch
5. The site will be automatically deployed

**No additional configuration needed** - the default build uses `/Bonsaicopy/` as the base path.

### Custom Domain at Root

Deploys to: `https://yourdomain.com/`

To deploy to a custom domain at the root path:

1. Create a `.env` file in the project root:
```bash
VITE_BASE_PATH=/
```

2. Update `.github/workflows/deploy.yml` to use the environment variable:
```yaml
- name: Build
  run: VITE_BASE_PATH=/ npm run build
```

3. Configure your custom domain in GitHub Pages settings

### How It Works

The site automatically detects its deployment environment:

- **Base Path**: Configured in `vite.config.ts` using `VITE_BASE_PATH` environment variable
- **Default Development**: Uses `/` for local development
- **Default Production**: Uses `/Bonsaicopy/` for GitHub Pages subdirectory
- **Custom Deployment**: Set `VITE_BASE_PATH=/` for root domain deployment

All paths (manifest, service worker, routing, 404 redirects) automatically adjust to work on any domain or subdirectory!
  
# ArivLabs Website

Professional website for ArivLabs - the professional entity of Varun K Nair.

## Version Control

This website supports two versions controlled by environment variables:

### Minimal Version (Default)
- Employment-safe professional profile
- Current role at Cyberdesk GmbH highlighted
- Contact information and professional background
- Perfect for maintaining online presence during employment

### Full Business Version
- Complete business website with services
- Pricing and engagement models
- Staff augmentation and consulting offerings
- Ready for active business operations

## Configuration

### Local Development
1. Copy `env.example` to `.env`
2. Set `VITE_ENABLE_FULL_VERSION=true` for full business version
3. Set `VITE_ENABLE_FULL_VERSION=false` or leave empty for minimal version (default)

### Netlify Deployment
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add `VITE_ENABLE_FULL_VERSION` with value `true` or `false`
3. Redeploy to apply changes

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

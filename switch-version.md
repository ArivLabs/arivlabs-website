# ArivLabs Website Version Switcher

## Current Setup

### Minimal Version (Currently Active)
- **Purpose**: Safe for Cyberdesk employment period
- **Content**: Personal profile, current role, limited consulting availability
- **Entry Point**: `src/main.tsx` → `MinimalApp.tsx`

### Full Version (Backed Up)
- **Purpose**: Complete business website for future use
- **Location**: `backup/full-version/`
- **Content**: Full services, pricing, business operations

## How to Switch Versions

### To Activate Full Version (Future):
```bash
# 1. Backup current minimal version
cp src/main.tsx backup/minimal-version-main.tsx
cp -r src/components/Minimal* backup/minimal-components/

# 2. Restore full version
cp backup/full-version/App.tsx src/
cp backup/full-version/HomePage.tsx src/pages/
cp -r backup/full-version/components/* src/components/

# 3. Update main.tsx to use full App
# Change: import MinimalApp from './MinimalApp.tsx'
# To:     import App from './App.tsx'
# Change: <MinimalApp />
# To:     <App />
```

### To Revert to Minimal Version:
```bash
# 1. Restore minimal main.tsx
cp backup/minimal-version-main.tsx src/main.tsx

# 2. Ensure minimal components exist
# (They should still be there)
```

## Files Structure

```
src/
├── main.tsx                    # Entry point (currently minimal)
├── App.tsx                     # Full version app (backed up)
├── MinimalApp.tsx              # Minimal version app (active)
├── components/
│   ├── Logo.tsx               # Shared component
│   ├── Header.tsx             # Full version (backed up)
│   ├── Footer.tsx             # Full version (backed up)
│   ├── MinimalHeader.tsx      # Minimal version (active)
│   ├── MinimalFooter.tsx      # Minimal version (active)
│   └── Minimal*.tsx           # All minimal components
└── pages/
    ├── HomePage.tsx           # Full version (backed up)
    └── MinimalHomePage.tsx    # Minimal version (active)

backup/
└── full-version/
    ├── App.tsx
    ├── HomePage.tsx
    └── components/
        ├── Header.tsx
        ├── Footer.tsx
        ├── HeroSection.tsx
        ├── ServicesSection.tsx
        ├── PricingSection.tsx
        ├── AboutSection.tsx
        └── ContactSection.tsx
```

## Safety Notes

- **Current deployment**: Only minimal version code is included in build
- **Source visibility**: Only minimal components visible in browser dev tools
- **Professional positioning**: Clearly states current employment at Cyberdesk
- **Consulting availability**: Positioned as "select projects" not active business
- **Easy restoration**: Full version can be restored in minutes when needed

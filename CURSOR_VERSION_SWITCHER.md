# ArivLabs Website Version Switcher - Cursor AI Prompt

## 🎯 **INSTRUCTIONS FOR CURSOR AI**

You are helping manage two versions of the ArivLabs website:

### **Version A: MINIMAL (Employment-Safe)**
- **Purpose**: Safe for Cyberdesk employment period
- **Content**: Personal profile, current role, no active business operations
- **Key Files**: All `Minimal*.tsx` components, `MinimalApp.tsx`

### **Version B: FULL (Complete Business)**  
- **Purpose**: Complete business website for future use
- **Content**: Full services, pricing, business operations
- **Key Files**: `App.tsx`, `HomePage.tsx`, standard components

---

## 🔄 **SWITCHING COMMANDS**

### **To Switch to FULL Business Version:**
```
Switch ArivLabs website to FULL business version. This should:

1. **Backup current minimal version:**
   - Copy `src/main.tsx` to `backup/minimal-version/main.tsx`
   - Copy all `src/components/Minimal*.tsx` to `backup/minimal-version/`
   - Copy `src/MinimalApp.tsx` to `backup/minimal-version/`
   - Copy `src/pages/MinimalHomePage.tsx` to `backup/minimal-version/`
   - Copy `index.html` to `backup/minimal-version/index.html`

2. **Restore full version:**
   - Copy `backup/full-version/App.tsx` to `src/App.tsx`
   - Copy `backup/full-version/HomePage.tsx` to `src/pages/HomePage.tsx`
   - Copy all files from `backup/full-version/components/` to `src/components/`
   - Copy `backup/full-version/index.html` to `index.html`

3. **Update main.tsx:**
   - Change import from `MinimalApp` to `App`
   - Change component from `<MinimalApp />` to `<App />`

4. **Update index.html with full business SEO:**
   - Title: "ArivLabs - Boutique Engineering Services for Startups & Enterprises"
   - Description: Business services and consulting
   - Keywords: "engineering consulting, staff augmentation, CTO advisory, boutique engineering"
   - Business structured data (Organization schema)
   - Open Graph type: "website"
   - Remove personal profile schema

5. **Update sitemap.xml for business:**
   - Add services pages
   - Add pricing/engagement pages
   - Update priorities for business content

The result should be a complete business website with services, pricing, and full functionality.
```

### **To Switch to MINIMAL Employment-Safe Version:**
```
Switch ArivLabs website to MINIMAL employment-safe version. This should:

1. **Backup current full version (if active):**
   - Copy `src/App.tsx` to `backup/full-version/App.tsx`
   - Copy `src/pages/HomePage.tsx` to `backup/full-version/HomePage.tsx`
   - Copy business components to `backup/full-version/components/`
   - Copy `index.html` to `backup/full-version/index.html`

2. **Restore minimal version:**
   - Copy `backup/minimal-version/MinimalApp.tsx` to `src/MinimalApp.tsx`
   - Copy files from `backup/minimal-version/` to `src/components/`
   - Copy `backup/minimal-version/MinimalHomePage.tsx` to `src/pages/`
   - Restore `backup/minimal-version/main.tsx` to `src/main.tsx`
   - Restore `backup/minimal-version/index.html` to `index.html`

3. **Update main.tsx:**
   - Change import from `App` to `MinimalApp`
   - Change component from `<App />` to `<MinimalApp />`

4. **Update index.html with personal SEO:**
   - Title: "Varun K Nair - ArivLabs | Senior Software Engineer at Cyberdesk GmbH"
   - Description: Personal/professional profile focused on current employment
   - Keywords: "Varun K Nair, ArivLabs, senior software engineer, cybersecurity engineer, Cyberdesk GmbH"
   - Personal structured data (Person schema)
   - Open Graph type: "profile"
   - Include professional experience and current role

5. **Update sitemap.xml for personal:**
   - Remove business service pages
   - Focus on personal profile sections
   - Update priorities for personal content

The result should be an employment-safe personal profile website.
```

---

## 📋 **CURRENT VERSION DETECTION**

**Check which version is currently active by:**
1. Looking at `src/main.tsx` - does it import `App` or `MinimalApp`?
2. Checking if `src/components/` contains `Minimal*.tsx` files
3. Looking at `index.html` title and meta description

---

## 🔍 **FILE STRUCTURE REFERENCE**

```
src/
├── main.tsx                    # Entry point (check import here)
├── App.tsx                     # Full version app
├── MinimalApp.tsx              # Minimal version app
├── components/
│   ├── Logo.tsx               # Shared component
│   ├── Header.tsx             # Full version
│   ├── Footer.tsx             # Full version  
│   ├── MinimalHeader.tsx      # Minimal version
│   ├── MinimalFooter.tsx      # Minimal version
│   └── [Other components]
└── pages/
    ├── HomePage.tsx           # Full version
    └── MinimalHomePage.tsx    # Minimal version

backup/
├── full-version/              # Complete business version backup
│   ├── App.tsx
│   ├── HomePage.tsx
│   └── components/
├── minimal-components/        # Minimal components backup
├── minimal-app.tsx           # Minimal app backup
└── minimal-version-main.tsx  # Minimal main.tsx backup
```

---

## ⚠️ **SAFETY CHECKS**

Before switching versions, always:
1. **Verify backups exist** in the `backup/` directory
2. **Check current git status** - commit changes if needed
3. **Confirm target version files** are available
4. **Update SEO appropriately** for the target version
5. **Test that the switch was successful**

---

## 🎯 **SEO REQUIREMENTS**

### **Minimal Version SEO (Current):**
- **Title**: "Varun K Nair - ArivLabs | Senior Software Engineer at Cyberdesk GmbH"
- **Description**: "Varun K Nair - Secure. Scalable. Simple. Senior Software Engineer at Cyberdesk GmbH with close to a decade of experience in cybersecurity and enterprise software. Professional entity: ArivLabs."
- **Keywords**: "Varun K Nair, ArivLabs, senior software engineer, cybersecurity engineer, enterprise software developer, Cyberdesk GmbH, DSPM, data security, SaaS development, full stack developer, software architect, Normalyze, Proofpoint, Cisco, 42Hertz, Silver Oak Health, Germany software engineer, startup engineer"
- **Schema**: Person schema with professional details
- **Focus**: Personal profile, current employment, professional achievements
- **Geographic**: Germany-based professional
- **Social**: Professional networking focus

### **Full Version SEO:**
- **Title**: "ArivLabs - Boutique Engineering Services for Startups & Enterprises"
- **Description**: "ArivLabs - Secure. Scalable. Simple. Boutique engineering services for startups and enterprises. Staff augmentation, project consulting, and CTO advisory with world-class talent."
- **Keywords**: "engineering consulting, staff augmentation, CTO advisory, startup engineering, enterprise software, cybersecurity, SaaS development, offshore development, boutique engineering, MVP development"
- **Schema**: Organization schema with business services
- **Focus**: Business services, consulting, team scaling
- **Geographic**: Global reach (US, Europe, high-cost economies)
- **Social**: Business networking and lead generation

### **SEO Optimization Features (Both Versions):**
- ✅ **Structured Data** (JSON-LD schema)
- ✅ **Open Graph** meta tags
- ✅ **Twitter Cards** optimization
- ✅ **Sitemap.xml** for search engines
- ✅ **Robots.txt** for crawling control
- ✅ **Canonical URLs** to prevent duplicate content
- ✅ **Geographic targeting** meta tags
- ✅ **Professional keywords** optimization
- ✅ **Social media integration** ready
- ✅ **Mobile-first** responsive design
- ✅ **Page speed** optimized assets

---

## 📞 **USAGE EXAMPLES**

**User says:** "Switch to full business version"
**Cursor should:** Execute full version switch command above

**User says:** "Go back to minimal version" or "Switch to employment-safe version"
**Cursor should:** Execute minimal version switch command above

**User says:** "What version am I currently on?"
**Cursor should:** Check main.tsx and report current version

---

This prompt enables seamless switching between versions while maintaining proper backups and SEO optimization.

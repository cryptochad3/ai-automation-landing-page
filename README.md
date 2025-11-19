<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Automation Services Website

Professional website for selling AI automation services with functional contact form, service showcase, and pricing tiers.

## 🚀 Features

- ✅ **Fully Functional Contact Form** with validation
- ✅ **Email Integration** via Web3Forms
- ✅ **Service Showcase** with detailed descriptions
- ✅ **Pricing Tiers** for different project sizes
- ✅ **Interactive AI Demo Chat** powered by Google Gemini
- ✅ **Responsive Design** for all devices
- ✅ **Professional UI** with modern styling

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local` and add your keys:
```bash
cp .env.example .env.local
```

### 3. Get API Keys

**For AI Demo Chat (Google Gemini):**
- Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
- Add to `.env.local`: `GEMINI_API_KEY=your_key_here`

**For Contact Form (Web3Forms - Free):**
- Sign up at [Web3Forms](https://web3forms.com)
- Get your access key
- Update in `components/Contact.tsx` line 72

### 4. Customize Your Information

Edit `components/Contact.tsx` to add your real contact details:
- Email address (line 130)
- Phone number (line 140)
- Calendar link (line 150)
- Social media links (lines 240-242)

### 5. Run Development Server
```bash
npm run dev
```

Visit http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to [Netlify](https://netlify.com)

### Other Platforms
- GitHub Pages
- Cloudflare Pages
- AWS Amplify

## 📚 Documentation

See [SETUP.md](SETUP.md) for detailed setup guide.

## 🎨 Customization

- Update company name in footer
- Modify services in `components/Services.tsx`
- Adjust pricing in `components/Pricing.tsx`
- Change brand colors in Tailwind config

## 📧 Contact Form Setup

The contact form is production-ready but needs your Web3Forms key. See [SETUP.md](SETUP.md) for step-by-step instructions.

## 🔗 Original AI Studio App

View in AI Studio: https://ai.studio/apps/drive/1Zsr72QKuBu8qVJBsYqQ2ggT5oFMKmtBG

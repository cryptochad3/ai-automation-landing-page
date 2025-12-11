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
- ✅ **Image API** - FastAPI backend for serving images (similar to Unsplash)
- ✅ **Responsive Design** for all devices
- ✅ **Professional UI** with modern styling

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Python 3.8+ (for Image API backend)

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

## 🖼️ Image API (NEW!)

A FastAPI-based backend that serves images from a local folder, similar to Unsplash API.

### Quick Start

1. Install Python dependencies:
```bash
cd api
pip install -r requirements.txt
```

2. Add your images to the `images/` folder

3. Start the API server:
```bash
python main.py
```

4. Access the API at `http://localhost:8000`

### API Endpoints

- `GET /api/images` - List all images with metadata
- `GET /api/images/random` - Get a random image
- `GET /api/images/{image_id}` - Get specific image info
- `GET /api/images/{image_id}/download` - Download an image
- `GET /health` - Health check

### Documentation

- Full API documentation: See [api/README.md](api/README.md)
- Interactive docs: http://localhost:8000/docs (when running)
- ReDoc: http://localhost:8000/redoc (when running)

### Example Usage

```javascript
// Fetch all images
fetch('http://localhost:8000/api/images')
  .then(res => res.json())
  .then(data => console.log(data));

// Get random image
fetch('http://localhost:8000/api/images/random')
  .then(res => res.json())
  .then(image => console.log(image));
```

## 🔗 Original AI Studio App

View in AI Studio: https://ai.studio/apps/drive/1Zsr72QKuBu8qVJBsYqQ2ggT5oFMKmtBG

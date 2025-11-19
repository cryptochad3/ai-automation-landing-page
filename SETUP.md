# Setup Guide for ECT AI Automation Website

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Set Up Contact Form

The contact form uses **Web3Forms** (free service, no backend needed).

#### Get Your Web3Forms Access Key:
1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up with your email (free)
3. Create a new form and copy your Access Key
4. Open `components/Contact.tsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

Alternatively, you can use **EmailJS** or **Formspree**:
- **EmailJS**: [https://www.emailjs.com](https://www.emailjs.com)
- **Formspree**: [https://formspree.io](https://formspree.io)

### 4. Update Your Contact Information

Edit `components/Contact.tsx` and update:
- Email: `contact@yourcompany.com` → your actual email
- Phone: `+1 (555) 123-4567` → your actual phone
- Calendar link: `https://calendly.com/yourlink` → your Calendly/Cal.com link
- Social media links (GitHub, LinkedIn, Twitter)

### 5. Customize Your Branding

Update the following in `components/Contact.tsx`:
- Company name: "ECT Automation" → Your company name
- Footer text

### 6. Run the Development Server
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## What's Included

✅ **Functional Contact Form** with validation  
✅ **Form state management** (no page refresh needed)  
✅ **Email integration** via Web3Forms  
✅ **Success/Error messages**  
✅ **Mobile responsive design**  
✅ **Professional UI** with loading states  

## Deploying to Production

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options

**Vercel** (Recommended):
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables
4. Deploy

**Netlify**:
1. Run `npm run build`
2. Drag `dist` folder to [netlify.com](https://netlify.com)

**GitHub Pages**:
```bash
npm run build
# Deploy the dist folder
```

## Features to Add (Optional)

- [ ] Google Analytics tracking
- [ ] Chatbot integration with your demo
- [ ] Case studies section
- [ ] Testimonials
- [ ] FAQ section
- [ ] Blog/Resources
- [ ] Live chat widget

## Need Help?

Contact me at your-email@example.com

# ⚡ Quick Start Guide

## 🎯 Make Your Site Live in 15 Minutes

### Step 1: Install (1 minute)
```bash
npm install
```

### Step 2: Set Up Contact Form (5 minutes)
1. Go to **https://web3forms.com**
2. Enter your email → Get Access Key
3. Open `components/Contact.tsx`
4. Find line 72: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
5. Replace with your key: `access_key: 'abc123-your-actual-key'`

### Step 3: Add Your Contact Info (3 minutes)
Edit `components/Contact.tsx`:

**Line 130** - Your Email:
```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

**Line 140** - Your Phone:
```tsx
<a href="tel:+15551234567">+1 (555) 123-4567</a>
```

**Line 150** - Your Calendar (get free Calendly account):
```tsx
<a href="https://calendly.com/your-username">
```

### Step 4: Test Locally (1 minute)
```bash
npm run dev
```
Open http://localhost:5173 and test the contact form!

### Step 5: Deploy (5 minutes)

**Option A: Vercel (Easiest)**
1. Create GitHub repo and push code
2. Go to **https://vercel.com** → Sign up
3. Click "Import Project" → Select your repo
4. Add environment variable: `GEMINI_API_KEY=your_key`
5. Click Deploy! ✅

**Option B: Quick Build**
```bash
npm run build
```
Upload the `dist` folder to any web host.

## 🎨 Customize (Optional)

### Update Company Name
Find & replace "ECT Automation" in:
- `components/Contact.tsx` (line 235)

### Change Pricing
Edit `components/Pricing.tsx` - update dollar amounts

### Modify Services
Edit `components/Services.tsx` - add/remove services

## 📧 How the Contact Form Works

When someone submits:
1. Form validates their input
2. Sends to Web3Forms API
3. Web3Forms emails you
4. User sees success message
5. You respond and close the deal! 💰

## ✅ Success Checklist

- [ ] Contact form sends emails to you
- [ ] All links work (email, phone, calendar)
- [ ] Site looks good on mobile
- [ ] AI demo chat works (needs GEMINI_API_KEY)
- [ ] Site is deployed and accessible

## 🆘 Troubleshooting

**Form not sending emails?**
- Check Web3Forms key is correct in Contact.tsx
- Verify you confirmed your email with Web3Forms

**Build errors?**
- Delete `node_modules` and run `npm install` again
- Make sure Node.js is v16+

**AI demo not working?**
- Add `GEMINI_API_KEY` to `.env.local`
- Get key from https://aistudio.google.com/app/apikey

## 💡 Pro Tips

1. **Test the form yourself** before sharing the site
2. **Respond to inquiries within 1 hour** for best conversion
3. **Use the Calendly link** - makes booking super easy
4. **Update your pricing** based on your actual rates
5. **Add testimonials** as you complete projects

---

**That's it! You now have a functional sales website.** 🎉

For more details, see [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)

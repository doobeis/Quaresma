# Clínica Fiorentini Landing Page - Quick Start Guide

## 🚀 Getting Started

1. **Open the Landing Page**
   - Navigate to `templates/index.html`
   - Open in any modern web browser
   - The page is fully functional out of the box!

2. **Customize Content**
   - Edit text directly in `index.html`
   - Update clinic name, services, team information
   - Modify contact details and WhatsApp number

3. **Add Your Images**
   - See `assets/README.md` for image guidelines
   - Replace placeholder images with professional photos
   - Recommended: 1200x800px for hero, 300x300px for team

## 📁 File Structure

```
clinica-fiorentini/
├── SKILL.md                 # Main documentation
├── README.md                # This file
├── templates/
│   └── index.html          # Complete landing page
├── assets/
│   └── README.md           # Image guidelines
└── examples/
    └── README.md           # Design examples & tips
```

## 🎨 Key Features

✅ **Modern Minimalist Design** - Clean, professional aesthetic  
✅ **Teal & Seafoam Palette** - Calming, medical-grade colors  
✅ **Fully Responsive** - Mobile-first approach  
✅ **Smooth Animations** - Scroll-triggered effects  
✅ **WhatsApp Integration** - Floating contact button  
✅ **Appointment Form** - Ready for backend integration  
✅ **SEO Optimized** - Proper meta tags and semantic HTML  

## 🛠️ Customization Checklist

- [ ] Update clinic name and logo
- [ ] Add professional team photos
- [ ] Customize service offerings
- [ ] Update contact information
- [ ] Set WhatsApp number
- [ ] Add Google Maps location
- [ ] Configure form submission endpoint
- [ ] Add analytics tracking
- [ ] Optimize images for web
- [ ] Test on mobile devices

## 📱 WhatsApp Integration

Update the WhatsApp number in line 583 of `index.html`:

```html
<a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta." 
   class="whatsapp-float">
```

Replace `5511999999999` with your number (country code + area code + number).

## 🎯 Form Integration

The appointment form currently logs to console. To integrate with your backend:

1. Locate the form submission handler (around line 619)
2. Replace `console.log()` with your API call
3. Common integrations:
   - Email service (SendGrid, Mailgun)
   - CRM (HubSpot, Salesforce)
   - Custom backend API
   - Google Sheets (via Apps Script)

## 🌐 Deployment Options

- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **Traditional Hosting**: cPanel, shared hosting
- **Cloud**: AWS S3, Google Cloud Storage
- **CDN**: Cloudflare Pages

## 📊 Performance Tips

1. Convert images to WebP format
2. Enable lazy loading for images
3. Minify CSS and JavaScript
4. Use CDN for fonts
5. Enable gzip compression
6. Add caching headers

## 🎨 Color Customization

All colors use CSS custom properties. Edit in the `:root` section:

```css
:root {
    --teal-primary: #0D9488;
    --teal-light: #14B8A6;
    --seafoam: #5EEAD4;
    /* ... */
}
```

## 📞 Support

For questions or customization help, refer to:
- `SKILL.md` - Complete documentation
- `examples/README.md` - Design guidelines
- `assets/README.md` - Image specifications

## 🚨 Important Notes

- The landing page is a single HTML file for easy deployment
- All styles are embedded (no external CSS file needed)
- JavaScript is vanilla (no framework dependencies)
- Images are placeholders - replace with professional photos
- Form submission needs backend integration

## ✨ Next Steps

1. **Test Locally**: Open `index.html` in browser
2. **Customize Content**: Update all text and information
3. **Add Images**: Replace placeholders with real photos
4. **Test Responsiveness**: Check on mobile devices
5. **Deploy**: Upload to your hosting provider
6. **Monitor**: Add analytics and track conversions

---

**Ready to launch?** The landing page is production-ready once you add your content and images!

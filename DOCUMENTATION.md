# Drips Bakery & Cafe - Web Implementation Documentation

## Project Overview
This document outlines the technical implementation, asset management, and deployment details for the **Drips Bakery & Cafe** web application.

---

## 🛠️ Development & Ownership
- **Developed by:** 21xengineers - SVVAAP Innovations
- **Repository:** [https://github.com/SrujanMoolya/DripsBakeyAndCafe-web.git](https://github.com/SrujanMoolya/DripsBakeyAndCafe-web.git)
- **Primary Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Framer Motion.

---

## ☁️ Image Asset Management (Cloudinary)
To ensure high performance and reliable delivery of product images, all third-party image URLs have been migrated to a dedicated **Cloudinary** account.

### Configuration Details:
- **Cloud Name:** `dd2fsebd5`
- **API Key:** `789143584647655`
- **API Secret:** `ovDL7zqg9OrMbwCayzyOOtvO9zI`
- **Asset Folder:** `drips/products`
- **Migration Date:** February 2026

*Note: All product image links in `src/data/products.ts` now point directly to Cloudinary secure URLs.*

---

## 🌐 Domain & Hosting
The application is configured for production use with the following domain details:

- **Registrar:** GoDaddy
- **Procurement:** Purchased from client account (February 2026)
- **Status:** Active
- **Expiry:** February 2027 *(Note: Standard 1-year registration cycle)*

---

## 🚀 Deployment Workflow
The project is optimized for deployment on platforms like Vercel or Netlify.

### Build Commands:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📂 Project Structure
- `src/data/products.ts`: Core product catalog with Cloudinary image pointers.
- `src/components/`: Reusable UI components (Shadcn UI based).
- `src/pages/`: Main page layouts (Home, Menu, etc.).
- `src/assets/`: Local brand assets and logos.

---

**© 2026 21xengineers - SVVAAP Innovations. All rights reserved.**

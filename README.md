# 🏠 Tiles Gallery

A modern and responsive tile gallery web application built with **Next.js**.  
Users can explore premium tiles, search products, view detailed information, and manage their profiles with authentication.

## 🌐 Live Website

🔗 **Live Demo:** https://home-tiles-dukan.vercel.app/

## 📂 GitHub Repository

🔗 **GitHub:**https://github.com/wadud115/home-tiles-dukan.git

---

## ✨ Features

- 🏠 Modern and responsive homepage
- 🖼️ Premium tile collection
- 🔍 Search tiles by title
- 📋 View detailed tile information
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔐 Email & password authentication
- 🔵 Google authentication
- 👤 User profile page
- ✏️ Update user profile
- 🚪 Secure logout functionality
- 🧭 Active navigation links
- 📢 Promotional marquee section
- ⚡ Loading UI while fetching data
- ❌ Custom not-found page
- 🔔 Toast notifications
- 🌐 Dynamic tile details using route parameters

---

## 🛠️ Technologies Used

### Frontend
- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **DaisyUI**
- **HeroUI**

### Authentication
- **Better Auth**
- **Google OAuth**

### Database
- **MongoDB**

### Other Tools & Libraries
- **React Toastify**
- **React Icons**
- **Next/Image**
- **Next/Link**

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── all-tiles/
│   │   ├── [id]/
│   │   │   └── page.jsx
│   │   ├── loading.jsx
│   │   └── page.jsx
│   │
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.jsx
│   │   └── register/
│   │       └── page.jsx
│   │
│   ├── profile/
│   │   └── page.jsx
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js
│   │
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── Marquee.jsx
│   ├── FeaturedTiles.jsx
│   ├── TilesCard.jsx
│   ├── SearchTiles.jsx
│   └── UpdateUserModal.jsx
│
└── lib/
    ├── auth.js
    └── auth-client.js

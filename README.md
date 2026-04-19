# Intelligent Nexus - Portfolio Website

Portfolio website pribadi Muhammad Tajul Munandar, AI Engineer & Fullstack Developer.

## 🚀 Fitur

- **Halaman Utama** - Hero, overview layanan, featured projects, achievements
- **About** - Profil pribadi, statistik, layanan, nilai inti
- **Projects** - Daftar semua project dengan filter kategori, gambar, dan detail
- **Experience** - Timeline karir, skill dengan progress bar, sertifikasi & achievement dengan modal detail
- **Services** - Daftar layanan yang ditawarkan
- **Contact** - Form kontak, informasi kontak, dan link sosial

## 🛠️ Teknologi

- **React 18** - Library UI
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Komponen UI
- **Framer Motion** - Animasi
- **Lucide React** - Icon library
- **React Router** - Client side routing

## ⚙️ Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview
```

## 🔌 API Backend

Website ini terhubung dengan backend CMS:
- **Base URL**: `https://tajulcms.developerdadakan.com/api`
- **Storage URL**: `https://tajulcms.developerdadakan.com/storage`

Endpoint yang digunakan:
- `GET /` - Semua data (projects, experiences, skills, services, achievements)
- `GET /profile` - Data profil
- `POST /contact` - Kirim pesan kontak

## 📁 Struktur Folder

```
src/
├── components/         # Komponen reusable
│   ├── ui/            # Komponen shadcn/ui
│   └── *.tsx          # Section & komponen custom
├── pages/             # Halaman aplikasi
├── hooks/             # Custom hooks
├── lib/               # Utility & helper
├── assets/            # Asset statis
└── App.tsx            # Root aplikasi
```

## 🎨 Design System

- **Glass Morphism** - Efek kaca pada card
- **Gradient Accent** - Biru → Ungu sebagai warna utama
- **Animasi Halus** - Framer Motion untuk transisi
- **Responsive** - Mobile first design
- **Dark Mode** - Default tema gelap

## 👤 Kontak

- Email: tajulmunandar701@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-tajul-munandar-02810a290/
- GitHub: https://github.com/TajulMunandar
- Instagram: https://www.instagram.com/tajul_munandar/

---

© 2026 Muhammad Tajul Munandar. All rights reserved.

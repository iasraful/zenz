# 👕 Zenz — E-Commerce Showcase

Welcome to **Zenz**, a premium e-commerce landing page and interactive showcase designed to give users an immersive, modern shopping experience. Featuring smooth interactive animations, responsiveness, and real-time 3D product previews.

🚀 **Live Demo:** [zenz-phi.vercel.app](https://zenz-phi.vercel.app/)

---

## ✨ Features

- **🌐 Interactive 3D Product Viewer**: Uses React Three Fiber (R3F) and Three.js to render and customize a 3D shirt model in real-time.
- **✨ Ultra-Smooth Scrolling**: Integrated with [Lenis](https://lenis.darkroom.engineering/) for an fluid, luxurious scroll feel.
- **🎨 Modern Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) for fluid transitions, micro-interactions, and responsive page load entries.
- **📱 Mobile-First Design**: Optimized for any screen size, complete with a sticky mobile conversion bar for easy calls-to-action.
- **⚡ Tailwind CSS v4**: Built using the latest Tailwind CSS v4 styling engine for rapid utility-first styling and custom design tokens.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **3D Graphics:** [Three.js](https://threejs.org/) with [@react-three/fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) & [@react-three/drei](https://github.com/pmndrs/drei)

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layouts and Pages)
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Base root layout wrapper
│   └── page.tsx          # Main e-commerce landing page
├── components/           # Reusable UI components
│   ├── ShirtViewer.tsx   # Three.js 3D shirt canvas renderer
│   ├── ProductCard.tsx   # Responsive product card with hover animations
│   ├── CategorySlider.tsx# Category navigation and filtering
│   └── ...               # Navbar, Footer, FeaturesGrid, SocialProof, etc.
├── data/                 # Local data files
│   └── hoodies.json      # Product database for the showcase
└── public/               # Static assets (3D models, textures, images)
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js installed on your machine.
- [Node.js (LTS version recommended)](https://nodejs.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iasraful/zenz.git
   cd zenz
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

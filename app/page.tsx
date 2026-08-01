import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import CategorySlider from "@/components/CategorySlider";
import ShirtViewerClient from "@/components/ShirtViewerClient";
import ThumbnailBanner from "@/components/ThumbnailBanner";
import FeaturesGrid from "@/components/FeaturesGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export default function HomePage() {
  const dropShoulders = products.filter((p) => p.category === "drop-shoulder");
  const hoodiesProducts = products.filter((p) => p.category === "hoodie");

  return (
    <main className="min-h-screen bg-[#08080c] text-[#f8fafc]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroVideo />

      {/* Drop Shoulder Tees Slider */}
      <CategorySlider
        id="drop-shoulders"
        title="DROP SHOULDER TEES"
        subtitle="Heavyweight 240GSM combed cotton in relaxed oversized silhouettes."
        products={dropShoulders}
      />

      {/* 3D Interactive Lab */}
      {/* <ShirtViewerClient /> */}

      {/* Featured Spotlight Banner */}
      <ThumbnailBanner />

      {/* Hoodies & Fleece Slider */}
      <CategorySlider
        id="hoodies"
        title="HOODIES & FLEECE"
        subtitle="Ultra-thick 400GSM fleece-lined hoodies designed for winter comfort."
        products={hoodiesProducts}
      />

      {/* Features & Value Props */}
      <FeaturesGrid />

      {/* Social Proof */}
      <SocialProof />

      {/* Footer */}
      <Footer />
    </main>
  );
}


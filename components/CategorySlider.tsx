"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  id: string;
  category: string;
  categoryLabel: string;
  name: string;
  priceAUD: number;
  offerPriceAUD: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  badge: string | null;
  images: { front: string; back: string };
  description: string;
  sizes: string[];
  colorway: string;
}

interface CategorySliderProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export default function CategorySlider({ id, title, subtitle, products }: CategorySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="py-20 w-full bg-[#f5f3ef] border-t border-[rgba(10,14,23,0.08)] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span
              className="text-xs font-bold text-[#06b6d4] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              CURATED COLLECTION
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0e17] uppercase mt-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </h2>
            <p
              className="text-sm text-[#475569] mt-2 max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-white hover:bg-[#0a0e17] text-[#475569] hover:text-white rounded border border-[rgba(10,14,23,0.15)] transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-white hover:bg-[#0a0e17] text-[#475569] hover:text-white rounded border border-[rgba(10,14,23,0.15)] transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Product Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
        >
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
              whileHover={{ y: -8 }}
              className="w-[280px] sm:w-[320px] lg:w-[360px] shrink-0 bg-white border border-[rgba(10,14,23,0.1)] hover:border-[#ff5500] rounded-lg overflow-hidden group transition-all duration-300 shadow-md hover:shadow-[#ff5500]/10"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-[#f0ede8] overflow-hidden">
                <Image
                  src={item.images.front}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover image preview */}
                <Image
                  src={item.images.back}
                  alt={`${item.name} back`}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* Badge */}
                {item.badge && (
                  <span
                    className="absolute top-4 left-4 px-3 py-1 bg-[#ff5500] text-white text-[10px] font-black tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-accent)", transform: "skewX(-10deg)" }}
                  >
                    <span className="inline-block" style={{ transform: "skewX(10deg)" }}>
                      {item.badge}
                    </span>
                  </span>
                )}

                {/* Discount */}
                <span
                  className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-[#ff5500] border border-[#ff5500]/40 text-[10px] font-black tracking-wider"
                  style={{ fontFamily: "var(--font-heading)", transform: "skewX(-10deg)" }}
                >
                  <span className="inline-block" style={{ transform: "skewX(10deg)" }}>
                    -{item.discountPercent}% OFF
                  </span>
                </span>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-[#0a0e17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span
                    className="px-5 py-2.5 bg-white text-[#0a0e17] text-xs font-black tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-heading)", transform: "skewX(-8deg)" }}
                  >
                    <span className="inline-block" style={{ transform: "skewX(8deg)" }}>QUICK VIEW →</span>
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col justify-between bg-white">
                <div>
                  <span
                    className="text-[10px] text-[#06b6d4] font-black uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.colorway}
                  </span>
                  <h3
                    className="text-lg font-black text-[#0a0e17] mt-1 group-hover:text-[#ff5500] transition-colors truncate"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-xs text-[#475569] line-clamp-2 mt-2 leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[rgba(10,14,23,0.08)]">
                  <div>
                    <span
                      className="text-xl font-black text-[#0a0e17]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      A${item.offerPriceAUD.toFixed(2)}
                    </span>
                    <span
                      className="text-xs text-[#94a3b8] line-through ml-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      A${item.priceAUD.toFixed(2)}
                    </span>
                  </div>

                  <button
                    className="px-4 py-2 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-black rounded transition-all duration-300 shadow-md shadow-[#ff5500]/20 glow-hover"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <button
            className="px-10 py-4 bg-[#0a0e17] hover:bg-[#1a2236] text-white text-xs font-bold tracking-widest uppercase rounded border border-[#0a0e17] transition-colors shadow-md"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            VIEW ALL {title}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

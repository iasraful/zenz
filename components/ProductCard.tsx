"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  name: string;
  slug: string;
  priceAUD: number;
  offerPriceAUD: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  isNewDrop: boolean;
  badge: string | null;
  badgeColor: string | null;
  images: { front: string; back: string };
  description: string;
  sizes: string[];
  tags: string[];
  colorway: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col rounded-none overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #111827 0%, #0d1420 100%)",
        border: hovered
          ? "1px solid rgba(6,182,212,0.6)"
          : "1px solid rgba(30,41,59,0.8)",
        boxShadow: hovered
          ? "0 0 20px rgba(6,182,212,0.2), 0 0 40px rgba(6,182,212,0.08), inset 0 1px 0 rgba(6,182,212,0.1)"
          : "0 4px 20px rgba(0,0,0,0.4)",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* ── Image Area ── */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0d1420]">
        {/* Front Image */}
        <motion.div
          animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={product.images.front}
            alt={`${product.name} — front`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top"
            priority={index < 4}
          />
        </motion.div>

        {/* Back Image */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.04 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={product.images.back}
            alt={`${product.name} — back`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top"
          />
        </motion.div>

        {/* Scan-line effect on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(6,182,212,0.03) 3px, rgba(6,182,212,0.03) 4px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Cyber Cyan top-border glow on hover */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#06b6d4] origin-left"
          transition={{ duration: 0.3 }}
          style={{ boxShadow: "0 0 8px #06b6d4" }}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex px-2.5 py-1 text-[9px] font-black tracking-[0.15em]"
              style={{
                fontFamily: "var(--font-orbitron)",
                background:
                  product.badgeColor === "orange" ? "#ff5500" : "#06b6d4",
                color: product.badgeColor === "orange" ? "#f8fafc" : "#0a0e17",
                boxShadow:
                  product.badgeColor === "orange"
                    ? "0 0 12px rgba(255,85,0,0.5)"
                    : "0 0 12px rgba(6,182,212,0.5)",
              }}
            >
              {product.badge}
            </motion.span>
          )}
          {product.isNewDrop && !product.badge?.includes("NEW") && (
            <span
              className="inline-flex px-2.5 py-1 text-[9px] font-black tracking-[0.15em] bg-[#06b6d4] text-[#0a0e17]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              NEW
            </span>
          )}
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 z-10">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-12 h-12 rounded-full font-black text-[10px] text-center leading-tight"
            style={{
              fontFamily: "var(--font-orbitron)",
              background: "linear-gradient(135deg, #ff5500 0%, #f59e0b 100%)",
              boxShadow: "0 0 15px rgba(255,85,0,0.4)",
              color: "#f8fafc",
            }}
          >
            -{product.discountPercent}%
            <br />OFF
          </motion.div>
        </div>

        {/* "HOVER TO FLIP" hint */}
        <AnimatePresence>
          {!hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-[#0a0e17]/70 backdrop-blur-sm border border-[rgba(6,182,212,0.2)] rounded"
            >
              <svg className="w-3 h-3 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-[8px] text-[#94a3b8] tracking-[0.1em]" style={{ fontFamily: "var(--font-orbitron)" }}>
                HOVER TO FLIP
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-4">
        {/* Colorway tag */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[9px] tracking-[0.15em] text-[#06b6d4] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {product.colorway}
          </span>
        </div>

        {/* Product Name */}
        <h3
          className="text-sm font-bold tracking-[0.05em] text-[#f8fafc] mb-2 group-hover:text-[#06b6d4] transition-colors duration-200 leading-snug"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {stars.map((s) => (
              <svg
                key={s}
                className="w-3 h-3"
                fill={s <= Math.floor(product.rating) ? "#f59e0b" : "none"}
                stroke={s <= Math.floor(product.rating) ? "#f59e0b" : "#475569"}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span
            className="text-[10px] text-[#94a3b8]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price Block */}
        <div className="flex items-baseline gap-2 mb-4">
          <span
            className="text-xl font-black text-[#f8fafc]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            A${product.offerPriceAUD.toFixed(2)}
          </span>
          <span
            className="text-sm text-[#475569] line-through"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            A${product.priceAUD.toFixed(2)}
          </span>
          <span
            className="text-[10px] font-bold text-[#ff5500]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SAVE A${(product.priceAUD - product.offerPriceAUD).toFixed(2)}
          </span>
        </div>

        {/* Size Selector */}
        <div className="mb-4">
          <div
            className="text-[8px] tracking-[0.2em] text-[#475569] mb-2 uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SIZE
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className="px-2.5 py-1 text-[9px] font-medium tracking-[0.1em] transition-all duration-200"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  border:
                    selectedSize === size
                      ? "1px solid #06b6d4"
                      : "1px solid rgba(71,85,105,0.5)",
                  background:
                    selectedSize === size ? "rgba(6,182,212,0.1)" : "transparent",
                  color:
                    selectedSize === size ? "#06b6d4" : "#94a3b8",
                  boxShadow:
                    selectedSize === size
                      ? "0 0 8px rgba(6,182,212,0.2)"
                      : "none",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.97 }}
          className="relative mt-auto w-full py-3 font-bold text-xs tracking-[0.15em] overflow-hidden transition-all duration-300"
          style={{
            fontFamily: "var(--font-orbitron)",
            background: addedToCart
              ? "linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)"
              : "linear-gradient(90deg, #ff5500 0%, #f59e0b 100%)",
            color: "#f8fafc",
            boxShadow: addedToCart
              ? "0 0 20px rgba(6,182,212,0.4)"
              : "0 0 20px rgba(255,85,0,0.3)",
          }}
        >
          <AnimatePresence mode="wait">
            {addedToCart ? (
              <motion.span
                key="added"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                ADDED TO LOADOUT
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                className="flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                EQUIP NOW
              </motion.span>
            )}
          </AnimatePresence>
          {/* Shimmer */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        </motion.button>
      </div>

      {/* HUD corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: hovered ? "#06b6d4" : "rgba(6,182,212,0.2)", transition: "border-color 0.3s" }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: hovered ? "#06b6d4" : "rgba(6,182,212,0.2)", transition: "border-color 0.3s" }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: hovered ? "#ff5500" : "rgba(255,85,0,0.15)", transition: "border-color 0.3s" }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: hovered ? "#ff5500" : "rgba(255,85,0,0.15)", transition: "border-color 0.3s" }} />
    </motion.article>
  );
}

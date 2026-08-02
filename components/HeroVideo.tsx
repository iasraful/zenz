"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-start overflow-hidden pt-16">
      {/* 100vh Full Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Untitled Project-video.mp4"
          poster="/thumbnil.png"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Cinematic gradient overlay — light left fade, dark right stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ef] via-[#f5f3ef]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f3ef] via-transparent to-[#f5f3ef]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl">

        {/* Japanese HUD Tag */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1.5 bg-[#0a0e17] text-[#06b6d4] text-[10px] font-bold tracking-widest uppercase mb-6 border border-[#06b6d4]/30"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          LIMITED DROP — SEASON_01 COLLECTION
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#0a0e17] uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          WEAR YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#06b6d4]">
            STORY
          </span>
        </motion.h1>

        {/* Japanese sub-label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-[#ff5500]" />
          <span
            className="text-[11px] tracking-widest text-[#ff5500] uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            ZENJI ANIME STREETWEAR
          </span>
        </motion.div>

        {/* Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="max-w-xl text-sm sm:text-base text-[#475569] leading-relaxed mb-10 font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Inspired by Japanese samurai discipline, iconic anime aesthetics, and modern street culture.
          Engineered with heavyweight 240GSM combed cotton in relaxed, oversized silhouettes.
          Dispatched from Sydney, Australia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#drop-shoulders"
            className="px-8 py-4 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-xl shadow-[#ff5500]/30 glow-hover"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SHOP DROP SHOULDERS
          </Link>
          <Link
            href="#hoodies"
            className="px-8 py-4 bg-[#0a0e17] hover:bg-[#1a2236] border border-[#0a0e17] text-[#f8fafc] text-xs font-bold tracking-widest uppercase rounded transition-all duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            EXPLORE HOODIES
          </Link>
        </motion.div>

        {/* Spec badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {["240GSM COTTON", "OVERSIZED FIT", "AU DISPATCH", "LIMITED RUNS"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase border border-[rgba(10,14,23,0.2)] text-[#475569] rounded"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-[#475569]" style={{ fontFamily: "var(--font-accent)" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#ff5500] to-transparent"
        />
      </div>
    </section>
  );
}

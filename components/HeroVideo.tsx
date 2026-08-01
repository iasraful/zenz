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
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080c] via-[#08080c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-[#08080c]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 bg-[#e63946]/20 border border-[#e63946]/50 text-[#e63946] text-xs font-bold tracking-widest uppercase mb-6"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          ZENJI ANIME STREETWEAR // SEASON_01 COLLECTION
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          WEAR YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] to-[#ffffff]">STORY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-10 font-medium"
        >
          Inspired by Japanese samurai discipline, iconic anime aesthetics, and modern street culture. Engineered with heavyweight 240GSM combed cotton in relaxed, oversized silhouettes. Dispatched from Sydney, Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#drop-shoulders"
            className="px-8 py-4 bg-[#e63946] hover:bg-[#d90429] text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-xl shadow-[#e63946]/30 glow-hover"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SHOP DROP SHOULDERS
          </Link>
          <Link
            href="#customiser"
            className="px-8 py-4 bg-[#12151e] hover:bg-[#1a1e2b] border border-[#1f2430] text-[#f8fafc] text-xs font-bold tracking-widest uppercase rounded transition-all duration-300"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            ENTER 3D CUSTOM LAB
          </Link>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-[#94a3b8]" style={{ fontFamily: "var(--font-orbitron)" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[#e63946] to-transparent"
        />
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";

const products = productsData as any[];

const filterTabs = ["ALL", "TEES", "HOODIES", "NEW DROP", "SALE"];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filtered = products.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "TEES") return p.name.toLowerCase().includes("tee");
    if (activeFilter === "HOODIES") return p.name.toLowerCase().includes("hoodie");
    if (activeFilter === "NEW DROP") return p.isNewDrop;
    if (activeFilter === "SALE") return p.discountPercent >= 28;
    return true;
  });

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0e17]">
      {/* Section background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #ff5500, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#ff5500]" />
              <span
                className="text-[10px] tracking-[0.3em] text-[#ff5500] uppercase"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                ACTIVE DROPS
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black tracking-[-0.02em] text-[#f8fafc] leading-none"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              THE{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #06b6d4, #f8fafc)",
                }}
              >
                ARMORY
              </span>
            </h2>
            <p
              className="mt-2 text-sm text-[#94a3b8]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {filtered.length} drops loaded // hover cards to preview back print
            </p>
          </div>

          {/* View all link */}
          <a
            href="#"
            className="flex items-center gap-2 text-xs text-[#06b6d4] hover:text-[#f8fafc] transition-colors tracking-[0.1em] group shrink-0"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            VIEW ALL DROPS
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] transition-all duration-200"
              style={{
                fontFamily: "var(--font-orbitron)",
                border:
                  activeFilter === tab
                    ? "1px solid #06b6d4"
                    : "1px solid rgba(30,41,59,0.8)",
                background:
                  activeFilter === tab
                    ? "rgba(6,182,212,0.1)"
                    : "transparent",
                color: activeFilter === tab ? "#06b6d4" : "#94a3b8",
                boxShadow:
                  activeFilter === tab
                    ? "0 0 10px rgba(6,182,212,0.2)"
                    : "none",
              }}
            >
              {tab}
              {tab === "NEW DROP" && (
                <span
                  className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full text-[8px] font-black"
                  style={{ background: "#ff5500", color: "#f8fafc" }}
                >
                  {products.filter((p) => p.isNewDrop).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <button
            className="group relative flex items-center gap-3 px-10 py-4 border border-[rgba(6,182,212,0.3)] text-[#06b6d4] text-xs font-bold tracking-[0.2em] hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="relative z-10">LOAD MORE DROPS</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#06b6d4]/10 to-transparent" />
          </button>
          <p
            className="text-[9px] text-[#475569] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Showing {filtered.length} of {products.length} drops
          </p>
        </motion.div>
      </div>
    </section>
  );
}

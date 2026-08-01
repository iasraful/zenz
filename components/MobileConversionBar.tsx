"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileConversionBar() {
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Mobile sticky bar (md:hidden) ── */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            style={{
              background: "linear-gradient(135deg, #111827 0%, #0d1420 100%)",
              borderTop: "1px solid rgba(6,182,212,0.3)",
              boxShadow: "0 -4px 30px rgba(6,182,212,0.1)",
            }}
          >
            {/* Quick info strip */}
            <div
              className="px-4 py-1.5 flex items-center justify-between border-b border-[rgba(6,182,212,0.1)]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <span className="text-[9px] text-[#94a3b8] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse inline-block" />
                8 drops live
              </span>
              <span className="text-[9px] text-[#ff5500]">
                ⚡ Free shipping over A$100
              </span>
              <span className="text-[9px] text-[#94a3b8]">🇦🇺 AU dispatch</span>
            </div>

            {/* Main bar */}
            <div className="px-4 py-3 flex items-center gap-3">
              {/* Price display */}
              <div className="flex flex-col">
                <span
                  className="text-[9px] text-[#94a3b8] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  FROM
                </span>
                <span
                  className="text-lg font-black text-[#f8fafc] leading-tight"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  A$39.95
                </span>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-[rgba(6,182,212,0.2)]" />

              {/* Quick size hint */}
              <div className="flex-1">
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="w-full text-left"
                >
                  <div
                    className="text-[8px] text-[#94a3b8] tracking-[0.1em] mb-1"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    TAP TO SELECT SIZE
                  </div>
                  <div className="flex gap-1">
                    {["S", "M", "L", "XL"].map((s) => (
                      <span
                        key={s}
                        className="px-1.5 py-0.5 text-[8px] border border-[rgba(6,182,212,0.2)] text-[#94a3b8]"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {s}
                      </span>
                    ))}
                    <span
                      className="px-1.5 py-0.5 text-[8px] border border-[rgba(6,182,212,0.2)] text-[#94a3b8]"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      +3
                    </span>
                  </div>
                </button>
              </div>

              {/* CTA */}
              <Link
                href="#products"
                id="mobile-equip-now"
                className="flex items-center gap-1.5 px-5 py-3 font-black text-xs tracking-[0.1em] text-[#f8fafc] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  background: "linear-gradient(90deg, #ff5500 0%, #f59e0b 100%)",
                  boxShadow: "0 0 15px rgba(255,85,0,0.3)",
                }}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                EQUIP NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Size Quick-Select Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-[#0a0e17]/80 backdrop-blur-sm md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-[60] md:hidden rounded-t-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #111827 0%, #0d1420 100%)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderBottom: "none",
              }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-[rgba(6,182,212,0.3)]" />
              </div>

              <div className="px-5 pb-8">
                <div className="flex items-center justify-between mb-5">
                  <h3
                    className="text-sm font-bold text-[#f8fafc] tracking-[0.05em]"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    SELECT YOUR SIZE
                  </h3>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-5">
                  {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setDrawerOpen(false)}
                      className="py-3 text-xs font-bold tracking-[0.1em] border border-[rgba(6,182,212,0.2)] text-[#94a3b8] hover:border-[#06b6d4] hover:text-[#06b6d4] hover:bg-[rgba(6,182,212,0.08)] transition-all"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <Link
                  href="#products"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 font-black text-sm tracking-[0.1em] text-[#f8fafc]"
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    background: "linear-gradient(90deg, #ff5500 0%, #f59e0b 100%)",
                    boxShadow: "0 0 20px rgba(255,85,0,0.3)",
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  ADD TO LOADOUT — A$49.95
                </Link>

                <p
                  className="text-center text-[9px] text-[#475569] mt-3"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Free returns within 30 days · Secure checkout
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

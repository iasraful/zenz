"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0e17] border-t border-[rgba(255,255,255,0.06)] text-[#64748b] text-xs">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <span
              className="text-2xl sm:text-3xl font-black tracking-widest text-[#f8fafc]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ZENJI<span className="text-[#ff5500]">.</span>
            </span>
            <p
              className="text-xs text-[#475569] leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Australian anime &amp; gamer streetwear brand. Premium 240GSM drop shoulder tees and 400GSM fleece hoodies dispatched from Sydney.
            </p>
            <span
              className="block text-[10px] text-[#06b6d4] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              JAPANESE STREETWEAR
            </span>
          </div>

          {/* Collections */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              コレクション // COLLECTIONS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#drop-shoulders" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Drop Shoulder Tees
                </Link>
              </li>
              <li>
                <Link href="#hoodies" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Hoodies &amp; Fleece
                </Link>
              </li>
              <li>
                <Link href="#manifesto" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Studio Spotlight
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Help */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              カスタマーヘルプ // CUSTOMER HELP
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Shipping Policy (AU)</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>30-Day Returns</a></li>
              <li><a href="#" className="hover:text-[#ff5500] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Size Guide &amp; Care</a></li>
            </ul>
          </div>

          {/* VIP Drop */}
          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              限定ドロップ // VIP DROP DISPATCH
            </h4>
            <p
              className="text-xs text-[#475569] mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get notified 15 minutes before new drops launch.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-[#111827] border border-[rgba(255,255,255,0.08)] text-white px-4 py-2.5 text-xs rounded flex-1 focus:outline-none focus:border-[#06b6d4] placeholder:text-[#475569]"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <button
                type="submit"
                className="bg-[#ff5500] text-white px-4 py-2.5 font-bold text-xs rounded hover:bg-[#e04a00] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#475569]">
          <p style={{ fontFamily: "var(--font-body)" }}>© 2026 ZENJI Streetwear Pty Ltd. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-body)" }}>Designed &amp; Dispatched in Sydney, Australia 🇦🇺</p>
        </div>
      </div>
    </footer>
  );
}

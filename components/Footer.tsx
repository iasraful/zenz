"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050508] border-t border-[#1f2430] text-[#94a3b8] text-xs">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <span
              className="text-2xl sm:text-3xl font-black tracking-widest text-[#f8fafc]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              ZENJI<span className="text-[#e63946]">.</span>
            </span>
            <p className="text-xs text-[#64748b] leading-relaxed max-w-sm">
              Australian anime & gamer streetwear brand. High quality 240GSM drop shoulder tees and 400GSM fleece hoodies dispatched from Sydney.
            </p>
          </div>

          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#drop-shoulders" className="hover:text-[#e63946] transition-colors">
                  Drop Shoulder Tees
                </Link>
              </li>
              <li>
                <Link href="#hoodies" className="hover:text-[#e63946] transition-colors">
                  Hoodies & Fleece
                </Link>
              </li>
              <li>
                <Link href="#manifesto" className="hover:text-[#e63946] transition-colors">
                  Studio Spotlight
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              CUSTOMER HELP
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-[#e63946] transition-colors">Shipping Policy (AU)</a></li>
              <li><a href="#" className="hover:text-[#e63946] transition-colors">30-Day Returns</a></li>
              <li><a href="#" className="hover:text-[#e63946] transition-colors">Size Guide & Care</a></li>
            </ul>
          </div>

          <div>
            <h4
              className="text-xs font-bold text-white tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              VIP DROP DISPATCH
            </h4>
            <p className="text-xs text-[#64748b] mb-3">Get notified 15 minutes before new drops launch.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-[#12151e] border border-[#1f2430] text-white px-4 py-2.5 text-xs rounded flex-1 focus:outline-none focus:border-[#e63946]"
              />
              <button
                type="submit"
                className="bg-[#e63946] text-white px-4 py-2.5 font-bold text-xs rounded hover:bg-[#d90429] transition-colors"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1f2430] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[#64748b]">
          <p>© 2026 ZENJI Streetwear Pty Ltd. All rights reserved.</p>
          <p>Designed & Dispatched in Sydney, Australia 🇦🇺</p>
        </div>
      </div>
    </footer>
  );
}


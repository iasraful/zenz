"use client";

import dynamic from "next/dynamic";

// This client component wrapper allows ssr:false dynamic import
const ShirtViewerDynamic = dynamic(() => import("./ShirtViewer"), {
  ssr: false,
  loading: () => (
    <section
      id="customiser"
      className="py-24 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #0a0e17 0%, #0d1420 50%, #0a0e17 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-14 h-14 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin"
          style={{ boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
        />
        <span
          className="text-xs tracking-[0.3em] text-[#06b6d4]"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          INITIALISING 3D ENGINE...
        </span>
      </div>
    </section>
  ),
});

export default function ShirtViewerClient() {
  return <ShirtViewerDynamic />;
}

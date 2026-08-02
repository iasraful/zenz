"use client";

const features = [
  {
    icon: "⚡",
    title: "FAST AU DISPATCH",
    description: "Orders processed and dispatched from our Sydney studio within 24 hours with express tracking."
  },
  {
    icon: "👕",
    title: "240 GSM PREMIUM",
    description: "Heavyweight 100% combed ring-spun cotton. Pre-shrunk custom drop-shoulder silhouettes."
  },
  {
    icon: "🔥",
    title: "LIMITED DROPS",
    description: "Strictly limited quantities per edition drop. Keep your loadout unique. No restocks. Ever."
  },
  {
    icon: "🛡️",
    title: "SQUAD GUARANTEE",
    description: "Hassle-free 30-day returns and size exchanges on all unworn streetwear gear."
  }
];

export default function FeaturesGrid() {
  return (
    <section id="why-zenji" className="py-20 w-full bg-[#0a0e17] border-t border-[rgba(255,255,255,0.06)]">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-xs font-bold text-[#06b6d4] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            OUR PROMISE
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase mt-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BUILT FOR THE OUTSIDERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#111827] border border-[rgba(255,255,255,0.06)] rounded-lg text-center space-y-3 hover:border-[#ff5500]/50 transition-all duration-300 shadow-lg hover:shadow-[#ff5500]/5 group"
            >
              <span className="text-4xl block mb-2">{item.icon}</span>
              <h3
                className="text-base font-black text-white tracking-wider uppercase group-hover:text-[#ff5500] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs text-[#64748b] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

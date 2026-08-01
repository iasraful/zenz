"use client";

const reviews = [
  {
    name: "Alex M.",
    location: "Sydney, NSW",
    text: "The drop shoulder fit is absolute perfection. Heavyweight cotton feels super high end. Will buy again.",
    product: "Shadow Oni Drop Tee"
  },
  {
    name: "Jordan K.",
    location: "Melbourne, VIC",
    text: "Shipped in 2 days to VIC! The hoodie fleece lining is warm and thick. Perfect for cold nights.",
    product: "Ivory Clan Oversized Hoodie"
  },
  {
    name: "Ethan R.",
    location: "Brisbane, QLD",
    text: "Print quality is insane, washed 5 times already with zero fading or cracking. High density print.",
    product: "Ghost Protocol Tee"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 w-full bg-[#0a0d14] border-t border-[#1f2430]">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-xs font-bold text-[#e63946] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            COMMUNITY REVIEWS
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-white uppercase mt-1"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SQUAD REVIEWS (4.9/5 ★)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#12151e] border border-[#1f2430] rounded-lg space-y-4 hover:border-[#e63946]/50 transition-colors shadow-lg hover:shadow-[#e63946]/5"
            >
              <div className="text-[#f59e0b] text-sm">★★★★★</div>
              <p className="text-sm text-[#94a3b8] italic leading-relaxed font-medium">&ldquo;{rev.text}&rdquo;</p>
              <div className="pt-4 border-t border-[#1f2430] flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-white block">{rev.name}</span>
                  <span className="text-[10px] text-[#64748b] font-medium">{rev.location}</span>
                </div>
                <span
                  className="text-[10px] font-black text-[#e63946] uppercase"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  VERIFIED BUYER
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


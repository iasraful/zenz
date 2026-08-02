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
    <section className="py-20 w-full bg-[#f5f3ef] border-t border-[rgba(10,14,23,0.08)]">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-xs font-bold text-[#06b6d4] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            COMMUNITY REVIEWS
          </span>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0a0e17] uppercase mt-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SQUAD REVIEWS (4.9/5 ★)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-[rgba(10,14,23,0.1)] rounded-lg space-y-4 hover:border-[#ff5500]/50 transition-colors shadow-md hover:shadow-[#ff5500]/5"
            >
              <div className="text-[#f59e0b] text-sm">★★★★★</div>
              <p
                className="text-sm text-[#475569] italic leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;{rev.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-[rgba(10,14,23,0.08)] flex items-center justify-between">
                <div>
                  <span
                    className="text-xs font-black text-[#0a0e17] block"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {rev.name}
                  </span>
                  <span
                    className="text-[10px] text-[#94a3b8]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {rev.location}
                  </span>
                </div>
                <span
                  className="text-[10px] font-black text-[#ff5500] uppercase"
                  style={{ fontFamily: "var(--font-accent)" }}
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

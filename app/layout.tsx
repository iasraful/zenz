import type { Metadata } from "next";
import { Sora, Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-japanese",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ZENJI — Premium Anime Streetwear | Limited Drops",
  description:
    "Shop ZENJI's premium anime streetwear. Inspired by Naruto, Jujutsu Kaisen, and Japanese street culture. Premium 240GSM combed cotton tees and heavy fleece hoodies. Limited edition releases, no restocks.",
  keywords: [
    "anime streetwear",
    "japanese streetwear",
    "anime clothing australia",
    "gamer clothing",
    "australian streetwear",
    "anime tshirt",
    "gaming hoodie",
    "anime fashion australia",
  ],
  openGraph: {
    title: "ZENJI — Premium Anime Streetwear",
    description:
      "Exclusive anime streetwear designed in Australia. Premium drops, limited editions.",
    type: "website",
    locale: "en_AU",
    images: ["/thumbnil.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENJI — Premium Anime Streetwear",
    description: "Exclusive anime streetwear designed in Australia.",
    images: ["/thumbnil.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${sora.variable} ${notoSansJP.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[var(--bg-base)] text-[var(--text-primary)]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

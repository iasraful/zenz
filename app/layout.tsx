import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${orbitron.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[#08080c]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


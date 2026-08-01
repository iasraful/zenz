import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "ZENZ — Next-Gen Anime Streetwear | Australian Gamer Apparel",
  description:
    "Exclusive gamer anime streetwear designed in Australia. Premium 240GSM heavyweight cotton tees, hoodies, and drops. Fast AU-wide shipping. Limited edition releases.",
  keywords: [
    "anime streetwear",
    "gamer clothing",
    "australian streetwear",
    "anime tshirt",
    "gaming hoodie",
    "anime fashion australia",
  ],
  openGraph: {
    title: "ZENZ — Next-Gen Anime Streetwear",
    description:
      "Exclusive gamer anime streetwear designed in Australia. Premium drops, limited editions.",
    type: "website",
    locale: "en_AU",
    images: ["/thumbnil.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENZ — Next-Gen Anime Streetwear",
    description: "Exclusive gamer anime streetwear designed in Australia.",
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
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}

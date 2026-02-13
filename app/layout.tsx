import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustDAP - Digital Twin Platform",
  description:
    "Piattaforma Digital Twin per industria 4.0 con asset certificati, identità verificabile e tracciabilità lungo la filiera.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it"  className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

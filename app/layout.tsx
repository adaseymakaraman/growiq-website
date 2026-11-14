import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growiqai.net"),
  title: "GrowIQ AI — Yapay Zekâ Otomasyonu, Danışmanlık ve AI Reklamcılığı",
  description:
    "Tekrarlayan işleri yapay zekâ otomasyonlarına devredin. GrowIQ AI; süreç otomasyonu, AI danışmanlığı, GEO ve ChatGPT reklamlarıyla işletmenizi büyütür.",
  openGraph: {
    title: "GrowIQ AI — İşinizi yapay zekâ ile büyütün",
    description: "AI süreç otomasyonu, kişiselleştirilmiş AI danışmanlığı ve AI reklamcılığı (GEO + ChatGPT Ads).",
    url: "https://growiqai.net",
    siteName: "GrowIQ AI",
    locale: "tr_TR",
    type: "website",
  },
  alternates: { canonical: "https://growiqai.net" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap"
        />
        <meta name="theme-color" content="#0B0614" />
      </head>
      <body>{children}</body>
    </html>
  );
}

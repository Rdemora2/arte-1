import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://arte1.com.br"),
  title: "Arte 1 | Arte, Cultura e Entretenimento",
  description:
    "Canal Arte 1 - O melhor da arte, cultura, documentários e entretenimento. Programação de qualidade para quem aprecia conteúdo cultural.",
  keywords: [
    "arte",
    "cultura",
    "documentários",
    "entretenimento",
    "canal arte 1",
    "tv",
    "programação cultural",
  ],
  authors: [{ name: "Arte 1", url: "https://arte1.com.br" }],
  creator: "Arte 1",
  publisher: "Arte 1 / Grupo Bandeirantes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/arte1-logo.png",
    apple: "/images/arte1-logo.png",
  },
  openGraph: {
    title: "Arte 1 | Arte, Cultura e Entretenimento",
    description: "Canal Arte 1 - O melhor da arte, cultura, documentários e entretenimento. Programação de qualidade para quem aprecia conteúdo cultural.",
    url: "/",
    siteName: "Arte 1",
    images: [
      {
        url: "/images/Amostradas/Medias/banner_hero_Amostradas.png",
        width: 1920,
        height: 1080,
        alt: "Arte 1 - Exposição Amostradas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arte 1 | Arte, Cultura e Entretenimento",
    description: "Canal Arte 1 - O melhor da arte, cultura, documentários e entretenimento.",
    creator: "@canalarte1",
    images: ["/images/Amostradas/Medias/banner_hero_Amostradas.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#B01E23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased bg-neutral-950`}>
        {/* JSON-LD Schema for AEO / Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Arte 1",
              "url": "https://arte1.com.br",
              "logo": "https://arte1.com.br/images/arte1-logo.png",
              "description": "Canal Arte 1 - O melhor da arte, cultura, documentários e entretenimento.",
              "sameAs": [
                "https://www.instagram.com/canalarte1",
                "https://twitter.com/canalarte1",
                "https://www.youtube.com/canalarte1"
              ]
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

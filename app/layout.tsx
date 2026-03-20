import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Arte 1 | Arte, Cultura e Entretenimento',
  description: 'Canal Arte 1 - O melhor da arte, cultura, documentários e entretenimento. Programação de qualidade para quem aprecia conteúdo cultural.',
  keywords: ['arte', 'cultura', 'documentários', 'entretenimento', 'canal arte 1', 'tv', 'programação cultural'],
  icons: {
    icon: '/images/arte1-logo.png',
    apple: '/images/arte1-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#B01E23',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Anton, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({
  variable: '--font-sans-base',
  subsets: ['latin'],
  display: 'swap',
})

const anton = Anton({
  weight: '400',
  variable: '--font-anton',
  subsets: ['latin'],
  display: 'swap',
})

const mono = JetBrains_Mono({
  variable: '--font-mono-base',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hungary Strandfoci — A homokon élő labdarúgás',
  description:
    'A magyar strandfoci otthona. Technika, történelem, szabályok, edzés és inspiráció a homokon játszott labdarúgásról — meleg, nyári, mozgással teli világban.',
  metadataBase: new URL('https://hungarystrandfoci.com'),
  openGraph: {
    title: 'Hungary Strandfoci',
    description: 'A magyar strandfoci otthona — technika, történelem és nyári energia.',
    locale: 'hu_HU',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#15233b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`dark ${inter.variable} ${anton.variable} ${mono.variable} bg-background`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

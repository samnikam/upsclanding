import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800']
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Premium UPSC Guide | Expert IAS Preparation',
  description: 'Join thousands of successful UPSC aspirants. Get expert guidance for IAS/UPSC exam preparation with proven track record from India\'s leading UPSC Guide.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

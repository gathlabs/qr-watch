import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat' 
})

export const metadata: Metadata = {
  title: 'LuxWatch - Luxury Smartwatch',
  description: 'Experience the future of luxury timepieces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}

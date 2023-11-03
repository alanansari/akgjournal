import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'

const inter = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'AKG Journals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans mx-auto`}>{children}</body>
    </html>
  )
}

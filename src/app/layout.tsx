import type { Metadata } from 'next'
import './globals.css'

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
      <body className='mx-auto'>{children}</body>
    </html>
  )
}

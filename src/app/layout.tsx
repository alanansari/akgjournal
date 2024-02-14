import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AKG Journals',
  description: 'A website showcasing the journals published by the people of Ajay Kumar Garg College over the years.'
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

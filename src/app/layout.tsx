import type { Metadata } from 'next'

import React from 'react'

import { Inter } from 'next/font/google'

import '@picthentic/ui-kit/dist/style.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  description: 'Admin panel',
  title: 'Picthentic SuperAdmin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

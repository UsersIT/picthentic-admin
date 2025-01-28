import type { Metadata } from 'next'

import React from 'react'

import { Header } from '@/widgets/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

import '@picthentic/ui-kit/dist/style.css'
import '../_app/styles/globals.scss'

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

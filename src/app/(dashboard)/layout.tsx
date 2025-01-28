'use client'
import React from 'react'

import { Sidebar } from '@/widgets/sidebar'
import { ScrollArea, ScrollBar } from '@picthentic/ui-kit'

import s from './layout.module.scss'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={s.layout}>
      <Sidebar />
      <ScrollArea className={s.scrollArea}>
        {children}
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </div>
  )
}

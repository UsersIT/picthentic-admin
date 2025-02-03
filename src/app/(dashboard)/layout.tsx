'use client'
import React, { useEffect, useState } from 'react'

import { useIsLoggedIn } from '@/shared/hooks/useIsLoggedIn'
import { Sidebar } from '@/widgets/sidebar'
import { ScrollArea, ScrollBar } from '@picthentic/ui-kit'

import s from './layout.module.scss'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { isLoggedIn } = useIsLoggedIn()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={s.layout}>
      {isClient && isLoggedIn && <Sidebar />}
      <ScrollArea className={s.scrollArea}>
        {children}
        <ScrollBar orientation={'horizontal'} />
      </ScrollArea>
    </div>
  )
}

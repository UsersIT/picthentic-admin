import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './NavItem.module.scss'

type Props = {
  icon: React.JSX.Element
  label: string
  path: string
} & React.ComponentProps<'li'>

export const NavItem: React.FC<Props> = props => {
  const { icon, label, path, ...rest } = props
  const pathname = usePathname()

  const isActive = pathname === path

  return (
    <li className={s.navItem} {...rest}>
      <Link className={s.link} data-active={isActive} href={path}>
        {icon}
        <span className={s.label}>{label}</span>
      </Link>
    </li>
  )
}

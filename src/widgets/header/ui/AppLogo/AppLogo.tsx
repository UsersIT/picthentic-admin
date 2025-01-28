'use client'

import React from 'react'

import { routes } from '@/shared/constants/routes'
import { Typography } from '@picthentic/ui-kit'
import Link from 'next/link'

import s from './AppLogo.module.scss'

export const AppLogo = () => {
  return (
    <Typography as={Link} className={s.logo} href={routes.USERS} variant={'large'}>
      Picthentic
      <Typography as={'span'} variant={'small-text'}>
        Super
      </Typography>
      <Typography as={'span'} variant={'semi-bold-small-text'}>
        Admin
      </Typography>
    </Typography>
  )
}

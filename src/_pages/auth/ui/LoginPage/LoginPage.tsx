'use client'

import { LoginForm } from '@/features/auth'
import { routes } from '@/shared/constants/routes'
import { useIsLoggedIn } from '@/shared/hooks/useIsLoggedIn'
import { useRouter } from 'next/navigation'

export const LoginPage = () => {
  const { isLoggedIn } = useIsLoggedIn()
  const router = useRouter()

  if (isLoggedIn) {
    router.push(routes.USERS)

    return null
  }

  return <LoginForm />
}

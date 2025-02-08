import { useEffect } from 'react'

import { routes } from '@/shared/constants/routes'
import { useSessionStorage } from '@/shared/hooks/useSessionStorage'
import { usePathname, useRouter } from 'next/navigation'

export const useIsLoggedIn = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [getItem] = useSessionStorage<boolean>('isLoggedIn')
  const isLoggedIn = getItem()

  useEffect(() => {
    if (isLoggedIn) {
      if (pathname === routes.SIGNIN) {
        router.push(routes.USERS)
      }
    } else {
      if (pathname !== routes.SIGNIN) {
        router.push(routes.SIGNIN)
      }
    }
  }, [isLoggedIn, pathname, router])

  return {
    isLoggedIn,
  }
}

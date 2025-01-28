import { CreditCard, ImageOutline, Person, TrendingUp } from '@/shared/assets/icons'
import { routes } from '@/shared/constants/routes'

export const navItems = [
  { icon: <Person />, label: 'Users list', path: routes.USERS },
  { icon: <TrendingUp />, label: 'Statistics', path: routes.STATISTICS },
  { icon: <CreditCard />, label: 'Payments list', path: routes.PAYMENTS },
  { icon: <ImageOutline />, label: 'Posts list', path: routes.POSTS },
]

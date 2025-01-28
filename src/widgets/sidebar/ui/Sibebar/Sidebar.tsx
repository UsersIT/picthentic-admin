import s from './Sidebar.module.scss'

import { navItems } from '../../model/consts/navItems'
import { NavItem } from '../NavItem/NavItem'

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <nav className={s.menu}>
        <ul className={s.navList} role={'menu'}>
          {navItems.map(navItem => (
            <NavItem
              icon={navItem.icon}
              key={navItem.label}
              label={navItem.label}
              path={navItem.path}
              role={'menuitem'}
            />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

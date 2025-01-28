import s from './Header.module.scss'

import { AppLogo } from '../AppLogo/AppLogo'

export const Header = () => {
  return (
    <header className={s.header}>
      <AppLogo />
      {/*<LanguageSwitcher /> add here*/}
    </header>
  )
}

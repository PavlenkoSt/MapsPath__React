import React from 'react'
import s from './Header.module.scss'
import { Button } from 'antd'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img className={s.img} src="/icons/expand.svg" alt="logo" />
        <span>Saunter</span>
      </div>
      <Button type="primary">Add path</Button>
    </header>
  )
}

export default Header

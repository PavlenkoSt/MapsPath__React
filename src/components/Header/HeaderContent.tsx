import React from 'react'
import { Button } from 'antd'
import s from './HeaderContent.module.scss'

const HeaderContent = () => {
  return (
    <div className={s.content}>
      <div className={s.logo}>
        <img src="/icons/expand.svg" alt="logo" />
        <span>Saunter</span>
      </div>
      <Button type="primary">Add path</Button>
    </div>
  )
}

export default HeaderContent

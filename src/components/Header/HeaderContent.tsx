import React from 'react'
import { Button } from 'antd'
import s from './HeaderContent.module.scss'
import { FullscreenOutlined } from '@ant-design/icons'

const HeaderContent = () => {
  return (
    <div className={s.content}>
      <div className={s.logo}>
        <FullscreenOutlined />
        <span>Saunter</span>
      </div>
      <Button type="primary">Add path</Button>
    </div>
  )
}

export default HeaderContent

import React, { Dispatch, FC, SetStateAction } from 'react'
import { Button } from 'antd'
import s from './HeaderContent.module.scss'
import { FullscreenOutlined } from '@ant-design/icons'

type HeaderContentPropsType = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

const HeaderContent: FC<HeaderContentPropsType> = ({ setIsModalVisible }) => {
  return (
    <div className={s.content}>
      <div className={s.logo}>
        <FullscreenOutlined />
        <span>Saunter</span>
      </div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add path
      </Button>
    </div>
  )
}

export default HeaderContent

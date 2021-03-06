import React, { Dispatch, FC, SetStateAction } from 'react'
import { Button, Col, Row } from 'antd'
import { FullscreenOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

type HeaderContentPropsType = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>
}

const { Header } = Layout

const HeaderContent: FC<HeaderContentPropsType> = ({ setIsModalVisible }) => {
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <Row style={{ color: '#fff', columnGap: 10, fontSize: 20 }}>
            <Col>
              <FullscreenOutlined />
            </Col>
            <Col>Saunter</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Button type="primary" onClick={() => setIsModalVisible(true)}>
              Add path
            </Button>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderContent

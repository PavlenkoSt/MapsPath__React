import React, { FC, useEffect, useState } from 'react'
import { getRoutes } from './actions/routes'
import HeaderContent from './components/Header/HeaderContent'
import { Layout, Modal } from 'antd'
import Routes from './components/Routes/Routes'
import AddNewRouteForm from './components/AddNewRouteForm/AddNewRouteForm'
import Diviner from './components/Diviner'
import Map from './components/Map'

const { Header, Content } = Layout

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Layout>
      <Header>
        <HeaderContent setIsModalVisible={setIsModalVisible} />
      </Header>
      <Content className="content">
        <Routes />
        <Diviner />
        <Map />
      </Content>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        className="modal"
        title="Add new path"
        width={1000}
      >
        <AddNewRouteForm />
        <Diviner />
      </Modal>
    </Layout>
  )
}

export default App

import React, { useState } from 'react'
import HeaderContent from './components/Header/HeaderContent'
import { Layout } from 'antd'
import Routes from './components/Routes/Routes'
import Diviner from './components/Diviner'
import ModalForm from './components/ModalForm/ModalForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      </Content>
      <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <ToastContainer />
    </Layout>
  )
}

export default App

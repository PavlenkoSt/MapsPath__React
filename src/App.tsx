import React, { useState } from 'react'
import HeaderContent from './components/Header/HeaderContent'
import { Layout } from 'antd'
import ModalForm from './components/ModalForm/ModalForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './components/Routes/Routes'

const { Header } = Layout

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Layout>
      <Header>
        <HeaderContent setIsModalVisible={setIsModalVisible} />
      </Header>
      <Routes />
      <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <ToastContainer />
    </Layout>
  )
}

export default App

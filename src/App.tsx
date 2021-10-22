import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderContent from './components/Header/HeaderContent'
import ModalForm from './components/ModalForm/ModalForm'
import Routes from './components/Routes/Routes'
import useAction from './hooks/useAction'

const { Header } = Layout

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { setRoutesThunk } = useAction()

  useEffect(() => {
    setRoutesThunk()
  }, [])

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

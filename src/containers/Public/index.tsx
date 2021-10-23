import React, { useState } from 'react'
import { Layout } from 'antd'
import { ToastContainer } from 'react-toastify'
import Header from 'components/Header'
import ModalForm from './ModalForm'
import Routes from '../Public/Routes'

const Public = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <Layout>
      <Header setIsModalVisible={setIsModalVisible} />
      <Routes />
      <ModalForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
      <ToastContainer />
    </Layout>
  )
}

export default Public

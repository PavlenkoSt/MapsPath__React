import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderContent from './components/Header/HeaderContent'
import ModalForm from './components/ModalForm/ModalForm'
import Routes from './components/Routes/Routes'
import { db } from './firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const { Header } = Layout

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const routesRef = collection(db, 'routes')

  const addRoute = async () => {
    await addDoc(routesRef, { name: 'Alex', age: 20 })
  }

  const updateRoute = async () => {
    const routeDoc = doc(db, 'routes', 'SMMwzsTGElGKyjk0uO52')
    const newFields = { age: 100 }
    await updateDoc(routeDoc, newFields)
  }

  const deleteRoute = async () => {
    const routeDoc = doc(db, 'routes', 'SMMwzsTGElGKyjk0uO52')
    await deleteDoc(routeDoc)
  }

  useEffect(() => {
    const getCol = async () => {
      const data = await getDocs(routesRef)
      const routesList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log(routesList)
    }

    // deleteRoute()

    // addRoute()

    // updateRoute()

    getCol()
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

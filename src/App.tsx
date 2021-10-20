import React, { FC, useState } from 'react'
import HeaderContent from './components/Header/HeaderContent'
import { Layout, Modal } from 'antd'
import Routes from './components/Routes/Routes'
import AddNewRouteForm from './components/AddNewRouteForm/AddNewRouteForm'
import Diviner from './components/Diviner'
import Map from './components/Map'
//@ts-ignore
import scriptLoader from 'react-async-script-loader'

const { Header, Content } = Layout

type ScriptLoaderPropsType = {
  isScriptLoaded: boolean
  isScriptLoadSucceed: boolean
}

const App: FC<ScriptLoaderPropsType> = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  if (!isScriptLoaded || !isScriptLoadSucceed) {
    return <div>Loading...</div>
  }

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

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`])(App)

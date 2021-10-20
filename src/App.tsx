import React, { useEffect } from 'react'
import { getRoutes } from './actions/routes'
import HeaderContent from './components/Header/HeaderContent'
import { Layout } from 'antd'
import Routes from './components/Routes/Routes'

const { Header, Content } = Layout

const App = () => {
  useEffect(() => {
    getRoutes()
  }, [])

  return (
    <Layout>
      <Header>
        <HeaderContent />
      </Header>
      <Content className="content">
        <Routes />
        <div className="diviner"></div>
      </Content>
    </Layout>
  )
}

export default App

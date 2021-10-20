import React, { useEffect } from 'react'
import { getRoutes } from './actions/routes'
import Header from './components/Header'
import { Layout } from 'antd'

const App = () => {
  useEffect(() => {
    getRoutes()
  }, [])

  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default App

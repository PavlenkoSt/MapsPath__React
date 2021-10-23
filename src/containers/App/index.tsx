import React, { useEffect } from 'react'

import useAction from 'hooks/useAction'
import Public from '../Public'

const App = () => {
  const { setRoutesThunk } = useAction()

  useEffect(() => {
    setRoutesThunk()
  }, [])

  return <Public />
}

export default App

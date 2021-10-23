import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import store from './store'

import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'
import './sources/styles/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

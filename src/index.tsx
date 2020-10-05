import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.scss'

import Routes from './routes'
import * as serviceWorker from './serviceWorker'

// Redux Toolkit
import { Provider } from 'react-redux'
import { store } from './stores/index'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()

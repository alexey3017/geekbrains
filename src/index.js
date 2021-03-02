import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'

import './scss/app.scss'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)

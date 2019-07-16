import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import initProvider from 'services/provider'

test('App renders without crashing', () => {
  initProvider('firebase')
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React from 'react'
import ReactDOM from 'react-dom'

import AccountPage from '.'

test('Account Page renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AccountPage />, div)
  ReactDOM.unmountComponentAtNode(div)
})

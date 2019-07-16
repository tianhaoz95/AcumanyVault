import React from 'react'
import ReactDOM from 'react-dom'
import SecretInput from 'components/elements/secret_input'

test('SecretInput renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SecretInput onChange={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

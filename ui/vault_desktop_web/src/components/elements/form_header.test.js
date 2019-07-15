import React from 'react'
import ReactDOM from 'react-dom'
import FormHeader from 'components/elements/form_header'

test('FormHeader renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FormHeader />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React from 'react'
import ReactDOM from 'react-dom'

import Brief from '.'

test('Brief renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Brief />, div)
  ReactDOM.unmountComponentAtNode(div)
})

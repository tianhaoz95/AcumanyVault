import React from 'react'
import ReactDOM from 'react-dom'

import ProjectPage from '.'

test('Project Page renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectPage location={{ search: 'user=tianhaoz' }} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

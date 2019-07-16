import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import SignIn from '.'

test('SignIn Page renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <SignIn />
    </Router>
    , div)
  ReactDOM.unmountComponentAtNode(div)
})

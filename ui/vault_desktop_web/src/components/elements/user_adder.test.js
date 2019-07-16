import React from 'react'
import ReactDOM from 'react-dom'
import UserAdder from 'components/elements/user_adder'

test('UserAdder renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserAdder />, div)
  ReactDOM.unmountComponentAtNode(div)
})

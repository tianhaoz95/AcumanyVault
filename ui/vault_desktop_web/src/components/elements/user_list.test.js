import React from 'react'
import ReactDOM from 'react-dom'
import UserList from 'components/elements/user_list'

test('UserList renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserList list={['tianhaoz95']} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React from 'react'
import ReactDOM from 'react-dom'
import GitHubAvatar from 'components/elements/github_avatar'

test('GitHubAvatar renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GitHubAvatar />, div)
  ReactDOM.unmountComponentAtNode(div)
})

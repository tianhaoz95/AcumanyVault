import React from 'react'
import ReactDOM from 'react-dom'
import GitHubUserCard from 'components/elements/github_user_card'

test('GitHubUserCard renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GitHubUserCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})

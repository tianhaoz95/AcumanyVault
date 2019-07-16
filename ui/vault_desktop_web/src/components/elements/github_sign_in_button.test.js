import React from 'react'
import ReactDOM from 'react-dom'
import GitHubSignInButton from 'components/elements/github_sign_in_button'

test('GitHubSignInButton renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GitHubSignInButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React from 'react'
import ReactDOM from 'react-dom'
import GitHubAutocomplete from 'components/elements/github_autocomplete'

test('GitHubAutocomplete renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GitHubAutocomplete />, div)
  ReactDOM.unmountComponentAtNode(div)
})

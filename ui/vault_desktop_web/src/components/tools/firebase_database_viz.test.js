import React from 'react'
import ReactDOM from 'react-dom'
import FirebaseDatabaseViz from 'components/tools/firebase_database_viz'

test('FormHeader renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FirebaseDatabaseViz />, div)
  ReactDOM.unmountComponentAtNode(div)
})

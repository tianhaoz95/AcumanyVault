import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'

import SignIn from '.'

const stories = storiesOf('Sign In', module)

stories
  .add('Sign In', () => {
    return (
      <Router>
        <SignIn />
      </Router>
    )
  })

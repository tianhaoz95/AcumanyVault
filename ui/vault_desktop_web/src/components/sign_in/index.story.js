import React from 'react'
import { storiesOf } from '@storybook/react'

import SignIn from '.'

const stories = storiesOf('Sign In', module)

stories
  .add('Sign In', () => {
    return (
      <SignIn />
    )
  })

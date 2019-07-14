import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUp from '.'

const stories = storiesOf('Sign Up', module)

stories
  .add('Sign up', () => {
    return (
      <SignUp />
    )
  })

import React from 'react'
import { storiesOf } from '@storybook/react'

import AccountPage from '.'

const stories = storiesOf('AccountPage', module)

stories
  .add('Top-level', () => (
    <AccountPage />
  ))

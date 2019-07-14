import React from 'react'
import { storiesOf } from '@storybook/react'

import Brief from '.'

const stories = storiesOf('Brief', module)

stories
  .add('Top-level', () => (
    <Brief />
  ))

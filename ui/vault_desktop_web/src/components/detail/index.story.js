import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Detail from '.'

const stories = storiesOf('Detail', module)

stories.addDecorator(withKnobs)

stories
  .add('Top-level', () => (
    <Detail />
  ))

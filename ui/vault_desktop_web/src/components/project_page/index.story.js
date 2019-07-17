import React from 'react'
import { storiesOf } from '@storybook/react'

import ProjectPage from '.'

const stories = storiesOf('Project Page', module)

stories
  .add('Top-level', () => (
    <ProjectPage location={{ search: 'user=tianhaoz' }} />
  ))

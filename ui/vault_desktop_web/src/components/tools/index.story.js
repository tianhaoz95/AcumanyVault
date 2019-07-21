import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import FirebaseDatabaseViz from 'components/tools/firebase_database_viz'

const stories = storiesOf('Utility Tools', module)

stories.addDecorator(withKnobs)

stories
  .add('Firebase DB Viz', () => {
    return (
      <FirebaseDatabaseViz />
    )
  })

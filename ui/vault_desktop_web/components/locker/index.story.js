import React from 'react';
import { storiesOf } from '@storybook/react';
import Locker from '.';

storiesOf('Locker', module)
  .add('Top-level', () => (
    <Locker />
  ));
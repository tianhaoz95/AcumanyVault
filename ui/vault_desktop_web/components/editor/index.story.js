import React from 'react';
import { storiesOf } from '@storybook/react';

import Editor from '.';
import Header from './header';
import Secret from './secret';

storiesOf('Editor', module)
  .add('Top-level', () => (
      <Editor/>
  ))
  .add('Header', () => (
      <Header/>
  ))
  .add('Secret', () => (
      <Secret/>
  ));
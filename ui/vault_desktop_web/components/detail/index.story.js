import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Detail from '.';
import Header from './header';
import Secret from './secret';
import CanView from './can_view';
import CanEdit from './can_edit';
import Owner from './owner';

const stories = storiesOf('Detail Page', module);

stories.addDecorator(withKnobs);

stories
  .add('Top-level', () => (
      <Detail/>
  ))
  .add('Header', () => {
      const title = text('Title', 'MY_KEY');
      return (
          <Header 
            title={title}
            />
      );
  })
  .add('Secret', () => {
      return (
          <Secret
            onChange={action('secrete-content-update')}
            />
      );
  })
  .add('Can-view List', () => (
      <CanView/>
  ), {
    notes: 'This is a list of people can view it',
  })
  .add('Can-edit List', () => (
      <CanEdit/>
  ))
  .add('Owner', () => (
      <Owner/>
  ));
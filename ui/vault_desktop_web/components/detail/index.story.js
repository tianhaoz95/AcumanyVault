import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Detail from 'components/detail';
import Header from 'components/detail/header';
import Secret from 'components/detail/secret';
import Restriction from 'components/detail/restriction';

const stories = storiesOf('Detail', module);

stories.addDecorator(withKnobs);

stories
.add('Top-level', () => (
    <Detail/>
))
.add('Header', () => {
    const title = text('Title', 'MY_KEY');
    const edit = boolean('Edit Mode', true);
    return (
        <Header 
        title={title}
        edit={edit}
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
.add('Restriction', () => (
    <Restriction/>
), {
notes: 'This is a list of people can view it',
});
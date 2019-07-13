import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Detail from 'components/detail';
import Secret from 'components/detail/secret';
import UserAdder from 'components/elements/user_adder';

const stories = storiesOf('Detail', module);

stories.addDecorator(withKnobs);

stories
.add('Top-level', () => (
    <Detail/>
))
.add('Secret', () => {
    return (
        <Secret
        onChange={action('secrete-content-update')}
        />
    );
});
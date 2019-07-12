import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Sign Up', module);

import SignUp from 'components/signup';

stories
.add('Sign up', () => {
    return (
        <SignUp/>
    );
});
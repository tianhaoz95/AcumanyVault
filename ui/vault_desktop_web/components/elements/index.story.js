import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import UserList from 'components/elements/user_list';
import GitHubAvatar from 'components/elements/github_avatar';
import GitHubUserCard from 'components/elements/github_user_card';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories
.add('GitHub Avatar', () => {
    const username = text("GitHub Username", "tianhaoz95");
    return (
        <GitHubAvatar username={username}/>
    );
})
.add('GitHub User Card', () => {
    const username = text("GitHub Username", "tianhaoz95");
    return (
        <GitHubUserCard username={username}/>
    );
})
.add('User List', () => {
    const list = array("Username List", ["tianhaoz95", "AcumanyBot"]);
    return (
        <UserList 
            list={list}
            onDelete={action('delete-user')}
        />
    );
});
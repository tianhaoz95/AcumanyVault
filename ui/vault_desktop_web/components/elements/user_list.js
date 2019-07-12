import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

import GitHubAvatar from 'components/elements/github_avatar';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(1),
    }
}));

function UserList(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            {
                props.list.map((username) => (
                    <Chip
                        avatar={<GitHubAvatar username={username}/>}
                        key={username}
                        label={username}
                        className={classes.chip}
                        onDelete={() => {props.onDelete(username)}}
                    />
                ))
            }
        </React.Fragment>
    );
}

export default UserList;
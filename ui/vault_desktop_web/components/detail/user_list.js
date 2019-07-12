import React from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

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
                        key={username}
                        label={username}
                        className={classes.chip}
                        onDelete={() => {deleteUser(username)}}
                    />
                ))
            }
        </React.Fragment>
    );
}

export default UserList;
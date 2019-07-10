import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}));

function Secret() {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.container}>
            <TextField
                className={classes.textField}
                label="Key"
                variant="outlined"
            />
            <TextField
                className={classes.textField}
                label="Value"
                variant="outlined"
            />
        </React.Fragment>
    );
}

export default Secret;
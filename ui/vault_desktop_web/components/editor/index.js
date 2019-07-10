import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function Editor() {
    const classes = useStyles();

    return (
        <form className={classes.container}>
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
        </form>
    );
}

export default Editor;
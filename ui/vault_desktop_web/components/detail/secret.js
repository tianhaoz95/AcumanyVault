import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

function Secret(props) {
    const classes = useStyles();
    const [secretKey, setSecretKey] = useState("");
    const [secretVal, setSecretVal] = useState("");
    function handleKeyChange(e) {
      setSecretKey(e.target.value);
      props.onChange({
        "key": e.target.value,
        "val": secretVal
      });
    }
    function handleValChange(e) {
      setSecretVal(e.target.value);
      props.onChange({
        "key": secretKey,
        "val": e.target.value
      });
    }
    return (
        <React.Fragment>
            <TextField
                className={classes.textField}
                label="Key"
                variant="outlined"
                onChange={handleKeyChange}
            />
            <TextField
                className={classes.textField}
                label="Value"
                variant="outlined"
                onChange={handleValChange}
            />
        </React.Fragment>
    );
}

export default Secret;
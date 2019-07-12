import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
      props.onChange({
        "key": secretKey,
        "value": secretVal
      });
    });
    return (
        <React.Fragment>
            <TextField
                className={classes.textField}
                label="Key"
                variant="outlined"
                onChange={(e) => {
                  setSecretKey(e.target.value);
                }}
            />
            <TextField
                className={classes.textField}
                label="Value"
                variant="outlined"
                onChange={(e) => {
                  setSecretVal(e.target.value);
                }}
            />
        </React.Fragment>
    );
}

export default Secret;
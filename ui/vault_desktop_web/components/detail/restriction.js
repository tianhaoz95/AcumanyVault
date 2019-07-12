import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

function Restriction(props) {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const userList = ["Tom", "John", "Bob"];
    function addUser() {
      
    }
    function deleteUser(username) {
      
    }
    return (
        <React.Fragment>
            <TextField
                className={classes.textField}
                label="GitHub Username"
                value={username}
                variant="outlined"
                onChange={(e) => {setUsername(e.target.value)}}
            />
            <Button
                variant="contained"
                className={classes.button}
                onClick={() => {addUser()}}
                >
                Add
            </Button>
        </React.Fragment>
    );
}

export default Restriction;
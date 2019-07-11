import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  chip: {
    margin: theme.spacing(1),
  }
}));

function CanView(props) {
    const classes = useStyles();
    const can_view_list = [1,1,1,1,1];
    const chip_list = can_view_list.map((idx) => (
        <Chip
            key={idx}
            label="Basic Chip"
            className={classes.chip}
        />
    ));
    return (
        <React.Fragment>
            <TextField
                className={classes.textField}
                label="Key"
                variant="outlined"
            />
            <Button
                variant="contained"
                className={classes.button}
                >
                Add
            </Button>
            {chip_list}
        </React.Fragment>
    );
}

export default CanView;
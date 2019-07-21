import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ReactJson from 'react-json-view'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

function FirebaseDatabaseViz () {
  const classes = useStyles()
  const [fbResponse, setFbResponse] = useState()
  function handleRead () {
    setFbResponse({
      test: 'test'
    })
  }
  return (
    <React.Fragment>
      <TextField
        id='standard-name'
        label='Collection Name'
        className={classes.textField}
        margin='normal'
      />
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleRead}
      >
        Read
      </Button>
      <ReactJson src={fbResponse} />
    </React.Fragment>
  )
}

export default FirebaseDatabaseViz

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}))

function GitHubSignInButton (props) {
  const classes = useStyles()
  return (
    <Button
      variant='contained'
      className={classes.button}
      onClick={props.onClick}
    >
      Sign In With GitHub
    </Button>
  )
}

export default GitHubSignInButton

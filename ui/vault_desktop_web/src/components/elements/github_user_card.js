import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

import GitHubAvatar from 'components/elements/github_avatar'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  }
}))

function GitHubUserCard (props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <GitHubAvatar username={props.username} />
    </Card>
  )
}

export default GitHubUserCard

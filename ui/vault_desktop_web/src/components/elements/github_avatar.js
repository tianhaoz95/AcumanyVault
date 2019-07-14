import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function GitHubAvatar (props) {
  return (
    <Avatar
      alt='Natacha'
      src={'https://github.com/' + props.username + '.png'}
    />
  )
}

export default GitHubAvatar

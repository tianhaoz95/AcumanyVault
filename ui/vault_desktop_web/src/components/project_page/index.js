import React from 'react'

function ProjectPage (props) {
  const params = new URLSearchParams(props.location.search)
  const username = params.get('user')
  return (
    <React.Fragment>
      Project Page for {username}
    </React.Fragment>
  )
}

export default ProjectPage

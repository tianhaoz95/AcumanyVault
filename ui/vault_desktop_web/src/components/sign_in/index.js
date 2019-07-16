import React from 'react'
import { withRouter } from 'react-router-dom'

import GitHubSignInButton from 'components/elements/github_sign_in_button'
import signInWithGitHub from 'services/authentication/sign_in'

function SignIn (props) {
  return (
    <React.Fragment>
      <GitHubSignInButton
        onClick={
          async () => {
            await signInWithGitHub('firebase')
            props.history.push('/')
          }
        }
      />
    </React.Fragment>
  )
}

export default withRouter(SignIn)

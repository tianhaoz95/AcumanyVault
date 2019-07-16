import React, { useState, useEffect } from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import isAuthenticated from 'services/authentication/is_auth'

function PrivateRoute ({ component: Component, ...rest }) {
  const [progress, setProgress] = useState('validating')
  useEffect(() => {
    async function checkAuthentication () {
      const user = await isAuthenticated('firebase')
      if (user) {
        setProgress('validated')
      } else {
        setProgress('redirect')
      }
    }
    checkAuthentication()
  })
  return (
    <Route
      {...rest}
      render={(props) => {
        if (progress === 'validating') {
          return (
            <React.Fragment>
              validating
            </React.Fragment>
          )
        } else if (progress === 'validated') {
          return (
            <Component {...props} />
          )
        } else if (progress === 'redirect') {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        } else {
          return (
            <React.Fragment>
              wtf?
            </React.Fragment>
          )
        }
      }
      }
    />
  )
}

export default PrivateRoute

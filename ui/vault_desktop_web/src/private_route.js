import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

import isAuthenticated from 'services/authentication/is_auth'

function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated('firebase') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

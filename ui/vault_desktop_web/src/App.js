import React from 'react'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/styles'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PrivateRoute from 'private_route'
import VaultTheme from 'components/theme'
import SignIn from 'components/sign_in'
import AccountPage from 'components/account_page'
import ProjectPage from 'components/project_page'

function App (props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={VaultTheme}>
        <Container maxWidth='sm'>
          <Router>
            <Route path='/login' component={SignIn} />
            {props.render_private ? (
              <React.Fragment>
                <PrivateRoute
                  exact
                  path='/'
                  component={AccountPage}
                />
                <PrivateRoute
                  path='/project'
                  component={ProjectPage}
                />
              </React.Fragment>
            ) : (
              null
            )}
          </Router>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App

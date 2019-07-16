import React from 'react'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/styles'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PrivateRoute from 'private_route'
import vaultTheme from 'components/theme'
import SignIn from 'components/sign_in'
import AccountPage from 'components/account_page'
import ProjectPage from 'components/project_page'

function App () {
  return (
    <React.Fragment>
      <ThemeProvider theme={vaultTheme}>
        <Container maxWidth='sm'>
          <Router>
            <Route path='/login' component={SignIn} />
            <PrivateRoute exact path='/' component={AccountPage} />
            <PrivateRoute path='/project' component={ProjectPage} />
          </Router>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App

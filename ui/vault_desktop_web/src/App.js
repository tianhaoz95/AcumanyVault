import React from 'react'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/styles'

import vaultTheme from 'components/theme'

function App () {
  return (
    <React.Fragment>
      <ThemeProvider theme={vaultTheme}>
        <Container maxWidth='sm'>
          <p>Vault App</p>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App

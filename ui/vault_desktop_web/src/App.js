import React from 'react';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';

import vault_theme from './theme';

function App() {
  return (
    <React.Fragment>
        <ThemeProvider theme={vault_theme}>
            <Container maxWidth="sm">
                <p>Vault App</p>
            </Container>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

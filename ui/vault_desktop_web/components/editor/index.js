import React from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './header';
import Secret from './secret';

function Editor() {
    return (
        <Paper>
            <Header/>
            <Secret/>
        </Paper>
    );
}

export default Editor;
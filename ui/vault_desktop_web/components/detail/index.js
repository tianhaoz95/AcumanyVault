import React from 'react';
import Paper from '@material-ui/core/Paper';

import Header from './header';
import Secret from './secret';
import CanView from './can_view';
import CanEdit from './can_edit';
import Owner from './owner';

function Detail() {
    return (
        <Paper>
            <Header/>
            <Secret/>
            <Owner/>
            <CanView/>
            <CanEdit/>
        </Paper>
    );
}

export default Detail;
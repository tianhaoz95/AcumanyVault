import React from 'react';
import Paper from '@material-ui/core/Paper';

import Header from 'components/detail/header';
import Secret from 'components/detail/secret';
import Restriction from 'components/detail/restriction';
import Owner from 'components/detail/owner';

function Detail() {
    return (
        <Paper>
            <Header/>
            <Secret onChange={() => {}}/>
            <Owner/>
            <Restriction/>
            <Restriction/>
        </Paper>
    );
}

export default Detail;
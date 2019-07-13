import React from 'react';
import Paper from '@material-ui/core/Paper';

import Secret from 'components/detail/secret';
import UserAdder from 'components/elements/user_adder';

function Detail() {
    return (
        <Paper>
            <Secret onChange={() => {}}/>
            <UserAdder/>
            <UserAdder/>
        </Paper>
    );
}

export default Detail;
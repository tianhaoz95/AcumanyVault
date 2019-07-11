import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header(props) {
    return (
        <React.Fragment>
            <Typography component="h4">
                Property Editor {props.title}
            </Typography>
        </React.Fragment>
    );
}

export default Header;
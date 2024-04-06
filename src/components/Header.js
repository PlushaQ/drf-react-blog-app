import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';


const StyledAppBar = styled(AppBar)({
    borderBottom: `1px solid black`
});


function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <StyledAppBar 
            position="static"
            color='primary'
            elevation={0}
            />
            <Toolbar>
                <Typography variant='h6' color='inherit' noWrap>
                    BlogmeUp
                </Typography>
            </Toolbar>
        </React.Fragment>
        
    )
}

export default Header;
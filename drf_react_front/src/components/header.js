import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const StyledAppBar = styled(AppBar)({
    borderBottom: `1px solid black`
});

const StyledLink = styled(Link)(({theme}) => ({
    margin: theme.spacing(1, 1.5)
}));

const StyledButton = styled(Button)(({theme}) => ({
    margin: theme.spacing(1, 1.5),
}));

const StyledTitle = styled(Typography)({
    flexGrow: 1,
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
                <StyledTitle variant='h6' color='inherit' noWrap>
                    <StyledLink 
                        component={NavLink}
                        to='/'
                        underline='none'
                        color='textPrimary'
                        >
                            Blog
                    </StyledLink>
                </StyledTitle>
                <nav>
                    <StyledLink 
                        component={NavLink}
                        to='/register'
                        underline='none'
                        color='textPrimary'
                        >
                            Register
                    </StyledLink>
                </nav>
                    <StyledButton
                        href="#"
                        color="primary"
                        variant="outlined"
                        component={NavLink}
                        to="/login"
                    >
                        Login
                    </StyledButton>

					<StyledButton
						href="#"
						color="primary"
						variant="outlined"
						component={NavLink}
						to="/logout"
					>
						Logout
					</StyledButton>

                
            </Toolbar>
        </React.Fragment>
        
    )
}

export default Header;
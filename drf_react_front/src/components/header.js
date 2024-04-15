import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchBar from '@mkyy/mui-search-bar'
import Search from './search';



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

const StyledSearchBar = styled(SearchBar)({
    border: '1px solid #ccc'
})


function Header() {

    const navigate = useNavigate()
    const [data, setData] = useState({search: ""})

    const goSearch = (e) => {
        navigate({pathname: '/search/',
        search: '?search=' + data.search
    });
    }

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
                <StyledSearchBar
                    value={data.search}
                    onChange={(newValue) => setData({search: newValue})}
                    onRequestSearch={() => goSearch(data.search)}
                    />
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
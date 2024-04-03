import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme(); 

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid black`
    }
}));


function Header() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar 
            position="static"
            color='primary'
            elevation={0}
            className={classes.appBar}
            />
            <Toolbar>
                <Typography variant='h6' color='inherit' noWrap>
                    BlogmeUp
                </Typography>
            </Toolbar>
        </ThemeProvider>
    )
}

export default Header;
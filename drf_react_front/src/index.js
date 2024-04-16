import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App'
import Header from './components/header'
import Footer from './components/footer'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Logout from './components/auth/logout'
import SinglePost from './components/posts/singlePost'
import Search from './components/posts/search';

const theme = createTheme(); 

const routing = (
  <Router>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/post/:slug" element={<SinglePost />}/>
                <Route path="/search" element={<Search />} />
            </Routes>
            <Footer />
        </ThemeProvider>
      </React.StrictMode>
  </Router>
)


ReactDOM.createRoot(document.getElementById('root')).render(routing)
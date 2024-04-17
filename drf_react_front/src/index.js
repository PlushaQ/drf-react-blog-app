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
import Admin from './Admin'
import Create from './components/admin/create'
import Edit from './components/admin/edit'
import Delete from './components/admin/delete'

const theme = createTheme(); 

const routing = (
  <Router>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
                <Route exact path="/" element={<App />} />
                 {/* Crud routes */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/create" element={<Create />} />
                <Route path="/admin/edit/:id" element={<Edit />} />
                <Route path="/admin/delete/:id" element={<Delete />} />
                {/* Auth routes */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                {/* Post routes */}
                <Route path="/post/:slug" element={<SinglePost />}/>
                <Route path="/search" element={<Search />} />
            </Routes>
            <Footer />
        </ThemeProvider>
      </React.StrictMode>
  </Router>
)


ReactDOM.createRoot(document.getElementById('root')).render(routing)
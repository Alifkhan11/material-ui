import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../home/home/Home';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Home></Home>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Layout;
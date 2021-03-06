import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/appoinment">
            <Button color="inherit">Appoinment</Button>
          </Link>
          {
            user?.displayName ?
            <Box>
              <Link to="/dashboard">
            <Button color="inherit">Dashboard</Button>
            <Button onClick={logOut} color="inherit">Logout</Button>
          </Link>
            </Box>
              :
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
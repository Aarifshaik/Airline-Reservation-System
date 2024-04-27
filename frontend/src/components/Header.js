import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
import {NavLink} from 'react-router-dom'
import Box from '@mui/material/Box'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from './Redux Store';
// import { useState } from 'react';
import {Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const [value, setvalue] = useState()
  const navigate = useNavigate();
  const { isLoggedIn, role } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div>
      <AppBar sx={{backgroundColor:'#ff'}} position='sticky'>
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ position: 'absolute', top: 15, left: 15 }}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <AirplaneTicketIcon sx={{ fontSize: 30 }} />
            <Box m={0.4 }/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              A²erohive
            </Typography>
          </Box>
          <Typography variant="h10" fontSize={10} component="div" sx={{ flexGrow: 1 }}>
            Your Gateway to Elevated Adventures
          </Typography>
        </Box>
        <Toolbar>
        <Box display="flex" flexGrow={1} justifyContent="center">
          <Tabs textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setvalue(val)}>
            {!isLoggedIn && (
              <>
                <Tab LinkComponent={NavLink} to='/Login' label='Login' />
                <Tab LinkComponent={NavLink} to='/signup' label='Sign Up' />
                <Tab LinkComponent={NavLink} to='/about' label='About Us' />
                <Tab LinkComponent={NavLink} to='/info' label='Info' />
              </>
            )}
            {isLoggedIn && role === 'Customer' && (
              <>
                <Tab LinkComponent={NavLink} to='/hello' label='Home' />
                <Tab LinkComponent={NavLink} to='/flights' label='Flights'/>
                <Tab LinkComponent={NavLink} to='/about' label='About Us' />
                <Tab LinkComponent={NavLink} to='/contact' label='Contact Us' />
                
              </>
            )}
            {isLoggedIn && role === 'Admin' && (
              <>
                <Tab LinkComponent={NavLink} to='/add_flight' label='Add Flight' />
                <Tab LinkComponent={NavLink} to='/flights' label='Flights'/>
                <Tab LinkComponent={NavLink} to='/fetchregistrations' label='Registrations' />
                <Tab LinkComponent={NavLink} to='/info' label='Info' />
              </>
            )}
          </Tabs>
          </Box>
          {isLoggedIn && (
            <Box display="flex" justifyContent="flex-end">
            <IconButton color="inherit" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
import {NavLink} from 'react-router-dom'
import Box from '@mui/material/Box'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Header = () => {
  const [value, setvalue] = useState()
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
          <Toolbar  sx={{display: 'flex', justifyContent: 'center'}}>
          
          <Tabs textColor='inherit' indicatorColor='primary'
            value={value} onChange={(e,val)=>setvalue(val)}>
            
            <Tab LinkComponent={NavLink} to='/flights' label='Flights'/>
            <Tab LinkComponent={NavLink} to='/add_flight' label='Add Flight' />
            {/* <Tab LinkComponent={NavLink} to='/visitor' label='Visitor' /> */}
            <Tab LinkComponent={NavLink} to='/Login ' label='Login' />
            <Tab LinkComponent={NavLink} to='/signup' label='Sign Up' />
            {/* <Tab LinkComponent={NavLink} to='/contactus' label='Contact Us' /> */}
            {/* <Tab LinkComponent={NavLink} to='/about' label='About' />  */}
            <Tab LinkComponent={NavLink} to='/fetchregistrations' label='Registrations' />
            
            

          </Tabs>
          
          </Toolbar>
         </AppBar>
         
        
    </div>
  )
}

export default Header
import React,{useState} from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab} from '@mui/material'
// import AddHomeIcon from '@mui/icons-material/AddHome'
import {NavLink} from 'react-router-dom'
import Box from '@mui/material/Box'
// import kllogo1 from '../images/klulogo.png'

const Header = () => {
  const [value, setvalue] = useState()
  return (
    <div>
         <AppBar sx={{backgroundColor:'#ff'}} position='sticky'>
         
         <Box display="flex" alignItems="center" sx={{ position: 'absolute', top: 15, left: 15 }}>
            {/* <Typography> <img src={kllogo1} alt="KLU Logo" width={50}></img></Typography> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Counselling System
            </Typography>
          </Box>
          <Toolbar  sx={{display: 'flex', justifyContent: 'center'}}>
          
          <Tabs textColor='inherit' indicatorColor='primary'
            value={value} onChange={(e,val)=>setvalue(val)}>
            
            <Tab LinkComponent={NavLink} to='/counsellor' label='Add Counsellor'/>
            <Tab LinkComponent={NavLink} to='/appointment' label='Appointment' />
            <Tab LinkComponent={NavLink} to='/visitor' label='Visitor' />
            <Tab LinkComponent={NavLink} to='/Login ' label='Login' />
            <Tab LinkComponent={NavLink} to='/signup' label='Sign Up' />
            <Tab LinkComponent={NavLink} to='/contactus' label='Contact Us' />
            <Tab LinkComponent={NavLink} to='/about' label='About' />
            <Tab LinkComponent={NavLink} to='/fetchregistrations' label='Registration' />
            
            

          </Tabs>
          
          </Toolbar>
          {/* <input id="toggle" class="toggle" type="checkbox"></input> */}
         </AppBar>
         
        
    </div>
  )
}

export default Header
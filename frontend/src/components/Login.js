import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import MuiBar from './MuiBar';
import App from '../App';
import aero from './aero.png'; 


import { useDispatch } from 'react-redux';
import { logIn } from './Redux Store';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Aa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit =async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      const formData = {
        email: data.get('email'),
        password: data.get('password'),
      };
      const response = await axios.post('http://localhost:8080/login',formData);
      if (response.data) {
        console.log(response.data);
        const username = response.data.FName;
        const Role = response.data.Role;
        const isLoggedIn = true;
        const role = Role;
        dispatch(logIn({ role: Role }));
        if (Role) {
          <App Role={Role} />
          navigate('/hello', { state: { username,Role } } );
        }

        navigate('/hello', { state: { username,Role } } );
      }
      else{
        alert("Invalid Credentials");
      }
      
    
  }

  return (
    // <div class="loginpage" style={{ height: '90vh', width: '100vw' }}>
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <br/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <Box
    //       sx={{
    //         marginTop: 0,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    
    <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
      
    <img src={aero} alt="Description" style={{ position: 'absolute',top:'12%', width: '60%', height: '60vh',objectFit:'cover' }} />
    <Box sx={{ position: 'absolute', right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', width: '45%', margin: '0 0', mr: -8 }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '50%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
        </Box>
      // </Box>
      //  <Copyright sx={{ mt: 8, mb: 4 }} />
      //</Container>
   // </ThemeProvider>
    //</div> }
  );
}
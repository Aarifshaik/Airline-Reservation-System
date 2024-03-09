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
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MuiTelInput } from 'mui-tel-input'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
export default function SignUp() {
    const [Role, setRole] = React.useState(null);
    const [Phone, setPhone] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [DOB, setDOB] = React.useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePhoneChange = (newValue) => {
    setPhone(newValue)
  }

  const getRoleName = (role) => {
    switch(role) {
      case 10:
        return "Customer";
      case 20:
        return "Admin";
      default:
        return "";
    }
  }

  
  const handleDateChange = (newValue) => {
    if (newValue) {
      const dob = new window.Date(newValue);
      const formattedDOB = dob.toLocaleDateString('en-GB');
        
      const today = new window.Date();
      const eighteenYearsAgo = new window.Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      if (parseInt(dob.getFullYear()) > parseInt(eighteenYearsAgo.getFullYear())) {
        alert('You must be at least 18 years old.');
        return;
      }
      setDOB(formattedDOB);
    } else {
      console.error('Invalid date:', newValue);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const Rolename = getRoleName(Role);
  
  const FName = data.get("FName");
  const LName = data.get("LName");
  const Country = data.get("Country");
  const DOBValue = DOB; // Changed from DOB to DOBValue
  const PhoneValue = Phone; // Changed from Phone to PhoneValue
  const RoleValue = Rolename;
  const email = data.get('email');
  const password = data.get('password');


  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  
  if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    return;
  }
  if (!FName || !LName || !Country || !PhoneValue || !RoleValue || !email || !password) {
    alert('Please fill all fields Correctly.');
    return;
  }
  if(!DOBValue){
    alert('You must be at least 18 years old.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

 

    console.log({
        FName:FName,
        LName:LName,
        Country:Country,
        DOB:DOB,
        Role:Rolename,
        Phone:Phone,
        email: email,
        password: password,
    });
  axios.post('http://localhost:8080/register',{
    FName:FName,
    LName:LName,
    Country:Country,
    DOB:DOB,
    Role:Rolename,
    Phone:Phone,
    email: email,
    password: password,
  }).then((response)=>{
  console.log(response);
  setOpen(true);
  }).catch((error)=>{
    if (error.response && error.response.status === 400) {
      alert('A user with this email already exists');
    }
  });

  
};

const action = (
  <React.Fragment>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
      autoHideDuration={3000}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

  return (
    <div class="signuppage" style={{ height: '90vh', width: '100vw' }}>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br/>
        
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FName"
                  required
                  fullWidth
                  id="Fname"
                  label="Fisrt Name"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="LName"
                  required
                  fullWidth
                  id="Lname"
                  label="Last Name"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="DOB"
                     
                    value={Date}
                    onChange={handleDateChange}
                    // onBlur={handleAge}
                    sx={{width:'100%'}}
                    onKeyDown={handleKeyPress}/>
                </DemoContainer>
              </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Country"
                  required
                  fullWidth
                  id="Country"
                  label="Country"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Role}
                    label="Role"
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                >
                    <MenuItem value={10}>Customer</MenuItem>
                    <MenuItem value={20}>Admin</MenuItem>
                    {/* <MenuItem value={30}>Visitor</MenuItem> */}
                    {/* <MenuItem value={40}>Admin</MenuItem> */}
                </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={20}>
                <MuiTelInput 
                  required
                  defaultCountry="US"
                  value={Phone}
                  onChange={handlePhoneChange} 
                  sx={{width:'100%'}}
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={handleEmailChange}
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Signed Up Successfully!"
            action={action}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}
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
import { useState } from 'react';


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
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState(null);


  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  
  const handleDateChange = (newValue) => {
    if (newValue) {
      const dob = new window.Date(newValue);
      const formattedDOB = dob.toLocaleDateString('en-GB');
      setSelectedDate(formattedDOB);
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
  
  const fid = data.get("fid");
  const model = data.get("model");
  const Airline = data.get("Airline");
  const dest = data.get("dest"); // Changed from DOB to DOBValue
  const dept = selectedDate; // Changed from Phone to PhoneValue
  const captain = data.get("captain");
  const occupancy = data.get('occupancy');
 

    console.log({
        fid: fid,
    model:model,
    Airline:Airline,
    dest:dest,
    dept:dept,
    captain:captain,
    occupancy:occupancy,
    });
  axios.post('http://localhost:8080/flightregister',{
    fid: fid,
    model:model,
    Airline:Airline,
    dest:dest,
    dept:dept,
    captain:captain,
    occupancy:occupancy,
  }).then((response)=>{
  console.log(response);
  setOpen(true);
  }).catch((error)=>{
    if (error.response && error.response.status === 400) {
      alert('A Flight with this ID already exists');
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
            Add Flight
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fid"
                  required
                  fullWidth
                  id="fid"
                  label="Flight ID"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="model"
                  required
                  fullWidth
                  id="model"
                  label="Flight Model"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Airline"
                  required
                  fullWidth
                  id="Airline"
                  label="Airline"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="dest"
                  required
                  fullWidth
                  id="dest"
                  label="Destination"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="DOB"
                     
                    value={selectedDate}
                    onChange={handleDateChange}
                    sx={{width:'100%'}}
                    onKeyDown={handleKeyPress}/>
                </DemoContainer>
              </LocalizationProvider>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="captain"
                  required
                  fullWidth
                  id="captain"
                  label="Captain"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="occupancy"
                  required
                  fullWidth
                  id="occupancy"
                  label="Occupancy"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Flight
            </Button>
            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Added Up Successfully!"
            action={action}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
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
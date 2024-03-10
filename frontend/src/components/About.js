import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

  return (
    <div class="loginpage" style={{ 
        height: '110vh', 
        width: '100vw', 
      }}>
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <br/>
        <br/>
        <br/>
        <br/>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            About
          </Typography>
          <Box>
            <Typography component="h1" variant="h6">
            Welcome to A²erohive, your one-stop solution for hassle-free travel bookings and unparalleled customer service. At A²erohive, we are committed to revolutionizing the way you experience air travel.
            </Typography>
            <br/>
            <center><Typography component="h1" variant="h5">
            Our Approach
            </Typography>
            </center>
            <Typography component="h1" variant="h6">
            Founded with a passion for simplifying the complexities of flight reservations, our team brings together years of expertise in both technology and the aviation industry. We understand the challenges travelers face, from navigating through countless options to securing the best deals, and we're here to streamline that process for you.</Typography>
            <br/>
    <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: 'transparent' }}
        >
            <Typography>Mission:</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Our mission is simple: to provide a seamless and intuitive platform that empowers travelers to book flights with confidence and ease. Whether you're planning a spontaneous getaway or a meticulously planned business trip, we've got you covered.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'transparent' }}
        >
            <Typography>What Sets us apart:</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            What sets A²erohive apart is our dedication to customer satisfaction. We prioritize your needs every step of the way, ensuring that your journey begins long before you board the plane. From our user-friendly interface to our knowledgeable support team, we strive to exceed your expectations at every touchpoint.
            </Typography>
        </AccordionDetails>
    </Accordion>

    <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ backgroundColor: 'transparent' }}
        >
            <Typography>Eco-Friendly:</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            In addition to simplifying flight bookings, we are committed to sustainability and reducing our environmental footprint. Through initiatives like carbon offset programs and partnerships with eco-conscious airlines, we aim to make travel more responsible and environmentally friendly.
            </Typography>
        </AccordionDetails>
    </Accordion>

      
      
            <br/>
            <Typography component="h5" variant="h6">
            Join us on this journey as we redefine the way you fly. Experience the convenience, reliability, and personalized service that only Airline Reservation System can offer. Your adventure starts here.
            </Typography>
            <br/>
            <Typography align='center' component="h5" variant="h6">
            Thank you for choosing A²erohive.
            </Typography>


          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}
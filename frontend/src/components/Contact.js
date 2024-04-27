import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1">
            Have questions or feedback? Get in touch with us!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUsPage;

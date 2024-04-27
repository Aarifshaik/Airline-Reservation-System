import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import emirate from './emirate.png'; 
import airindia from './airindia.png'; 
import luft from './luft.png'; 

const InfoPage = () => {
  // Sample data for airlines including logos
  const airlines = [
    { name: 'Emirates', logo: emirate , info: 'Emirates is one of the largest airlines in the world, based in Dubai, United Arab Emirates.' },
    { name: 'Air India', logo: airindia , info: 'Air India is the flag carrier airline of India, headquartered in New Delhi.' },
    { name: 'Lufthansa', logo: luft, info: 'Lufthansa is the largest airline in Germany and one of the largest in Europe, based in Cologne.' },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Airlines Information
      </Typography>
      <List>
        {airlines.map((airline, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
            <Avatar alt={airline.name} src={airline.logo} sx={{ width: 64, height: 64 }}> {/* Adjust width and height as needed */}
                {/* You can also add a fallback text or icon here if the logo fails to load */}
            </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={airline.name}
              secondary={airline.info}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default InfoPage;

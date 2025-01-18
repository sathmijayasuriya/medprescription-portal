import React from 'react'
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import user1 from '../Assets/user1.webp';
import user6 from '../Assets/user6.webp';
import user5 from '../Assets/user6.png';

export default function About() {
    const leadershipData = [
        {
          name: 'Asiru Rathnayaka',
          title: 'Pharmacy Manager',
          image: user1,
          description:'Oversees daily pharmacy operations, manages team members, and ensures compliance with healthcare regulations and policies. Ensures smooth prescription processing and efficient customer service.'
        },
        {
          name: 'k.t thrimanne',
          title: 'Pharmacist',
          image: user6,
          description: ' Responsible for reviewing prescriptions, ensuring medication accuracy, and advising patients on proper medication usage. They play a key role in confirming the safety and effectiveness of the prescribed medications.'
        },
        {
          name: 'N.I Perera',
          title: 'Pharmacy Technician',
          image: user5,
          description: 'Assists pharmacists by preparing and dispensing medications, managing inventory, and maintaining prescription records. They support pharmacists in day-to-day tasks and customer service.'
        },
        {
          name: 'S.S /jayasuriya',
          title: 'Customer Service Representative',
          image: user5,
          description: 'Handles communication with users, answers queries about prescriptions, medications, and delivery options. Provides support to users in managing their prescription orders and quotations.'
        }
      ];
      
  return (
    <>
 <Box className="site-section bg-light" sx={{ py: 8 }}>
      <Container>
        <Grid container justifyContent="center" mb={5}>
          <Grid item xs={12} md={7} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Our <strong className="text-primary">Team</strong>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {leadershipData.map((person, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '90%', 
                    overflow: 'hidden' 
                  }}
                >
                <CardMedia
                  component="img"
                  image={person.image}
                  alt={person.name}
                  sx={{ height: 400, objectFit: 'cover' }}
                />
                                </Box>

                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h6">{person.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{person.title}</Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {person.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  )
}

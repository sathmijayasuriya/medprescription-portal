import React from 'react'
import { Container, Grid, Box, Typography, Link, IconButton } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MedicationIcon from "@mui/icons-material/Medication";
import ScienceIcon from "@mui/icons-material/Science";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Features() {
    const features = [
        {
          icon: <LocalShippingIcon fontSize="large" color="primary" />,
          title: "Free Delivery",
          description: "Enjoy free delivery on all prescription orders, providing users with a hassle-free experience and added convenience.",
          link: "#",
        },
        {
          icon: <MedicationIcon fontSize="large" color="primary" />,
          title: "New Medicine Everyday",
          description: "Stay updated with new medications added daily, giving users access to the latest pharmaceutical products.",
          link: "#",
        },
        {
          icon: <ScienceIcon fontSize="large" color="primary" />,
          title: "Medicines Guaranteed",
          description: "Guarantee the authenticity and quality of every medicine purchased, ensuring user trust and satisfaction with their prescriptions.",
          link: "#",
        },
      ];
  return (
    <>
 <Box id="features" py={10} >
      <Container>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box  textAlign="center" 
                    p={3} border={1.9} 
                    borderColor="grey.200" 
                    borderRadius={2}
                    sx={{
                      transition: "background-color 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(rgb(250, 237, 242) 10%,rgb(255, 255, 255) 90%)",
                        transform: "scale(1.05)", // Slight zoom effect
                      },
                    }}
                    >
                <Box mb={2}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  <Link href={feature.link} underline="none" color="inherit">
                    {feature.title}
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {feature.description}
                </Typography>
                <Link href={feature.link} display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body2" mr={1}>
                    Learn more
                  </Typography>
                  <IconButton size="small" color="primary">
                   <NavigateNextIcon/>
                  </IconButton>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  )
}

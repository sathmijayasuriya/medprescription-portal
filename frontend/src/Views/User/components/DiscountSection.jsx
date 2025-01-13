import React from 'react'
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import tabletsImage from '../../../Assets/tablets.jpg'

export default function DiscountSection() {
  return (
    <>
  <Box
      sx={{
        // backgroundImage: `url(${tabletsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "black",
        py: 5,
        webkitBackdropFilter:"blur(50px)",
        backgroundColor: "rgba(228, 158, 196, 0.22)",
        backdropFilter: "blur(10px)", // Blur effect
        boxShadow: "0 4px 30px rgba(34, 33, 33, 0.03)", // Optional: Adds a subtle shadow for depth

        

      }}
    >
      <Container>
        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={10} md={7}>
            <Typography variant="h4" gutterBottom>
              Sign up for discount up to 55% OFF
            </Typography>
            <Typography variant="body1" paragraph>
            Register today and enjoy exclusive discounts of up to 55% on your first prescription order, making healthcare more affordable.            </Typography>
            <Button variant="outlined" color="inherit" href="#">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}

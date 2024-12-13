import React from 'react'
import { Box, Typography, Button, Container } from "@mui/material";
import landing from "../Assets/landing.jpg";

export default function Landing() {
  return (
    <>
<Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width:"100wh",
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor:"red",
        position: "relative", 
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.4 )",
          backdropFilter: "blur(10px)", // Blur effect
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow for depth
          padding: "100px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#000", mb: 2 ,padding:2}}
        >
          New Medicine <span style={{ color: "#D66C95" }}>Everyday</span>
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
          It's important to address your Health conditions during medication for the best substance.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Services
        </Button>
      </Container>
    </Box>

    </>
  )
}

import React from "react";
import { Box, Container, Grid, Typography, Avatar, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../../../Assets/user1.webp";
import user2 from "../../../Assets/user2.webp";
import user3 from "../../../Assets/user3.png";
import user4 from "../../../Assets/user4.jpg";
import { borderColor, borderRadius, margin, padding } from "@mui/system";
export default function Feedbacks() {
  const testimonials = [
    {
      image: user4,
      text: "I’ve been using MedPrescription Portal for months, and it’s been a game-changer. The platform is so easy to use, and I love how quickly I receive quotations from pharmacies. The free delivery option is an added bonus, making it so convenient to get my medications at home.",
      author: "Dewni jayasuriya",
    },
    {
      image: user2,
      text: "As someone who often needs prescriptions, this platform has made my life easier. The process to upload my prescriptions is straightforward, and the pharmacy quotations are always detailed and transparent.",
      author: "Imani caldera",
    },
    {
      image: user3,
      text: "MedPrescription Portal has been incredible. The platform provides real-time updates on my prescription statuses, and the ability to manage quotations from different pharmacies is fantastic. Customer support is very responsive, and I love the seamless experience.",
      author: "Ayu wirasinghe",
    },
    {
      image: user1,
      text: "I’ve never had such an efficient and affordable experience with prescription management. The portal allows me to receive competitive quotes from various pharmacies, and I appreciate how the pharmacies always deliver on time.",
      author: "Andrew perera",
    },
  ];
  const reasons = [
    "Join a community of satisfied users who rely on our platform for fast, secure, and reliable prescription services.",
    "Our easy-to-use interface ensures a smooth experience for uploading prescriptions, receiving quotes, and managing orders.",
    "We offer competitive pricing, ensuring high-quality medications and reliable services at the best prices.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Box sx={{ py: 1 }}>
        <Container>
          <Grid container spacing={5} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Box mb={3}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Happy <strong style={{ color: "#D66C95" }}>Customers</strong>
                </Typography>
              </Box>
              <Box
                style={{
                  borderColor: "black",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
<Slider sx={{ mt: "20px" }} {...settings}>
{testimonials.map((testimonial, index) => (
                    <Box key={index} textAlign="center" p={2} > 
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.author}
                        sx={{ width: 80, height: 70, mx: "auto", mb: 2 }}
                      />
                      <Typography variant="body1" paragraph>
                        {testimonial.text}
                      </Typography>
                      <Typography  variant="subtitle1" fontWeight="bold" gutterBottom>
                        &mdash; {testimonial.author}
                      </Typography>
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box mb={3}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Why <strong style={{ color: "#D66C95" }}>Us</strong>
                </Typography>
              </Box>
              <Stack spacing={3}>
                {reasons.map((reason, index) => (
                  <Box key={index} display="flex" alignItems="flex-start">
                    <Box
                     sx={{
                        width: 40, // Same width and height for uniform circle size
                        height: 20,
                        // borderRadius: "50%", // Ensures the circle shape
                        backgroundColor: "#D66C95",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        mr: 2,
                      }}
                    
                    >
                      {index + 1}
                    </Box>
                    <Typography>{reason}</Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../Assets/headerImage.png";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "white", py: 5 ,justifyContent:"center"}}>
        <Container>
          <Grid container spacing={7}>
            {/* About Section */}
            <Grid item xs={12} md={6} lg={4}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  About <strong style={{ color: "#D66C95" }}>GUARDIAN</strong>
                </Typography>
                <Typography>
                MedPrescription Portal simplifies prescription management by connecting users and pharmacies.
                 With secure uploads, quotations, and delivery, we ensure fast, reliable, and affordable healthcare solutions for everyone.
                </Typography>
              </Box>
            </Grid>

            {/* Navigation Section */}
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h5" gutterBottom>
                Navigation
              </Typography>
              <List>
                {[
                  "Supplements",
                  "Vitamins",
                  "Diet & Nutrition",
                  "Tea & Coffee",
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        "&:hover": { color: "#1976d2" },
                      }}
                    >
                      {item}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Contact Info Section */}
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h5" gutterBottom>
                Contact Info
              </Typography>
              <List>
                <ListItem disableGutters>
                  <Typography>
                    Colombo 05
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <Link
                    href="tel://070529xxx"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    +2 392 3929 210
                  </Link>
                </ListItem>
                <ListItem disableGutters>
                  <Link
                    href="mailto:emailaddress@domain.com"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { color: "#1976d2" },
                    }}
                  >
                    emailaddress@domain.com
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Toolbar
        sx={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          pB: 5,
        }}
      >
        <Box
          component={Link}
          to={"/"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <img alt="Logo" src={headerImage} height={20} />
        </Box>
      </Toolbar>
    </>
  );
};

export default Footer;

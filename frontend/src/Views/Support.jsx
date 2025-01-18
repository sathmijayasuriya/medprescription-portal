import React from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import OurPharmacies from "./components/OurPharmacies";
export default function Support() {
  return (
    <>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Container sx={{mb:5}}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Get In Touch
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <form action="#" method="post">
                <Box p={3} border={0} borderRadius={2} sx={{ width: "50%" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Subject"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
        <OurPharmacies />
      </Box>
    </>
  );
}

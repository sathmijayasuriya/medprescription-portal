import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

export default function OurPharmacies() {
  return (
    <>
      <Box>
        <Container >
          <Typography sx={{mb:1}} variant="h5" gutterBottom>
            Our Branches
          </Typography>
          <Grid sx={{m:0.5}} container spacing={3}>
            <Grid item xs={12} md={4}>
            <Card sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
            <CardContent>
                  <Typography variant="h6">colombo</Typography>
                  <Typography variant="body2">
                    203 Nawam mawatha colombo 03
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
            <CardContent>
                  <Typography variant="h6">Maharagama</Typography>
                  <Typography variant="body2">
                  81/2 High Level Rd, Maharagama 1028
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card sx={{ border: '1px solid #ccc', borderRadius: 2 }}>
            <CardContent>
                  <Typography variant="h6">Kurunagala</Typography>
                  <Typography variant="body2">
                  8 Dambulla Rd, Kurunegala
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

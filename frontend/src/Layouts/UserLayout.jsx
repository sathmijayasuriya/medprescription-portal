import React from 'react'
import { Box, CssBaseline, Grid2 } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from '../components/Footers/Footer';
import HeaderUser from '../components/Headers/HeaderUser';
export default function UserLayout() {
  return (
    <>
 <CssBaseline />
      <HeaderUser />
      <Grid2
        // container
        direction="row"
        justifyContent="center"
        // alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          bgcolor: "background.default",
        }}
      >
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Outlet />
          </Box>
      <Footer/>
      </Grid2>
    </>
  )
}

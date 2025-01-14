import React from 'react'
import { Stack, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import headerImage from '../../Assets/headerImage.png';
import AccountMenu from "../Menus/AccountMenu";
import AccountMenuPharmacy from '../Menus/AccountPharmacyMenus';

export default function HeaderPharmacist() {
  return (
    <>
  <AppBar
        position="sticky"
        sx={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          boxShadow: 0,
          bgcolor: "background.default",
        }}
      >
        <Toolbar>
          <Box component={Link} to={"/"}>
            <img alt="Logo" src={headerImage} height={20} />
          </Box>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

          <Stack direction={"row"} justifyContent="center" alignItems="center">
            <AccountMenuPharmacy />
            {/* <AddPrescription/> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

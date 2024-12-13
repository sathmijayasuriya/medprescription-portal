import React from "react";
import { Box, Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import headerImage from "../../Assets/images/headerImage.png";
import AddPrescription from "../../Views/User/components/AddPrescription";

export default function HeaderAuth() {
  const location = useLocation();
  const isInSignIn = location.pathname.includes("sign-in");
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
          <Box component={Link} to={"/"} paddingX={2}>
            <img alt="Logo" src={headerImage} height={32} />
          </Box>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            columnGap={2}
          >
            <Button
              variant="contained"
              component={Link}
              to={isInSignIn ? "/auth/sign-up" : "/auth/sign-in"}
            >
              {isInSignIn ? "Sign Up" : "Sign In"}
            </Button>
            <AddPrescription />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

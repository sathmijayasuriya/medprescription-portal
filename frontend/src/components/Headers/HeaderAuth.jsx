import React, { useEffect } from "react";
import { Box, Stack, AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import headerImage from "../../Assets/headerImage.png";
import { useNavigate } from "react-router-dom";

export default function HeaderAuth() {
  const location = useLocation();
  const isInSignIn = location.pathname.includes("sign-in");
  const navigate = useNavigate();
  const handleClickOpen = () => {
    navigate("/auth/sign-in");
  };

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
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between", // Ensures the left and right sections are spaced correctly
            alignItems: "center", // Vertically aligns the content
          }}
        >
          {/* Logo on the left */}
            <Box component={Link} to={"/"} paddingX={2}>
              <img alt="Logo" src={headerImage} height={20} />
            </Box>

          {/* Center Links */}
          <Stack
            direction="row"
            spacing={4}  // Adjust spacing between links
            sx={{
              flexGrow: 1,  // Ensures the stack takes up remaining space
              justifyContent: "center", // Center the links
            }}
          >
              <Button
              variant="text"
              component={Link}
              to="/landing"
              sx={{ color: "text.primary" }}
            >
              Home
            </Button>
            <Button
              variant="text"
              component={Link}
              to="/support"
              sx={{ color: "text.primary" }}
            >
              Support
            </Button>
            <Button
              variant="text"
              component={Link}
              to="/shop-by-categories"
              sx={{ color: "text.primary" }}
            >
              Shop by Categories
            </Button>
            <Button
              variant="text"
              component={Link}
              to="/about"
              sx={{ color: "text.primary" }}
            >
              About Us
            </Button>
          </Stack>

          {/* Sign In / Sign Up and Add Prescription Buttons on the right */}
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            columnGap={2}
          >
            <Button
              variant="contained"
              component={Link}
              to={isInSignIn ? "/auth/register" : "/auth/sign-in"}
            >
              {isInSignIn ? "Sign Up" : "Sign In"}
            </Button>
            <Button
              onClick={handleClickOpen}
              variant="outlined"
              component={Link}
            >
              Add prescription
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

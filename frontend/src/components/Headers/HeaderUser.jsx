import React from "react";
import { Stack, AppBar, Toolbar, Typography, Box ,Button} from "@mui/material";
import { Link} from "react-router-dom";
import headerImage from '../../Assets/headerImage.png';
import AccountMenu from "../Menus/AccountMenu";
import AddPrescription from "../../Views/User/components/AddPrescription";

export default function HeaderUser() {
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
        <Toolbar  sx={{
            display: "flex",
            justifyContent: "space-between", // Ensures the left and right sections are spaced correctly
            alignItems: "center", // Vertically aligns the content
          }}>
          <Box component={Link} to={"/landing"}  paddingX={2}>
            <img alt="Logo" src={headerImage} height={20} />
          </Box>
          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
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
              to="/about-us"
              sx={{ color: "text.primary" }}
            >
              About Us
            </Button>
          </Stack>
          <Stack direction={"row"} justifyContent="center" alignItems="center" columnGap={2}
          >
            
            <AccountMenu />
            <AddPrescription/>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

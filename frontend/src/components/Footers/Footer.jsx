import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import headerImage from '../../Assets/headerImage.png';

const Footer = () => {
  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "center", 
          display: "flex", 
          width: "100%",
          paddingTop: 2,
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

import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#D66C95",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#f9f9f9",
        },
      },
    },
  },
  // Custom global styles for Slider dots
  overrides: {
    MuiCssBaseline: {
      styleOverrides: {
        ".slick-dots": {
          marginTop: "20px", // Add margin to dots
        },
      },
    },
  },
});

export default Theme;

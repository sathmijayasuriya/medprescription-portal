import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xsm: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
    // MuiPickersDay: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "transparent", // Default background
    //     },
    //     today: {
    //       border: `1px solid #D66C95`, // Highlight today's date
    //     },
    //     selected: {
    //       backgroundColor: "#D66C95",
    //       color: "#fff", // Ensure text is visible
    //       "&:hover": {
    //         backgroundColor: "#B35479", // Darker hover color
    //       },
    //     },
    //   },
    // },
  },
});

export default Theme;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Router from "./Routes/routes";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <Router />
        </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

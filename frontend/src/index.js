import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./Redux/store";
import privateRouter from "./Routes/routes";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <privateRouter />
    </Provider> */}
          <RouterProvider router={privateRouter} />

  </React.StrictMode>
);

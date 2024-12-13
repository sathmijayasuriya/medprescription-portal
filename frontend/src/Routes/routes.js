import React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../Layouts/UserLayout";
import Landing from "../Views/User/Landing";
import Myprescrptions from "../Views/User/Myprescrptions";
import Login from "../Views/Auth/Login";

const privateRouter = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "/",
          element: <Landing/>,
        },
        {
          path: "/prescriptions/my-prescriptions",
          element: <Myprescrptions />,
        },
        {
          path: "/auth/sign-in",
          element: <Login />,
        },
        // {
        //   path: "/auth/sign-up/",
        //   element: <Register />,
        // },
        // {
        //   path: "*",
        //   element: <Navigate to="/" replace />,
        // },
      ],
    },
  ]);

  export default privateRouter;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../Redux/features/auth/authSlice";

import UserLayout from "../Layouts/UserLayout";
import Myprescrptions from "../Views/User/Myprescrptions";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import PharmacistLayout from "../Layouts/PharmacistLayout";
import Dashboard from './../Views/Pharmacy/Dashboard';
import MainLayout from "../Layouts/MainLayout";
import UserDashboard from "../Views/User/UserDashboard";
import Landing from "../Views/Landing";

const privateRouter = createBrowserRouter([  //all users
    {
      path: "/",
      element: <MainLayout/>,    //parent component
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/auth/sign-in",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
  ]);
const authRouter = createBrowserRouter([  // login users
  {
    path: "/user",
    element: <UserLayout />,
    children: [
        {
            path: "/user",
            element: <UserDashboard/>,
          },
      {
        path: "/user/my-prescriptions",
        element: <Myprescrptions />,
      },
    ],
  },
  {
    path: "/pharmacy",
    element: <PharmacistLayout />,
    children: [
      {
        path: "/pharmacy",
        element: <Dashboard />,
      },
    ],
  },
]);
const Router = () => {
    const { user, isError, isSuccess } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    // Handle error and success messages
    useEffect(() => {
      if (isError) {
        toast.error("Oops! Login failed, try again");
      }

      dispatch(reset());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError]);
  
    useEffect(() => {
      if (isSuccess) {
        toast.success("Login success");
      }
  
      dispatch(reset());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);
  
    return user ? (
      // If the user is authenticated, use the authrouter
      <RouterProvider router={authRouter} />
    ) : (
      // If the user is not authenticated, use the private router
      <RouterProvider router={privateRouter} />
    );
  };

  export default Router;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter ,Navigate} from "react-router-dom";
import { toast } from "react-toastify";
import { reset } from "../Redux/features/auth/authSlice";

import UserLayout from "../Layouts/UserLayout";
import Myprescrptions from "../Views/User/Myprescrptions";
import Login from "../Views/Auth/Login";
import Register from "../Views/Auth/Register";
import PharmacistLayout from "../Layouts/PharmacistLayout";
import Dashboard from "../Views/Pharmacy/Dashboard";
import AuthLayout from "../Layouts/AuthLayout";
import UserDashboard from "../Views/User/UserDashboard";
import Landing from "../Views/Landing";
import RegisterPharmacist from "../Views/Auth/RegisterPharmacist";

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
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
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);


const userRouter = createBrowserRouter([  // logged-in users
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <UserDashboard />,
      },
      {
        path: "/user",
        element: <UserDashboard />,
      },
      {
        path: "/user/my-prescriptions",
        element: <Myprescrptions />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const pharmacyRouter = createBrowserRouter([  // logged-in users
  {
    path: "/",
    element: <PharmacistLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/pharmacy",
        element: <Dashboard />,
      },
      {
        path: "/pharmacy/register",
        element: <RegisterPharmacist />,  // Corrected this to use uppercase
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const Router = () => {
  const { user, isError, isSuccess,role } = useSelector((state) => state.auth);
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
    role === "User" ?(
      <RouterProvider router={userRouter} />
    ) : (
      <RouterProvider router={pharmacyRouter} />
    )
  ) : (
    <RouterProvider router={authRouter} />
  );
};

export default Router;
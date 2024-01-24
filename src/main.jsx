import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./AuthPage/Login.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import SignUp from "./AuthPage/SignUp.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import ForgotPw from "./AuthPage/ForgotPw.jsx";
import HPBlog from "./HomePage/HomePageComponents/HPBlog.jsx";
import HPForum from "./HomePage/HomePageComponents/HPForum.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/forgotpw",
    element: <ForgotPw />,
  },
  {
    path: "/home/blog",
    element: <HPBlog />,
  },
  {
    path: "/home/forum",
    element: <HPForum />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./AuthPage/Login.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import SignUp from "./AuthPage/SignUp.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import ForgotPw from "./AuthPage/ForgotPw.jsx";
import HPBlog from "./HomePage/HPBlog.jsx";
import HPForum from "./HomePage/HPForum.jsx";
import loaders from "./loaders.js";

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
    loader: loaders.Homeloader,
    children: [
      {
        path: "blog",
        element: <HPBlog />,
      },
      {
        path: "forum",
        element: <HPForum />,
      },
    ],
  },
  {
    path: "/forgotpw",
    element: <ForgotPw />,
  },
]);

export default router;

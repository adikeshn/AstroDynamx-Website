import { createBrowserRouter } from "react-router-dom";

import Login from "./routes/Auth/Login.jsx";
import LandingPage from "./routes/Landing/LandingPage.jsx";
import SignUp from "./routes/Auth/SignUp.jsx";
import HomePage from "./routes/Home/HomePage.jsx";
import ForgotPw from "./routes/Auth/ForgotPw.jsx";
import HPBlog from "./routes/HPBlog/HPBlog.jsx";
import HPForum from "./routes/HPForum/HPForum.jsx";

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

export default router;

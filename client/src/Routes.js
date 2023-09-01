import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/Landing/Landingpage";
import Home from "./components/Home/Homepage";
import Login from "./components/Login/Loginpage";
import Signup from "./components/Signup/Signup";
import Chatbot from "./components/Chatbot/Chatbot";
import Speech from "./components/Speech/Speech";
import Translation from "./components/Translation/Translation";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
  {
    path: "/speech",
    element: <Speech />,
  },
  {
    path: "/translation",
    element: <Translation />,
  },
]);
export default router;

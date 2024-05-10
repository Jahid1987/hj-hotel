import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Bookings from "../pages/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);

export default router;

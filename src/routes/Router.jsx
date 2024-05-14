import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Bookings from "../pages/Bookings";
import Featured from "../pages/Featured";
import PrivateRoute from "./PrivateRouter";
import Room from "../pages/Room";
import Errorpage from "../pages/Errorpage";
import Profile from "../pages/auth/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
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
        path: "/room/:id",
        loader: ({ params }) =>
          fetch(`https://hj-hotel.vercel.app/rooms/${params.id}`),
        element: <Room />,
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/featured",
        element: <Featured />,
      },
    ],
  },
]);

export default router;

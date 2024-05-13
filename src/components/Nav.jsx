import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";

const Nav = () => {
  const { user, signOutUser } = useAuth();

  // user loggin out
  async function handleSignOut() {
    try {
      await signOutUser();
      await axios.post(
        "https://hj-hotel.vercel.app/logout",
        { email: user.email },
        {
          withCredentials: true,
        }
      );
      toast.success("Successfully Log out");
    } catch (error) {
      toast.error("Something wrong.");
    }
  }
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 w-52 z-50"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold">
          HJ Hotel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <div>
            <Link className="font-light underline ml-4" to="/register">
              Register
            </Link>
            <Link className="font-light underline ml-4" to="/login">
              Login
            </Link>
          </div>
        )}
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/bookings">My Bookings</Link>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
              <li>
                <a>Profile Of {user.displayName}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;

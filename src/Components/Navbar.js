import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100 text-[18px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4 ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="border border-richblack-700 rounded-[8px] px-[12px] py-[8px] bg-richblack-800 text-richblack-100">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/Signup">
            <button className="border border-richblack-700 rounded-[8px] px-[12px] py-[8px] bg-richblack-800 text-richblack-100">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="border border-richblack-700 rounded-[8px] px-[12px] py-[8px] bg-richblack-800 text-richblack-100"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out!");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/Dashboard">
            <button className="border border-richblack-700 rounded-[8px] px-[12px] py-[8px] bg-richblack-800 text-richblack-100">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

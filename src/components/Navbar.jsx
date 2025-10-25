import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import MyContainer from "./MyContainer";
import logo from "../assets/paw.jpg";
// import toast from "react-hot-toast";

import { toast, Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Logout failed!");
      });
  };


  return (
    <div className="bg-slate-100 py-2 border-b border-slate-300">
      <MyContainer className="flex items-center justify-between">

        <figure className="flex items-center gap-2">

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="w-12 h-12 rounded-full" />
            <h1 className="text-3xl font-bold text-blue-400">WarmPaws</h1>
          </Link>

        </figure>


        <ul className="flex items-center gap-6 ml-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-gray-700"
              }
            >
              Services
            </NavLink>
          </li>
          {/* {user && (
            <li>
              <NavLink
                to="/myProfile"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-semibold" : "text-gray-700"
                }
              >
                My Profile
              </NavLink>
            </li>
          )} */}

          <li>
            <NavLink
              to="/myProfile"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-gray-700"
              }
            >
              My Profile
            </NavLink>
          </li>

        </ul>


        <div className="flex items-center gap-4">
          {!user ? (
            <Link
              to="/login"
              className="bg-blue-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-3 relative">
              {/* Avatar */}
              {user.photoURL ? (
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  />
                  <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                    {user.displayName || "No Name"}
                  </span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold text-sm">
                    {user.email.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const { logout } = useAuth();

  const navClass = ({ isActive }) =>
    `${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-500"
    } font-medium font-semibold bg-amber-100 py-2 px-4 rounded-lg`;

  useEffect(() => {
    if (isAuthenticated) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isAuthenticated]);

  return (
    <nav className="bg-amber-300 shadow flex items-center justify-between px-8 py-4">
      <div className="flex items-center space-x-3 ">
        <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
          CP
        </div>
        <span className="text-xl font-semibold">Customer Portal</span>
      </div>
      <div className="flex items-center space-x-6">
        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </>
        )}
      </div>
      <div className="flex items-center space-x-3">
        {isLoggedIn ? (
          <button
            className="px-4 py-2 rounded bg-red-400 text-white font-medium hover:bg-blue-600"
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login">
              <button className="px-4 py-2 border rounded border-blue-500 text-blue-500 font-medium hover:bg-blue-50">
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600">
                Sign Up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

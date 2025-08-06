import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { authDetails, setAuthDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.loading("Logging out...", {
      duration: 2000,
    });

    setTimeout(() => {
      setAuthDetails({
        isLoggedIn: false,
        username: null,
        token: null,
      });
      sessionStorage.removeItem("token");
      navigate("/login");
    }, 2000);
  };

  return (
    <nav className="bg-amber-300 shadow flex items-center justify-between px-8 py-4">
      {/* Logo & Portal Name */}
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
          CP
        </div>
        <span className="text-xl font-semibold">Customer Portal</span>
      </div>
      {/* Links */}
      <div className="flex items-center space-x-6">
        {authDetails.isLoggedIn ? (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Contact
            </NavLink>
          </>
        )}
      </div>
      {/* Auth Actions (optional demo) */}
      <div className="flex items-center space-x-3">
        {authDetails.isLoggedIn ? (
          <button
            className="px-4 py-2 rounded bg-red-400 text-white font-medium hover:bg-blue-600"
            onClick={handleLogout}
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

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";

function LoginTest() {
  const { login } = useAuth();

  const { isAuthenticated, logout } = useContext(AuthContext);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setLoginDetails({
      username: "krunaljumde24@gmail.com",
      password: "pass",
    });
    login(loginDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isAuthenticated ? (
        <div>
          <div className="bg-green-200 p-8 rounded-lg m-4 ">
            <p className="font-sans text-2xl font-bold">User is Logged-In.</p>
            <button
              className="bg-red-300 p-1 m-y rounded-lg font-semibold"
              onClick={() => {
                setLoginDetails({
                  username: "",
                  password: "",
                });
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          {/* Logo & heading */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl mb-2">
              CP
            </div>
            <h2 className="text-2xl font-bold mb-1">
              Sign In to Customer Portal
            </h2>
            <p className="text-gray-500 text-sm">
              Welcome back! Please login to your account.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
              {error}
            </div>
          )}
          <form className="space-y-4">
            <div>
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="username"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
                value={loginDetails.email}
                onChange={(e) =>
                  setLoginDetails({
                    ...loginDetails,
                    [e.target.name]: [e.target.value],
                  })
                }
                required
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
                value={loginDetails.password}
                onChange={(e) =>
                  setLoginDetails({
                    ...loginDetails,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                placeholder="Your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-gray-600 flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link
                to="/forgot"
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded py-2 font-semibold transition"
              onClick={handleSubmit}
            >
              Test Sign In
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginTest;

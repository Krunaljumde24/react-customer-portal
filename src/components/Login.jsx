import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation example (replace with real auth)
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Simulate login and navigate to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo & heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl mb-2">
            CP
          </div>
          <h2 className="text-2xl font-bold mb-1">Sign In to Customer Portal</h2>
          <p className="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-gray-600 flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot" className="text-blue-500 hover:underline text-sm">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded py-2 font-semibold transition"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-5 text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, extend as needed
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Simulated signup – replace with real signup logic
    setError("");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl mb-2">
            CP
          </div>
          <h2 className="text-2xl font-bold mb-1">Create Your Account</h2>
          <p className="text-gray-500 text-sm">
            Signup to start managing your customers.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              className="block font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={form.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>
          <div>
            <label
              className="block font-medium text-gray-700 mb-1"
              htmlFor="confirm"
            >
              Confirm Password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
              value={form.confirm}
              onChange={handleChange}
              required
              placeholder="Repeat your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded py-2 font-semibold transition"
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-5 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

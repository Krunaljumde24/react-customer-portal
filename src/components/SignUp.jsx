import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  const signup = (obj) => {
    axios
      .post(apiBaseUrl + "/api/auth/signup", obj)
      .then((resp) => {
        toast.success(resp.data.response);
        resetForm();
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.response);
        resetForm();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, extend as needed
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirm
    ) {
      setError("All fields are required.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    let req = {
      firstName: form.firstName,
      lastName: form.lastName,
      emailId: form.email,
      password: form.confirm,
    };
    signup(req);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
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
          <div className="flex flex-row gap-x-2">
            <div className="basis-1/2">
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="fname"
              >
                First Name
              </label>
              <input
                id="fname"
                name="firstName"
                autoComplete="fname"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="First name"
              />
            </div>

            <div className="basis-1/2">
              <label
                className="block font-medium text-gray-700 mb-1"
                htmlFor="lname"
              >
                Last Name
              </label>
              <input
                id="lname"
                name="lastName"
                autoComplete="lname"
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-blue-500"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Last name"
              />
            </div>
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

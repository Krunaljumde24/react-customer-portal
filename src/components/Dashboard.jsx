import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import MessageDialog from "./MessageDialog";

export default function Dashboard() {
  const navigate = useNavigate();

  const { validateSession } = useAuth();
  useEffect(() => {
    validateSession();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-0">
      <MessageDialog />
      <div className="max-w-5xl mx-auto">
        {/* Welcome Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-3xl mb-4">
            CP
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome to Your Customer Dashboard
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            Manage your customers with ease—add new records, update details, or
            search existing customers all from here.
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add New Customer Action */}
          <div
            className="bg-white rounded-lg shadow p-8 flex flex-col items-center hover:bg-blue-50 transition "
            onClick={() => navigate("/customers/add")}
          >
            <div className="bg-blue-100 text-blue-500 p-4 rounded-full mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2">Add New Customer</h2>
            <p className="text-gray-500 text-center text-sm">
              Create a new customer profile and start tracking activity
              instantly.
            </p>
          </div>

          {/* Update Existing Customer */}
          <div
            className="bg-white rounded-lg shadow p-8 flex flex-col items-center hover:bg-yellow-50 transition "
            onClick={() => navigate("/customers/update")}
          >
            <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15.232 5.232l3.536 3.536M16.207 3.793a2.828 2.828 0 114 4L7 21H3v-4L16.207 3.793z" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2">
              Update Existing Customer
            </h2>
            <p className="text-gray-500 text-center text-sm">
              Select and modify customer records securely and quickly.
            </p>
          </div>

          {/* Search Customers */}
          <div
            className="bg-white rounded-lg shadow p-8 flex flex-col items-center hover:bg-green-50 transition "
            onClick={() => navigate("/customers/search")}
          >
            <div className="bg-green-100 text-green-600 p-4 rounded-full mb-3">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h2 className="font-semibold text-lg mb-2">Search Customer</h2>
            <p className="text-gray-500 text-center text-sm">
              Find, filter, and view customer data by name, email, status and
              more.
            </p>
          </div>
        </div>

        {/* [Optional] Recent Activity or Stats */}
        {/* You may add a customers summary table, stats, or recent activity component here */}
      </div>
    </div>
  );
}

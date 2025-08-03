// src/components/SearchFilter.js

import React, { useState } from "react";

export default function SearchFilter({ onSearch }) {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      name: "",
      email: "",
      status: "",
      startDate: "",
      endDate: "",
    });
    onSearch({
      name: "",
      email: "",
      status: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md shadow-md p-4 mb-8 flex flex-wrap items-end gap-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={filters.name}
          onChange={handleChange}
          className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
          placeholder="Search by name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={filters.email}
          onChange={handleChange}
          className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
          placeholder="Search by email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        >
          <option value="">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Premium">Premium</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-blue-500"
        />
      </div>
      <div className="flex space-x-2 mt-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
        >
          Search
        </button>
        <button
          type="button"
          className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

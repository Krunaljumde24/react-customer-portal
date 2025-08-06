// src/components/CustomerList.js

import React from "react";

export default function CustomerList({ customers }) {
  if (!customers || customers.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">No customers found.</div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="bg-white rounded-md shadow p-6 flex flex-col"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white flex items-center justify-center h-12 w-12 rounded-full font-bold text-lg">
              {customer.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {customer.name}
              </h3>
              <p className="text-sm text-gray-500">ID: {customer.customerId}</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-3">{customer.email}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {customer.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-auto bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-600 transition">
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
}

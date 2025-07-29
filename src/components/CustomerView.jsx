import React from "react";

function CustomerView() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-2 text-white">
            <svg width="24" height="24" fill="none">
              <circle cx="12" cy="12" r="10" fill="white" />
              <text x="8" y="17" fontSize="10" fill="black">
                CV
              </text>
            </svg>
          </div>
          <span className="text-xl font-semibold">Customer View</span>
        </div>
        <input
          className="border px-3 py-1 rounded focus:outline-none"
          placeholder="Search customers..."
        />
      </div>
      {/* Top Card */}
      <div className="bg-white rounded shadow mt-6 mx-8 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold">
            SJ
          </div>
          <div>
            <div className="text-xl font-bold">Sarah Johnson</div>
            <div className="text-gray-500 text-xs">Customer ID: CUST-001</div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                Premium
              </span>
              <span className="flex items-center text-yellow-500 text-sm">
                ★ 4.8
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-10 text-center">
          <div>
            <div className="text-2xl font-semibold text-blue-600">$15,420</div>
            <div className="text-gray-500 text-xs">Lifetime Value</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">47</div>
            <div className="text-gray-500 text-xs">Total Orders</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">$328</div>
            <div className="text-gray-500 text-xs">Avg Order Value</div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex space-x-4 mx-8 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-t focus:outline-none">
          Profile
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-t">
          Transactions
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-t">
          Analytics
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-t">
          Timeline
        </button>
      </div>
      {/* Main Content */}
      <div className="flex justify-between mx-8 bg-white rounded shadow p-6">
        {/* Contact Info */}
        <div className="w-1/3 pr-4">
          <div className="font-semibold mb-2">Contact Information</div>
          <div className="text-sm">
            <div className="mb-2">
              <span className="text-gray-500">Email</span>
              <br />
              sarah.johnson@email.com
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Phone</span>
              <br />
              +1 (555) 123-4567
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Address</span>
              <br />
              123 Main St, San Francisco, CA 94105
            </div>
            <div className="mb-4">
              <span className="text-gray-500">Customer Since</span>
              <br />
              15/3/2022
            </div>
            <button className="border border-gray-300 px-3 py-1 rounded">
              Edit Contact Info
            </button>
          </div>
        </div>
        {/* Account Details */}
        <div className="w-1/3 px-4 border-l border-r border-gray-200">
          <div className="font-semibold mb-2">Account Details</div>
          <div className="text-sm">
            <div className="mb-2">
              <span className="text-gray-500">Account Status</span>
              <br />
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                Premium
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Loyalty Tier</span>
              <br />
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">
                Gold Member
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Communication Preferences</span>
              <br />
              Email & SMS
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Language</span>
              <br />
              English
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Timezone</span>
              <br />
              PST (UTC-8)
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Last Login</span>
              <br />
              2024-01-20 14:30
            </div>
          </div>
        </div>
        {/* Preferences & Social */}
        <div className="w-1/3 pl-4">
          <div className="font-semibold mb-2">Preferences & Social</div>
          <div className="text-sm">
            <div className="mb-2">
              <span className="text-gray-500">Shopping Interests</span>
              <br />
              <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs mr-1">
                Electronics
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs mr-1">
                Home & Garden
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                Books
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Satisfaction Score</span>
              <br />
              <span className="flex items-center text-yellow-500">★★★★☆</span>
              4.8/5
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Referrals Made</span>
              <br />3 customers
            </div>
            <div className="mb-2">
              <span className="text-gray-500">Social Media</span>
              <br />
              Twitter: @sarahjohnson <br />
              LinkedIn: sarah-johnson-sf
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex justify-between space-x-4 mt-6 mx-8">
        <button className="bg-blue-50 w-1/4 p-4 rounded shadow border flex flex-col items-center justify-center hover:bg-blue-100">
          <svg className="w-6 h-6 mb-2 text-blue-500" fill="none">
            <rect width="24" height="24" fill="currentColor" />
          </svg>
          Send Email
        </button>
        <button className="bg-blue-50 w-1/4 p-4 rounded shadow border flex flex-col items-center justify-center hover:bg-blue-100">
          <svg className="w-6 h-6 mb-2 text-blue-500" fill="none">
            <rect width="24" height="24" fill="currentColor" />
          </svg>
          Call Customer
        </button>
        <button className="bg-blue-50 w-1/4 p-4 rounded shadow border flex flex-col items-center justify-center hover:bg-blue-100">
          <svg className="w-6 h-6 mb-2 text-blue-500" fill="none">
            <rect width="24" height="24" fill="currentColor" />
          </svg>
          Process Refund
        </button>
        <button className="bg-blue-50 w-1/4 p-4 rounded shadow border flex flex-col items-center justify-center hover:bg-blue-100">
          <svg className="w-6 h-6 mb-2 text-blue-500" fill="none">
            <rect width="24" height="24" fill="currentColor" />
          </svg>
          View Orders
        </button>
      </div>
    </div>
  );
}

export default CustomerView;

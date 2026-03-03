import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center bg-gradient-to-r from-blue-100 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          All Your Customers, One Portal
        </h1>
        <p className="mb-6 text-gray-700 max-w-xl">
          Streamline onboarding, manage customer data, and boost satisfaction.
          One secure, modern solution.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded text-lg font-semibold transition">
          Get Started
        </button>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto my-12 text-center">
        <div className="text-xl font-semibold">
          Trusted by over 1,000+ businesses
        </div>
        <p className="italic text-gray-500 my-2">
          "Customer Portal streamlined our workflow overnight!"
        </p>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 mb-8">
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="bg-blue-100 text-blue-600 p-2 rounded-full mb-2">
            👥
          </span>
          <div className="font-bold mb-1">Customer Profiles</div>
          <div className="text-sm text-gray-600 text-center">
            Centralize all customer information securely.
          </div>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="bg-green-100 text-green-600 p-2 rounded-full mb-2">
            📊
          </span>
          <div className="font-bold mb-1">Analytics</div>
          <div className="text-sm text-gray-600 text-center">
            View trends and track customer success.
          </div>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full mb-2">
            💬
          </span>
          <div className="font-bold mb-1">Communication</div>
          <div className="text-sm text-gray-600 text-center">
            Multi-channel: Email, SMS, and more.
          </div>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <span className="bg-purple-100 text-purple-600 p-2 rounded-full mb-2">
            🔒
          </span>
          <div className="font-bold mb-1">Security</div>
          <div className="text-sm text-gray-600 text-center">
            GDPR compliant, secure document storage.
          </div>
        </div>
      </section>
    </div>
  );
}

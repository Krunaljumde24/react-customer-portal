import React from "react";
export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="bg-blue-500 text-white rounded-full h-14 w-14 flex items-center justify-center font-bold text-2xl mb-4">
            CP
          </div>
          <h1 className="text-4xl font-bold mb-4">About Customer Portal</h1>
          <p className="text-gray-700 text-lg max-w-2xl">
            Empowering businesses to connect, understand, and serve their
            customers—all in one powerful, secure, and easy-to-use platform.
          </p>
        </div>

        {/* Mission & Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            To simplify customer management and accelerate business success by
            delivering intuitive technology with real-world impact.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in 2024 by a group of SaaS enthusiasts, Customer Portal was
            born out of a need for a smarter, more collaborative way to manage
            customer relationships. Today, hundreds of businesses rely on our
            platform for insight, security, and growth.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">
                Every feature and update is driven by what really helps our
                users succeed.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                We build trust through honest communication and clear roadmaps.
              </p>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h3 className="font-bold text-gray-800 mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 text-sm">
                Our team is always learning, growing, and pushing the
                platform—and ourselves—forward.
              </p>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Meet the Team
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 items-center">
            <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center text-2xl font-bold text-blue-500 shadow mr-0 md:mr-6">
              AJ
            </div>
            <div>
              <div className="font-bold text-gray-700">Alex Johnson</div>
              <div className="text-gray-500 text-sm mb-1">Founder & CEO</div>
              <p className="text-gray-600 text-sm">
                Alex is passionate about building tools that give businesses
                superpowers. With a background in SaaS and UI/UX, Alex leads our
                vision for a smarter customer experience.
              </p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </section>

        {/* Call To Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Want to learn more?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact us or try Customer Portal free today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

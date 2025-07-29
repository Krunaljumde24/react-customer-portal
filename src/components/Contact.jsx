import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setError("");
    // Simulate form submission like sending to backend
    setTimeout(() => {
      setSuccess("Thank you for reaching out! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Get in touch</h2>
              <p className="text-gray-600">
                We'd love to hear from you! Reach out with any questions or
                feedback.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                123 Main St, San Francisco, CA 94105
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:support@customerportal.com"
                className="text-blue-500 hover:underline"
              >
                support@customerportal.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:+15551234567"
                className="text-blue-500 hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="flex space-x-4 mt-6">
              {/* Social icons with accessible labels */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.464h-1.26c-1.243 0-1.632.771-1.632 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 002-2.48 9.03 9.03 0 01-2.88 1.1A4.52 4.52 0 0016.67 2c-2.4 0-4.35 1.95-4.35 4.35 0 .34.03.67.1.99A12.83 12.83 0 013 4.6s-4 8 4 11a8.57 8.57 0 01-6.3-1.69v.17c0 2.04 1.45 3.75 3.31 4.13a4.52 4.52 0 01-2 .08 4.55 4.55 0 004.25 3.15A9.06 9.06 0 011 18.6a12.79 12.79 0 006.92 2.03c8.3 0 12.87-6.88 12.87-12.86 0-.19 0-.37-.01-.54A9.22 9.22 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-6 shadow"
          >
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
                {success}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Subject of your message"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-1 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded resize-y focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

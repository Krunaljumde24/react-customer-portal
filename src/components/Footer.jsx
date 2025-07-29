import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#10182f] text-gray-300 pt-10 pb-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid: logo, about, columns */}
        <div className="grid md:grid-cols-5 gap-8 pb-8 border-b border-[#263159]">
          {/* Logo & Left Text */}
          <div className="md:col-span-1 flex flex-col space-y-5">
            <div>
              <span className="inline-flex items-center">
                {/* Example: Company Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-400 mr-2"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M10.5 5L16 1l5.5 4V13H10.5V5zm16 2l3 2v6.5L16 29 2.5 13.5V7l3-2V13.5L16 27 26.5 13.5V7z" />
                </svg>
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Making the world a better place through constructing elegant
              hierarchies.
            </div>
            {/* Social Icons Row */}
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook-square"></i>
                <svg
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.464h-1.26c-1.243 0-1.632.771-1.632 1.562V12h2.773l-.443 2.89h-2.33V21.877C18.343 21.128 22 16.991 22 12" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 2c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2a3 3 0 100 6 3 3 0 000-6zm6.5 1a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-white">
                <svg
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.707 7.293l-1.414-1.414L12 10.172 7.707 5.88 6.293 7.293 10.586 11.586 6.293 15.88l1.414 1.414L12 13l4.293 4.294 1.414-1.414-4.293-4.293z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white">
                <svg
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.647.5 .5 5.647.5 12c0 5.078 3.292 9.387 7.865 10.914.575.104.785-.249.785-.553v-2.11c-3.193.696-3.867-1.54-3.867-1.54-.523-1.331-1.277-1.686-1.277-1.686-1.043-.713.08-.699.08-.699 1.152.08 1.757 1.182 1.757 1.182 1.025 1.757 2.687 1.25 3.343.956.103-.743.402-1.25.729-1.537-2.55-.292-5.23-1.266-5.23-5.636 0-1.246.443-2.264 1.165-3.063-.116-.291-.504-1.462.11-3.05 0 0 .953-.305 3.125 1.164.904-.251 1.875-.377 2.84-.382.963.005 1.934.131 2.84.382 2.17-1.469 3.123-1.164 3.123-1.164.616 1.588.227 2.759.111 3.05.724.799 1.164 1.817 1.164 3.063 0 4.379-2.683 5.341-5.24 5.627.409.351.775 1.045.775 2.107v3.124c0 .306.209.662.789.549C20.71 21.382 24 17.077 24 12c0-6.353-5.147-11.5-12-11.5z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <svg
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.986 2.986 0 00-2.102-2.112C19.293 3.557 12 3.557 12 3.557s-7.293 0-9.396.517a2.984 2.984 0 00-2.102 2.112A29.948 29.948 0 000 12a29.948 29.948 0 00.502 5.814 2.986 2.986 0 002.102 2.112c2.103.517 9.396.517 9.396.517s7.293 0 9.396-.517a2.986 2.986 0 002.102-2.112A29.953 29.953 0 0024 12a29.953 29.953 0 00-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Column links */}
          <div>
            <h3 className="font-bold text-white mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Submit ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>© 2024 Your Company, Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

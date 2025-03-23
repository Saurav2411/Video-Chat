import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/download.jpeg"; // Ensure the logo is in the right path

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      setEmail(""); // Clear input after subscription
    }
  };

  return (
    <footer className="py-12 bg-white sm:pt-16 lg:pt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <img className="w-auto h-10" src={logo} alt="Logo" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
          {/* Quick Links */}
          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
              Quick Links
            </h6>
            <ul className="mt-8 space-y-5">
              <li><Link to="/" className="text-sm text-gray-900 hover:text-gray-600">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-900 hover:text-gray-600">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-900 hover:text-gray-600">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-900 hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
              Support
            </h6>
            <ul className="mt-8 space-y-5">
              <li><Link to="/help-center" className="text-sm text-gray-900 hover:text-gray-600">Help Center</Link></li>
              <li><Link to="/faqs" className="text-sm text-gray-900 hover:text-gray-600">FAQs</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-900 hover:text-gray-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-900 hover:text-gray-600">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-2 sm:col-span-1">
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
              Community
            </h6>
            <ul className="mt-8 space-y-5">
              <li><Link to="/forums" className="text-sm text-gray-900 hover:text-gray-600">Forums</Link></li>
              <li><Link to="/events" className="text-sm text-gray-900 hover:text-gray-600">Events</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-900 hover:text-gray-600">Blog</Link></li>
              <li><Link to="/join-us" className="text-sm text-gray-900 hover:text-gray-600">Join Us</Link></li>
            </ul>
          </div>

          {/* Subscription */}
          <div className="col-span-2 sm:col-span-3 xl:pl-20">
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">
              Subscribe for Updates
            </h6>
            <form className="relative mt-8" onSubmit={handleSubscribe}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-l-xl focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-white bg-gray-900 rounded-r-xl hover:bg-gray-700"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-16 border-gray-200" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between mt-8 sm:flex-row">
          <p className="text-gray-600 text-sm">© 2025 V-Together by Saurav Chauhan.</p>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/download.jpeg"; 

const Footer = () => {
  return (
    <footer className="py-12 bg-white sm:pt-16 lg:pt-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <img className="w-auto h-10" src={logo} alt="Logo" />

        <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
          {/* Quick Links */}
          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">Quick Links</h6>
            <ul className="mt-8 space-y-5">
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Home</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Services</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">Support</h6>
            <ul className="mt-8 space-y-5">
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Terms & Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-2 sm:col-span-1">
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">Community</h6>
            <ul className="mt-8 space-y-5">
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Forums</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Events</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-900 hover:text-gray-600">Join Us</a></li>
            </ul>
          </div>

          {/* Subscription */}
          <div className="col-span-2 sm:col-span-3 xl:pl-20">
            <h6 className="text-sm font-bold tracking-widest text-gray-900 uppercase">Subscribe for Updates</h6>
            <form className="relative mt-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-l-xl focus:outline-none"
                  required
                />
                <button className="px-6 py-3 text-white bg-gray-900 rounded-r-xl hover:bg-gray-700">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-16 border-gray-200" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between mt-8 sm:flex-row">
          <p className="text-gray-600 text-sm">© 2025 V-together by Saurav Chauhan.</p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-900 hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.175.013.349.013.523..." />
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209..." />
              </svg>
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

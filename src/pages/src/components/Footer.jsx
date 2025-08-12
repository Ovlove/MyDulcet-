import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary text-accent py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-secondary"><FaFacebook size={24} /></a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-secondary"><FaInstagram size={24} /></a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer" className="hover:text-secondary"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="p-2 rounded-l-md text-textPrimary flex-grow"
              aria-label="Email for newsletter signup"
            />
            <button type="submit" className="bg-secondary text-primary px-4 rounded-r-md hover:bg-yellow-400">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6 text-sm opacity-75">
        &copy; {new Date().getFullYear()} MyDulcet. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

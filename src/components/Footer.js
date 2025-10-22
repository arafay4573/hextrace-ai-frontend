import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} HexTrace AI. All rights reserved.</p>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

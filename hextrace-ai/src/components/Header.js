import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div>
        <a href="/" className="text-2xl font-bold text-gray-800 no-underline">HexTrace AI</a>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;

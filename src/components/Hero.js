import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">Unlock the Power of AI-Driven Cybersecurity</h1>
          <p className="text-lg mb-8">
            HexTrace AI provides cutting-edge solutions to protect your digital assets from the modern threat landscape.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Start Free Trial
          </button>
        </div>
        <div className="hidden lg:block">
          <img src="https://via.placeholder.com/400" alt="Cybersecurity illustration" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

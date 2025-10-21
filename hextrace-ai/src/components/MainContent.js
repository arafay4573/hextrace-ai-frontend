import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-grow p-8 bg-gray-800 text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div>Welcome, Alex</div>
      </header>
      <div>
        {/* Placeholder for dashboard widgets and content */}
        <p>Dashboard content goes here.</p>
      </div>
    </main>
  );
};

export default MainContent;

import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default DashboardPage;

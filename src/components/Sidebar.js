import React from 'react';

const Sidebar = () => {
  const navItems = ['Dashboard', 'Alerts', 'Reports', 'Integrations', 'Settings'];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <div className="text-2xl font-bold mb-8">
        HexTrace AI
      </div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li
              key={item}
              className={`p-3 rounded-lg cursor-pointer ${item === 'Dashboard' ? 'bg-gray-700' : 'hover:bg-gray-800'}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

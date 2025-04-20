import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Top Navbar */}
      <div className="bg-white px-4 py-3 flex justify-between items-center md:hidden shadow">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:static top-0 left-0 z-40 w-64 bg-white shadow h-full transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
        </div>
        <ul className="p-4 space-y-2">
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer"><Link to="/dashboard">Home</Link></li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer"><Link to="/application-list">Application List</Link></li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-30 z-30 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 mt-16 md:mt-0 md:ml-64">
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">📈 Revenue: $12,000</div>
          <div className="bg-white p-6 rounded-xl shadow">👥 Users: 540</div>
          <div className="bg-white p-6 rounded-xl shadow">📦 Orders: 124</div>
        </div>
      </main>
    </div>
  );
};

export default DashHome;

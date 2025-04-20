import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppliedLIst = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Top Navbar */}
      <div className="bg-white px-4 py-3 flex justify-between items-center md:hidden shadow">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-40 w-64 bg-white shadow h-full transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
        </div>
        <ul className="p-4 space-y-2">
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Link to="/dashboard">Home</Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Link to="/application-list">Application List</Link>
          </li>
          <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
            Settings
          </li>
        </ul>
      </div>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 mt-16 md:mt-0 md:ml-64">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="text-left px-6 py-3">Full Name</th>
                <th className="text-left px-6 py-3">Email</th>
                <th className="text-left px-6 py-3">Cover Letter</th>
                <th className="text-left px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Yasin Arafat</td>
                <td className="px-6 py-4">arafat@example.com</td>
                <td className="px-6 py-4 line-clamp-2">
                  I'm excited to join the team and contribute...
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AppliedLIst;

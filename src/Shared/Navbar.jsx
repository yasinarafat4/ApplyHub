import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-blue-700 text-white">
      <div className="container mx-auto lg:flex justify-between text-white px-4 lg:px-0 py-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            <Link to="/">ApplyHub</Link>
          </h2>
          <div className="flex items-center gap-2 lg:hidden">
            <div>
              <Link to={"/apply-now"}>
                <button className="cursor-pointer relative overflow-hidden rounded border border-white bg-transparent px-4 py-2 text-xs uppercase text-white transition-all duration-500 group">
                  <span className="relative z-10 flex items-center justify-center gap-1 font-semibold group-hover:text-white md:gap-2 md:text-sm">
                    Apply Now
                  </span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-black opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
                </button>
              </Link>
            </div>
            <div onClick={() => setToggle(!toggle)}>
              {toggle ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <ul
            className={` bg-blue-700 w-full flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 transition-all duration-500 ease-in-out
          ${toggle ? "block" : "hidden"} lg:flex`}
          >
            <li className="capitalize cursor-pointer hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="capitalize cursor-pointer hover:text-gray-300">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="capitalize cursor-pointer hover:text-gray-300">
              <Link to="/">About Us</Link>
            </li>
            <li className="capitalize cursor-pointer hover:text-gray-300">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link to={"/apply-now"}>
            <button className="cursor-pointer relative overflow-hidden rounded border border-white bg-transparent px-4 py-2 text-xs uppercase text-white transition-all duration-500 group">
              <span className="relative z-10 flex items-center justify-center gap-1 font-semibold group-hover:text-white md:gap-2 md:text-sm">
                Apply Now
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-black opacity-20 transition-all duration-500 ease-out group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

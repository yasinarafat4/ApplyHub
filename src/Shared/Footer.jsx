import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <div className="container mx-auto">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#C2410C] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Spinner;

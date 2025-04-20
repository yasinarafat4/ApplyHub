import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center mt-56">
      <div className="w-16 h-16 lg:w-20 lg:h-20  border-l-2 border-blue-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
        <div className="w-16 h-16  border-b-2 border-[#C2410C] rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
          <div className="w-10 h-10  border-r-2  border-orange-400 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="relative w-fit mx-auto mb-8 group">
      <h1 className="text-2xl font-bold capitalize text-blue-800 dark:text-slate-300 xl:text-3xl transition duration-300 group-hover:text-indigo-600">
        {heading}
      </h1>
      <span className="block h-[3px] w-10 bg-blue-800 dark:bg-white group-hover:bg-indigo-600 transition-all duration-500 group-hover:w-full mx-auto mt-1 rounded-full" />
    </div>
  );
};

export default SectionTitle;
import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-700 via-orange-800 to-orange-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Launch Your Career with Confidence
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Submit your application and take the first step toward your future.
          Our process is simple, transparent, and applicant-friendly.
        </p>
        <Link to="/apply-now">
          <button className="cursor-pointer px-6 py-3 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-100 transition-all duration-300">
            Apply Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;

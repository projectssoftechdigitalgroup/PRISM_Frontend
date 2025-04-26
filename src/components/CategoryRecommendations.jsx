import React from 'react';
import { IoArrowBackOutline } from "react-icons/io5";

const CategoryRecommendations = ({ title, image, onBack }) => {
  return (
    <div className="p-8 overflow-y-scroll">
      <button 
        onClick={onBack} 
        className="flex items-center text-gray-600 hover:text-purple-800 mb-6 transition cursor-pointer"
      >
        <IoArrowBackOutline className="w-6 h-6 mr-2" />
        Back
      </button>

      <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
        {title} Recommendations
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        
        <div className="w-full md:w-1/2">
          <img
            src={image} 
            alt="Category Illustration"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Discover Top {title}!
          </h2>
          <p className="text-purple-500">
            Explore the best options available in {title}. Carefully curated recommendations
            to match your interests and preferences. Dive deep and enjoy the journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryRecommendations;

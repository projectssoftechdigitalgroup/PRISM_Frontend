import React, { useState } from "react";
import CategoryCard from "./CategoryCards";
import { FaHistory } from "react-icons/fa";
import RHistory from "./RHistory";

const Recommendations = () => {
  const [screen, setScreen] = useState(true);

  return screen ? (
    <>
      
      <CategoryCard />

      
      <div className="flex items-center justify-center mt-10">
        <button
          style={{ backgroundColor: "#8200DB" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#E041B1")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#8200DB")}
          onClick={() => setScreen(false)}
          className="cursor-pointer bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base "
        >
          <FaHistory className="text-base sm:text-lg" />
          Recommendations History
        </button>
      </div>
    </>
  ) : (
    <RHistory onBack={() => setScreen(true)} />
  );
};

export default Recommendations;

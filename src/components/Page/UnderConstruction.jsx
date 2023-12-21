import React from 'react';
import { FaTools } from 'react-icons/fa'; 

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl mb-4 text-gray-800">
        <FaTools className="inline-block mr-2" /> Under Construction
      </div>
      <p className="text-lg text-gray-600 mb-8">
        Our team is working hard to bring you something amazing. Stay tuned!
      </p>

    </div>
  );
};

export default UnderConstruction;
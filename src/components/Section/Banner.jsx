import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="container mx-auto text-center mt-8 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Task Management Platform</h1>
        <p className="text-lg md:text-xl mb-8">A platform to organize your tasks efficiently</p>
        <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full inline-block transition duration-300">
          Let's Explore <FaArrowRight className="inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Banner;

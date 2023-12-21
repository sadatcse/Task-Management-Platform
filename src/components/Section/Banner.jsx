import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white py-24" style={{backgroundImage:"url(https://i.ibb.co/1GYzDpf/markus-spiske-9w-TPJmi-Xk2-U-unsplash.jpg)",backgroundAttachment: "fixed",}}>
      <div className="container mx-auto text-center mt-8 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Task Management Platform</h1>
        <p className="text-lg md:text-xl mb-8">A platform to organize your tasks efficiently</p>
        <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full inline-block transition duration-300">
          Let's Explore <FaArrowRight className="inline-block ml-2" />
        </a>
      </div>
    </section>
  //   <div>
  //   <div
  //     className="hero min-h-screen relative"
      
  //   >
  //     <div className="hero-overlay bg-opacity-90 h-full bg-fixed"></div>
  //     <div className="hero-content text-center text-neutral-content">
  //       <div className="max-w-md text-white">
  //         <h1 className="mb-5 text-5xl font-bold">Priority First</h1>
  //         <p className="mb-5">
  //           List down all your works into a priority list, so that you can
  //           utilize the time effectively.
  //         </p>
  //         {/* <Link to={"/login"}> */}
  //           <button className="btn btn-primary text-white">
  //             Let’s Explore
  //           </button>
  //         {/* </Link> */}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
};

export default Banner;

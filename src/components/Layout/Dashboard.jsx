
import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/logo.png'

// Import React icon 
import {FaUser ,FaTasks  } from 'react-icons/fa';
import { GrOverview } from "react-icons/gr";
import { MdOutlineViewCompact } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";




const Dashboard = () => {

  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
 


  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logged Out',
          text: 'User logged out successfully',
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: 'Logout failed. Please try again later.',
        });
        console.error(error);
      });
  };

  const navigateRole = () => {
    useEffect(() => {
      if (1 == 1) {
        navigate('/dashboard/overview');
      }
    }, [navigate]);
  };

  navigateRole(1);



  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 flex justify-center items-center">
        <img src={logo} alt="Company Logo" className="h-12 mr-4" />
        
      </header>

      <div className="flex flex-1 bg-gray-100">
        <div className="w-64 min-h-5/6 bg-white m-4 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            {/* Additional content or features can be added here */}
          </div>
          <ul className="menu">
          <li className='mb-2'>
              <NavLink
                to="/dashboard/overview"
                className="flex items-center py-2 px-4 text-black	 hover:bg-slate-200	"
              >
                <GrOverview className="mr-2" /> Task overview
              </NavLink>
            </li>
            <li className='mb-2'>
              <NavLink
                to="/dashboard/newtasks"
                className="flex items-center py-2 px-4 text-black	 hover:bg-slate-200	"
              >
                <FaTasks  className="mr-2" /> Create New Tasks
              </NavLink>
            </li>
            <li className='mb-2'>
              <NavLink
                to="/dashboard/alltask"
                className="flex items-center py-2 px-4 text-black	 hover:bg-slate-200	"
              >
                <MdOutlineViewCompact  className="mr-2" /> View All Tasks
              </NavLink>
            </li>
            <li className='mb-2'>
              <NavLink
                to="/dashboard/profile"
                className="flex items-center py-2 px-4 text-black	 hover:bg-slate-200	"
              >
                <FaUser className="mr-2" /> My Profile
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="flex items-center py-2 px-4 text-black	 hover:bg-slate-200	"
              >
                <IoIosLogOut  className="mr-2" /> Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

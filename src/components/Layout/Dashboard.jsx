
import React, { useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import {FaUser } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';




const Dashboard = () => {

  const companyLogo = "";
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



  return (
    <div className='flex flex-col h-screen'>
      <header className="bg-gray-800 text-white py-4 flex justify-center items-center">
        <img src={companyLogo} alt="Company Logo" className="h-12 mr-4" />
      </header>

      <div className='flex flex-1'>
        <div className='w-64 min-h-full bg-gradient-to-b from-orange-400 to-orange-600 p-4'>
          <div className="flex items-center justify-between mb-6">

          </div>
          <ul className='menu'>

            {dashboardOptions}
            <li><NavLink to="/dashboard/profile" className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUser className="mr-2" /> My Profile</NavLink></li>
            <li><NavLink to="/" onClick={handleLogOut} className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUser className="mr-2" /> Logout</NavLink></li>

          </ul>
        </div>
        <div className='flex-1 p-4'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

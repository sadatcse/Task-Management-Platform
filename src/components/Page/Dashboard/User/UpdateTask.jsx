import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const UpdateTask = () => {
    const Tasks = useLoaderData();
  const axiosSecure = UseAxioSecure();
  const navigate = useNavigate();
  const [formData, setFormData] = useState('');

  useEffect(() => {
    if (Tasks) {
      setFormData(Tasks);
    }
  }, [Tasks]); 

  const handleformdataChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));}

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axiosSecure.patch(`/tasks/${Tasks._id}`, formData);
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Task Updated Successfully',
            }).then(() => {
              navigate(`/dashboard/overview`);
            });
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Helmet>
           <title>Update Task</title>
         </Helmet>
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
           <h1 className="text-2xl font-bold mb-6">Update Task</h1>
           <hr className="my-4 border-2 border-gray-300" />
   
           <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label htmlFor="title" className="block mb-1">Title</label>
               <input
                 type="text"
                 id="title"
                 name="title"
                 value={formData.title}
                 onChange={handleformdataChange}
                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                 required
               />
             </div>
   
             <div>
               <label htmlFor="description" className="block mb-1">Description</label>
               <textarea
                 id="description"
                 name="description"
                 value={formData.description}
                 onChange={handleformdataChange}
                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                 required
               ></textarea>
             </div>
   
             <div>
               <label htmlFor="deadline" className="block mb-1">Deadline</label>
               <input
                 type="date"
                 id="deadline"
                 name="deadline"
                 value={formData.deadline}
                 onChange={handleformdataChange}
                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                 required
               />
             </div>
   
             <div>
               <label htmlFor="priority" className="block mb-1">Priority</label>
               <select
                 id="priority"
                 name="priority"
                 value={formData.priority}
                 onChange={handleformdataChange}
                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
               >
                 <option value="Low">Low</option>
                 <option value="Moderate">Moderate</option>
                 <option value="High">High</option>
                 {/* Add more options as needed */}
               </select>
             </div>
   
   
             <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
               Update Task
             </button>
           </form>
         </div>
       </div>
    );
};

export default UpdateTask;
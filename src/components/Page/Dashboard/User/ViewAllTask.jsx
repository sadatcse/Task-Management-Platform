import React, { useState, useEffect } from 'react';

import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import Swal from "sweetalert2";
import useTask from "../../../Hook/useTask";
import { useNavigate } from 'react-router-dom';
const ViewAllTask = () => {
  const navigate = useNavigate();
    const [tasks, refetch] = useTask();
    console.log(tasks);
    const axiosSecure = UseAxioSecure();
    const [count, setCount] = useState(tasks.length);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);
    
    const numberOfPages = Math.ceil(count / itemsPerPage);



    const handleDelete = (taskId) => {
      Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this task!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
      }).then((result) => {
          if (result.isConfirmed) {
              axiosSecure.delete(`/tasks/${taskId}`)
                  .then(response => {
                    refetch();
                      Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                      console.log('Task deleted successfully:', taskId);
                  })
                  .catch(error => {
                      console.error('Error deleting task:', error);
                      // Handle errors here according to your application's needs
                      Swal.fire('Error!', 'Failed to delete task.', 'error');
                  });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire('Cancelled', 'Your task is safe :)', 'info');
          }
      });
  };

    const handleEdit = (taskId) => {
        navigate(`/dashboard/updatetask/${taskId}`);
    };

    const updatetaskData = () => {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pagedMenus = tasks.slice(startIndex, endIndex);
      return pagedMenus;
    };


    return (
        <div className="bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-gray-800 text-white py-4 px-6">
              <h1 className="text-2xl font-bold">View All Tasks</h1>
          </div>
                <hr className="my-4 border-2 border-gray-300" />
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updatetaskData().map(task => (
                            <tr key={task._id}>
                                <td className='py-2 px-4 border'>{task.title}</td>
                                <td className='py-2 px-4 border'>{task.description}</td>
                                <td className='py-2 px-4 border'>{task.deadline}</td>
                                <td className='py-2 px-4 border'>{task.priority}</td>
                                <td className='py-2 px-4 border'>{task.status}</td>
                                <td className='py-2 px-4 border'>
                                    <button onClick={() => handleEdit(task._id)} className="mr-2">
                                        <RiEdit2Line /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(task._id)}>
                                        <RiDeleteBin6Line /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tasks.length > 1 ? (
                <div className='pagination flex items-center justify-center mt-4 space-x-4'>
        <p className='text-gray-600'>Current Page: {currentPage + 1}</p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-2 py-1 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        {[...Array(numberOfPages)].map((_, index) => (
          <button
            onClick={() => setCurrentPage(index)}
            key={index}
            className={`px-2 py-1 rounded ${currentPage === index ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-2 py-1 rounded ${currentPage === numberOfPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={currentPage === numberOfPages - 1}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(0);
          }}
          className='px-2 py-1 border border-gray-300 rounded'
        >
          <option value='9'>9</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
      </div>
) : null}
            </div>
        </div>
    );
};

export default ViewAllTask;

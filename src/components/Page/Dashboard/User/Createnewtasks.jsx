import { useContext, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import moment from 'moment';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const CreateNewTasks = () => {
  const {user} = useContext(AuthContext);
  const Useremail = user?.email;
  const Displayname =user?.displayName;
  const axiosSecure = UseAxioSecure();

  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Low',
    status: 'To-Do',
    createby: Displayname,
    createemail:Useremail,
    createdAt: moment().format('lll'),
    updatedAt: moment().format('lll'),
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Task:', task);
    axiosSecure.post('/tasks', task)
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: 'task Added Successfully',
        showConfirmButton: false,
        timer: 2500 
      }).then(() => {
        window.location.reload();
      });
    })
    .catch(error => {
      console.error("Error:", error);
    
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error adding the parcel.'
      });
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
     <Helmet>
        <title>Create New Task</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Create New Task</h1>
        <hr className="my-4 border-2 border-gray-300" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-1">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1">Description</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
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
              value={task.deadline}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="priority" className="block mb-1">Priority</label>
            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              {/* Add more options as needed */}
            </select>
          </div>


          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTasks;

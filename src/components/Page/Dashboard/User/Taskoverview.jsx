import React, { useEffect, useState } from 'react';
import useTask from "../../../Hook/useTask";
import { toast ,Toaster } from 'react-hot-toast';
import UseAxioSecure from '../../../Hook/UseAxioSecure';
import { useDrag, useDrop } from 'react-dnd'
import { AiOutlineDelete ,AiOutlineEdit  } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';



const Taskoverview = () => {
  const navigate = useNavigate();
  const axiosSecure = UseAxioSecure();
  const [tasks, refetch] = useTask();
  const [todos ,setTodos] =useState([]);
  const [ongoing ,setOngoing] =useState([]);
  const [completed ,setCompleted] =useState([]);
  useEffect(() => {
    const fTodos = tasks.filter((task) => task.status === "To-Do");
    const fOngoing = tasks.filter((task) => task.status === "Ongoing");
    const fCompleted = tasks.filter((task) => task.status === "Completed");
  
    setTodos(fTodos);
    setOngoing(fOngoing);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ['To-Do', 'Ongoing', 'Completed'];

  const Header = ({ text, bg, count }) => {
    return (
      <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-black`}>
        <div>{text}</div>
        <div className='ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center'>{count}</div>
        
      </div>
    );
  };

  const Task = ({ task}) => {

    const handleDelete = (taskId) => {
      axiosSecure
        .delete(`/tasks/${taskId}`)
        .then((response) => {
          refetch();
          toast.success('Your task has been deleted.');
          console.log('Task deleted successfully:', taskId);
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
          toast.error('Failed to delete task.');
        });
    };

    const handleEdit = (taskId) => {
      navigate(`/dashboard/updatetask/${taskId}`);
  };

    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'TASK', 
      item: { id: task._id }, 
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    return (
 <div ref={drag}  className={`relative p-4 mt-8 border border-indigo-600 shadow-md rounded-md cursor-grab ${
  isDragging ? "opacity-25" :"opacity-100" 
 }`}>
  <p className="text-lg font-bold mb-2">{task.title}</p>
  <p className="text-sm text-gray-600 mb-1">Description: {task.description}</p>
  <p className="text-sm text-gray-600 mb-1">Priority: {task.priority}</p>
  <p className="text-sm text-gray-600 mb-1">Deadline: {task.deadline}</p>
  <button onClick={() => handleDelete(task._id)} className='absolute bottom-1 right-1 text-slate-400'>
  <AiOutlineDelete size={24} /> 
</button>
<button onClick={() => handleEdit(task._id)} className='absolute bottom-1 right-10 text-slate-400'>
  <AiOutlineEdit size={24} /> {/* Adjust the size as needed */}
</button>
 </div>
    );
  };
  
  const Section = ({ status, todos, ongoing, completed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'TASK', 
      drop: (item) =>addItemToSection(item.id),
      
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));
    
    let text = "Todo";
  let bg = "bg-slate-500";
  let tasksToMap = todos;

  if (status === "Ongoing") {
    text = "Ongoing";
    bg = "bg-purple-500";
    tasksToMap = ongoing;
  } else if (status === "Completed") {
    text = "Completed";
    bg = "bg-green-500";
    tasksToMap = completed;
  }
  const addItemToSection  = (id) => {
    axiosSecure
      .patch(`/tasks/${status}/${id}`)
      .then((response) => {
        refetch();
        toast.success('Task status change.');
      })
      .catch((error) => {
        console.error('Error changeing task status:', error);
        toast.error('Failed to delete task. Please try again.');
      });
  
    console.log("Dropped task ID:", id, "with status:", status);
  };
    
    return (
      <div ref={drop} className={`w-64`}>
        <Header text={text} bg={bg} count={tasksToMap.length} />
        {tasksToMap.length > 0 && tasksToMap.map((task) =>(
          <Task key={task._id} task={task}/>
        ) )}
      </div>
    );
  };
   
  
    return (
     
        <div className="bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md h-screen">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold">Task Overview</h1>
          <Toaster />
        </div>
        <hr className="my-4 border-2 border-gray-300" />
        <div className='flex gap-16'>
      {statuses.map((status, index) => (
        <Section
        key={index}
        status={status}
        todos={todos}
        ongoing={ongoing}
        completed={completed}
      />
      ))}
    </div>

        </div></div>

    );
};

export default Taskoverview;
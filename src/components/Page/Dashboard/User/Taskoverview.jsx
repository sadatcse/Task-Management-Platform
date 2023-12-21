import React, { useEffect, useState } from 'react';
import useTask from "../../../Hook/useTask";

const Taskoverview = () => {
  const [tasks, refetch] = useTask();
  const [taskes ,setTaskes] =useState([]);
  const [todos ,setTodos] =useState([]);
  const [ongoing ,setOngoing] =useState([]);
  const [completed ,setCompleted] =useState([]);
  console.log(tasks);

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

  const Task = ({ task,tasks,setTasks }) => {
   const handleRemove =(id) =>{
    console.log(id);
   }
    return (
 <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
  <p>{task.title}</p>
  <button onClick={() =>handleRemove(task._id)} className='absolute bottom-1 right-1 text-slate-400'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

  </button>
 </div>
    );
  };
  
  const Section = ({ status, tasks, setTasks, todos, ongoing, completed }) => {
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
    
    return (
      <div className={`w-64`}>
        <Header text={text} bg={bg} count={tasksToMap.length} />
        {tasksToMap.length > 0 && tasksToMap.map((task) =>(
          <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks} />
        ) )}
      </div>
    );
  };
   
  
    return (
  
        <div className="bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md h-screen">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold">Task Overview</h1>
        </div>
        <hr className="my-4 border-2 border-gray-300" />
        <div className='flex gap-16'>
      {statuses.map((status, index) => (
        <Section
        key={index}
        status={status}
        tasks={taskes}
        setTasks={setTaskes}
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
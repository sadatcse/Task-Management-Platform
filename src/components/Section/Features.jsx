import React, { useEffect } from 'react';

import AOS from 'aos';
import Feature from './Feature';



const Features = () => {
     useEffect(() => {
    AOS.init({ duration: 1000 });

  }, []);
  return (
    <div data-aos="fade-up" className="container mx-auto pt-5 px-3">
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <Feature
            title="User Authentication & One-Click Login            "
            description="Users can register, log in, and log out from the website. There's support for Google sign-in and another login system. Upon logging out, users are redirected to the landing page. A one-click login system streamlines access to the task management dashboard."
          />
          <Feature
            title="Task Addition with Details            "
            description="Users have the ability to add tasks with titles, descriptions, deadlines, and priority levels (such as low, moderate, high, etc.). These tasks are stored and displayed within the task management dashboard."
          />
          <Feature
            title="Task Management Dashboard with Drag-and-Drop Functionality            "
            description="The task management dashboard showcases tasks in separate lists for 'to-do', 'ongoing', and 'completed'. It implements drag-and-drop functionality, enabling users to easily move tasks between these lists for efficient task management."
          />
          <Feature
            title="Profile Update Option            "
            description="Each user has their own profile within the task management dashboard. Users can update their profile information, including their profile picture, and view personal task details such as tasks added, in progress, or completed."
          />
        </div>
      </div>
    </div>
  );
};


export default Features;
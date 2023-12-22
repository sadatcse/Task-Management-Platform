import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// Import React Router dom 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Root from './components/Root';
import Error404 from './components/Page/Error404';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Dashboard from './components/Layout/Dashboard';
import MyProfile from './components/Page/Dashboard/Universal/MyProfile';
import PrivateRoot from './components/Root/PrivateRoot';
import AuthProvider from './providers/AuthProvider';
import Home from './components/Page/Home';
import Aboutus from './components/Page/Aboutus';
import Article from './components/Page/Article ';
import Clients from './components/Page/Clients';
import Taskoverview from './components/Page/Dashboard/User/Taskoverview';
import Createnewtasks from './components/Page/Dashboard/User/Createnewtasks';
import ViewAllTask from './components/Page/Dashboard/User/ViewAllTask';
import UpdateTask from './components/Page/Dashboard/User/UpdateTask';
const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <Aboutus></Aboutus>
      },
      {
        path: '/article',
        element: <Article></Article>
      },
      {
        path: '/clients',
        element: <Clients></Clients>
      },
       
       
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'profile',
        element:<PrivateRoot><MyProfile></MyProfile></PrivateRoot>
      },
      {
        path:'overview',
        element:<PrivateRoot><Taskoverview></Taskoverview></PrivateRoot>
      },
      {
        path:'newtasks',
        element:<PrivateRoot><Createnewtasks></Createnewtasks></PrivateRoot>
      },
      {
        path:'alltask',
        element:<PrivateRoot><ViewAllTask></ViewAllTask></PrivateRoot>
      },
      {
        path:'updatetask/:id',
        element:<PrivateRoot><UpdateTask></UpdateTask></PrivateRoot>,
        loader: ({ params }) => fetch(`https://task-management-platform-server-zeta.vercel.app/tasks/${params.id}`) ,
        
      },
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
 <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </HelmetProvider>
   </QueryClientProvider>
   </DndProvider>
   </React.StrictMode>,
)

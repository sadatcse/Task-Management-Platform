import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HelmetProvider } from 'react-helmet-async';
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
 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
 <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   </HelmetProvider>
   </QueryClientProvider>
   </React.StrictMode>,
)

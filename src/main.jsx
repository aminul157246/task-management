import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Layout from './Layout/Layout';
import Tasks from './Pages/Tasks/Tasks';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Shared/AuthProvider/AuthProvider';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path  : '/tasks',
        element : <PrivateRoute><Tasks></Tasks></PrivateRoute>,
        loader : ( ) => fetch('http://localhost:5000/task')
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>,

      },
      {
        
      }
    ]
  },
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
      <RouterProvider router={router} />  
      </AuthProvider>
    </div>
  </React.StrictMode>,
)

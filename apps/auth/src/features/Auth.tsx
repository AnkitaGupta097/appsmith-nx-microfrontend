import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import './Auth.css';

const router = createBrowserRouter([
  {
    path: '/user/login',
    element: <SignIn />,
  },
  {
    path: '/user/',
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
]);

const Auth = () => {
  return <RouterProvider router={router} />;
};

export default Auth;

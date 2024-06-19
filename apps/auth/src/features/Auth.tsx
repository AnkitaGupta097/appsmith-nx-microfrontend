import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SignIn from './SignIn';
import './Auth.css';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/user',
    element: <Outlet />,
    children: [
      {
        path: 'login',
        element: <SignIn />,
      },
    ],
  },
]);

const Auth = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default Auth;

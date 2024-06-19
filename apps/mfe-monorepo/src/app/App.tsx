import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './features/Home';
import React, { lazy, Suspense } from 'react';
import { Navbar } from './features/Navbar';
import type ProductHeroType from 'hero/ProductHero';
import useSyncAppRouter from './hooks/useSyncAppRouter';

const Products = lazy(() => import('./features/Products/components/Products'));
const Cart = lazy(() => import('./features/Cart/components/Cart'));
const Contact = React.lazy(() => import('hero/Contact'));
const Contact2 = React.lazy(() => import('hero/ProductHero'));
// @ts-ignore: Exists
const Auth = React.lazy(() => import('auth/Auth'));

const AppRouterHandler = () => {
  useSyncAppRouter({ basepath: '/contact' });
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
};

const AuthRouterHandler = () => {
  useSyncAppRouter({ basepath: '/user' });
  return (
    <Suspense>
      <Auth />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/user/*',
    element: <AuthRouterHandler />,
  },
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: (
          <Suspense>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '/contact/*',
        element: <AppRouterHandler />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WorkspacesPage from './pages/workspaces/Worspaces.page';
import WorkspaceOnePage from './pages/workspace-one/WorkspaceOne.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WorkspacesPage />,
    children: [
      {
        path: '1',
        element: <WorkspaceOnePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

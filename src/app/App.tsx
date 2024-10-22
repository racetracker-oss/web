import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loader from './components/Loader';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const Layout = lazy(() => import('./Layout'));

export function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: 
    (<Suspense fallback={<Loader/>}>
      <Layout />
    </Suspense>),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
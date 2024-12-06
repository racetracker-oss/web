import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import Loader from './components/Loader';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const Layout = lazy(() => import('./Layout'));

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        (<Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>),
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
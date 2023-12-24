import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import PortofolioDetail from './pages/portofolio/PortofolioDetail';
import ScrollToTop from './utils/ScrollToTop';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/portofolio/:name',
          element: <PortofolioDetail />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

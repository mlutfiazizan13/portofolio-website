import MainLayout from './layouts/MainLayout';
import AboutMe from './pages/about-me/AboutMe';
import Home from './pages/home/Home';
import PortofolioDetail from './pages/portofolio/PortofolioDetail';
import Services from './pages/services/Services';
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
        {
          path:'/about-me',
          element: <AboutMe />
        }, {
          path: '/services',
          element: <Services />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;

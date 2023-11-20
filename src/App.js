import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import ScrollToTop from './utils/ScrollToTop';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ScrollToTop>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path="" element={<Home/>}></Route>
            </Route>
        </Routes>
    </ScrollToTop>
  );
}

export default App;

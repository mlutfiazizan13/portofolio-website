import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return ( 
        <Fragment>
            <div id='page-container' className='relative min-h-screen bg-[#272727]'>
                <Navbar />
                <div id='content-wrap' className='pb-20'>
                    <Outlet />
                </div>
                <footer id='footer' className=' w-full'>
                    <Footer />
                </footer>
            </div>
            <ScrollRestoration />

        </Fragment>
     );
}
 
export default MainLayout;
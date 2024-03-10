import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const MainLayout = () => {
    return ( 
        <Fragment>
            <div id='page-container' className='relative min-h-screen bg-white'>
                <Navbar />
                <div id='content-wrap' className='pt-[90px] pb-20 lg:ml-[90px] lg:w-[calc(100%-90px)]'>
                    <Outlet />
                </div>
                <footer id='footer' className='absolute bottom-0 w-full'>
                    <Footer />
                </footer>

                <div className="fixed flex justify-center items-center text-2xl text-white right-0 bottom-0 w-[90px] h-[90px] bg-[#323443] border-l-[0.1px] border-gray-700">
                    <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                </div>
            </div>
            <ScrollRestoration />

        </Fragment>
     );
}
 
export default MainLayout;
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    
    const [isShown, setShown] = useState({hoverMenu: ''});

    const [isNavActive, setNavActive] = useState(false);


    const mobileNavbar = () => {
        console.log("test");
        setNavActive(!isNavActive);
    };

    // setShown("testtest");
    const onMenuMouseEnter = (id) => {
        console.log(id);

        // clearTimeout();
        setShown({hoverMenu: id})
    }

    const onMenuMouseLeave = () => {

        console.log('out');
        setShown({hoverMenu: ''})
        // setTimeout(() => setShown({hoverMenu: ''}), 2000);

    }
    return ( 
        <>
            <div id="desktop-navbar" className="hidden lg:block md:absolute top-0 left-0 right-0 my-5 mx-14 xl:mx-32  bg-transparent z-20">
                <div className="flex justify-between items-center text-white">
                    <p className="text-4xl font-bold">Lutfi°</p>
                    <div className="flex justify-around gap-10 items-center text-lg font-bold">
                        <div className="border-b-transparent border-b-2 hover:border-[#323443]">
                            <p>Home</p>
                        </div>

                        <div className="border-b-transparent border-b-2 hover:border-[#323443]">
                            <p>About Me</p>
                        </div>

                        <div className="border-b-transparent border-b-2 hover:border-[#323443]">
                            <p>Services</p>
                        </div>                   
                    </div>
                    <a href="-" className="bg-black px-10 lg:py-4 xl:py-6 text-[#FAF6F0] text-lg font-bold rounded-xl">Contact Me</a>
                </div>
            </div>    


                        {/* Mobile Navbar */}
            <div className="fixed lg:hidden top-0 z-10 w-full">
                <div className='flex items-center justify-between text-white  px-5 sm:px-14 py-7'>

                    <div className='flex items-centerlg:py-0 lg:border-b-0'>
                        <Link to="/">
                            <p className="text-4xl font-bold">Lutfi°</p>
                        </Link>
                    </div>
                    <div className=''>
                        <button type='button'  onClick={mobileNavbar}>
                            <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile_nav relative">
                <div id="mob_nav_overlay" className={isNavActive? `fixed w-screen h-screen top-0 z-30 bg-[#0000007d]` : 'hidden'}  onClick={mobileNavbar}></div>
                <div className={isNavActive ? `fixed z-50 top-0 left-0 p-8` : `hidden` }  onClick={mobileNavbar}>
                    <i className="fas fa-times fa-2xl text-white"></i>
                </div>
                <div id="mob_nav_body" className={isNavActive ? `fixed bg-white top-0 right-0 shadow-md h-screen lg:hidden lg:justify-between xl:hidden w-full max-w-[80%] duration-300 z-50`: `fixed bg-white top-0 right-0 shadow-md h-screen translate-x-full lg:hidden lg:justify-between xl:hidden w-full max-w-[80%] duration-300 z-50` }>
                    <div className="flex flex-col text-md py-3">
                        <div className="flex flex-col py-20 text-lg text-black">
                            <a href="test">Test</a>
                        </div>
    
                    </div>
                </div>
            </div>
            {/* <div className="fixed bg-white md:hidden bottom-0 z-10 w-full h-20">
                <p>test</p>
            </div> */}

        
        </>
     );
}
 
export default Navbar;
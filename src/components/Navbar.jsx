
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {

    
    const [isShown, setShown] = useState({hoverMenu: ''});

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
            <div id="desktop-navbar" className="hidden lg:block md:fixed top-0 left-0 right-0 my-5 mx-14 xl:mx-32 z-10 overflow-hidden">
                <div className="relative h-[50px] grid grid-cols-6 items-center text-black bg-transparent rounded-full overflow-hidden">
                    <div className="bg-white h-full flex justify-center items-center">
                        <Link to={'/'} className=" text-4xl font-bold">Lutfi°</Link>
                    </div>
                    <div className=" bg-white h-full col-span-4 flex justify-center gap-10 items-center text-lg font-bold">
                        <Link to={'/'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            Home
                        </Link>
{/* 
                        <Link to={'/about-me'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            About Me
                        </Link> */}

                        <Link to={'/services'} className="border-b-transparent border-b-2 hover:border-[#323443]">
                            Services
                        </Link>                   
                    </div>
                        <a href="-" className="flex justify-center items-center bg-black h-full text-[#FAF6F0] text-lg font-bold z-20">Contact Me</a>
        
                </div>
            </div>    


                        {/* Mobile Navbar */}
        <NavbarMobile/>

        
        </>
     );
}
 
export default Navbar;
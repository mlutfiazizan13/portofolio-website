
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
            <div id="desktop-navbar" className="hidden lg:block md:absolute top-0 left-0 right-0 my-5 mx-14 xl:mx-32  bg-transparent z-20">
                <div className="flex justify-between items-center text-white py-3">
                    <Link to={'/'} className="text-4xl font-bold">Lutfi°</Link>
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
                    <a href="-" className="bg-black px-10 lg:py-4 xl:py-3 text-[#FAF6F0] text-lg font-bold rounded-xl">Contact Me</a>
                </div>
            </div>    


                        {/* Mobile Navbar */}
        <NavbarMobile/>

        
        </>
     );
}
 
export default Navbar;
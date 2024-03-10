import { Link } from "react-router-dom";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import icon from "../assets/images/lutfi-icon-white.png";

const NavbarMobile = () => {
  const [isNavActive, setNavActive] = useState(false);

  const mobileNavbar = () => {
    console.log("test");
    setNavActive(!isNavActive);
  };

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-white lg:hidden">
      <div className="left-0 right-0 top-0 z-50 flex items-center justify-between bg-black md:fixed">
          <Link
            to={"/"}
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-4xl text-white"
          >
            <img src={icon} className="w-[30px]" alt="" />
          </Link>

          <div>
            <Link to={'/services'} className="text-white text-2xl">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
            <button onClick={mobileNavbar} className="text-white h-[90px] w-[90px] text-2xl">
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>

            </button>
          </div>

        </div>
      </div>
      <div id="mobile_nav relative">
        <div
          id="mob_nav_overlay"
          className={
            isNavActive
              ? `fixed top-0 z-30 h-screen w-screen bg-[#0000007d]`
              : "hidden"
          }
          onClick={mobileNavbar}
        ></div>
        <div
          className={isNavActive ? `fixed left-0 top-0 z-50 p-8` : `hidden`}
          onClick={mobileNavbar}
        >
          <i className="fas fa-times fa-2xl text-white"></i>
        </div>
        <div
          id="mob_nav_body"
          className={
            isNavActive
              ? `fixed right-0 top-0 z-50 h-screen w-full max-w-[80%] bg-white shadow-md duration-300 lg:hidden lg:justify-between xl:hidden`
              : `fixed right-0 top-0 z-50 h-screen w-full max-w-[80%] translate-x-full bg-white shadow-md duration-300 lg:hidden lg:justify-between xl:hidden`
          }
        >
          <div className="text-md flex flex-col py-3">
            <div className="flex flex-col py-20 text-lg text-black">
              <a href="test">Test</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;

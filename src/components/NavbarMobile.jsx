import { Link, useLocation } from "react-router-dom";
import { faBars, faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import icon from "../assets/images/lutfi-icon-white.png";

const NavbarMobile = () => {
  const [isNavActive, setNavActive] = useState(false);
  const currentLocation = useLocation();

  const mobileNavbar = () => {
    console.log("test");
    setNavActive(!isNavActive);
  };

  return (
    <>
      <div className="fixed top-0 z-10 w-full bg-black lg:hidden">
      <div className="left-0 right-0 top-0 z-50 flex items-center justify-between bg-black md:fixed">
          <Link
            to={"/"}
            className="flex h-[90px] w-[90px] items-center justify-center bg-[#323443] text-4xl text-white"
          >
            <img src={icon} className="w-[30px]" alt="" />
          </Link>

          <div>
            <a href="mailto:mlutfiazizan@gmail.com" target="_blank" rel="noreferrer"  className="text-white text-2xl">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
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
              ? `fixed right-0 top-0 z-50 h-screen w-full max-w-[80%] bg-black shadow-md duration-300 lg:hidden lg:justify-between xl:hidden`
              : `fixed right-0 top-0 z-50 h-screen w-full max-w-[80%] translate-x-full bg-black shadow-md duration-300 lg:hidden lg:justify-between xl:hidden`
          }
        >
          <div className="text-md flex flex-col">
          <div className="flex justify-end items-center">
            <a href="mailto:mlutfiazizan@gmail.com" target="_blank" rel="noreferrer"  className="text-white text-2xl">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
            <button onClick={mobileNavbar} className="text-white h-[90px] w-[90px] text-xl">
            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>

            </button>
          </div>
            <div className="flex flex-col justify-center text-center gap-5 py-10 text-lg text-white">
              <Link to={'/'} onClick={mobileNavbar} className={`uppercase text-2xl py-4 w-full ${currentLocation.pathname === "/" && 'bg-[#323443]'}`}>
                Home
              </Link>
              <Link to={'/about-me'} onClick={mobileNavbar} className={`uppercase text-2xl py-4 w-full ${currentLocation.pathname === "/about-me" && 'bg-[#323443]'}`}>
                About Me
              </Link>
              <Link to={'/projects'} onClick={mobileNavbar} className={`uppercase text-2xl py-4 w-full ${currentLocation.pathname === "/projects" && 'bg-[#323443]'}`}>
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;

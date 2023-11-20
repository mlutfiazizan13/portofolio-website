import { Component } from "react";
import  PersonalImg  from "../../assets/images/personal-img.jpg"
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

import TechnologyContainer from "../../containers/TechnologyContainer";
import PortofolioContainer from "../../containers/PortofolioContainer";





class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="h-screen md:h-[700px] lg:h-full bg-[#272727] relative">
                    <div className="lg:grid lg:grid-cols-2 lg:relative">

                        <div className="text-white px-5 sm:px-14 xl:px-32">
                            <div className="absolute top-1/2 transform -translate-y-1/2">
                                <p className="text-7xl font-bold">Hello!</p>
                                <p className="text-7xl font-bold">I'm Muhamad Lutfi Azizan</p>
                                
                                <div className="mt-3">
                                    <p>I’am freelance web developer based in Indonesia <br /> who loves to craft attractive design <br /> experiences for the web.</p>
                                    <div className="flex gap-4 mt-3 font-bold">
                                        <a href="-" className="px-5 py-2 bg-white text-[#272727]">Email Me</a>
                                        <a href="-" className="px-5 py-2"> <FontAwesomeIcon className="mr-2" icon={faDownload} /> Download CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img className="h-full w-full" src={PersonalImg} alt="" />
                        </div>
                    </div>
                </div>



                <div className="px-5 sm:px-14 xl:px-32 pb-10 pt-5 bg-[#272727]"> 
                    <div className="inline-block relative mb-10 md:mb-20 text-white">
                        <div className="absolute bg-white w-9 h-1 -top-3 -left-3"></div>
                        <div className="absolute bg-white w-1 h-9 -top-3 -left-3"></div>

                        <p className="font-semibold">SKILLS</p>
                        <p className="text-4xl font-bold">Technology</p>
                        <div className="absolute bg-white w-28 h-1 -right-10"></div>
                    </div>

                    <TechnologyContainer></TechnologyContainer>

                </div>


                <div className="px-5 sm:px-14 xl:px-32 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="self-center text-white">
                        <div className="inline-block relative mb-5">
                            <div className="absolute bg-white w-9 h-1 -top-3 -left-3"></div>
                            <div className="absolute bg-white w-1 h-9 -top-3 -left-3"></div>
                            <p className="font-semibold">SERVICES</p>
                            <p className="text-4xl font-bold">Specialized In</p>
                            <div className="absolute bg-white w-28 h-1 -right-10"></div>
                        </div>
                        <div className="text-justify text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos at vitae minus consequatur blanditiis voluptatibus tenetur delectus ut dolorem quasi?
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">

                        <div className="bg-[#323443] h-full px-10 py-6 rounded-xl">
                            <FontAwesomeIcon className="bg-[#272727] text-white p-3 h-7 w-7 mb-1" icon={faGlobe} />
                            <div className="text-white">
                                <p className="font-bold text-lg mb-2">Web Development</p>
                                <p className="opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quasi.</p>
                            </div>
                        </div>
                        <div className="bg-[#323443] h-full px-10 py-6 rounded-xl">
                            <FontAwesomeIcon className="bg-[#272727] text-white p-3 h-7 w-7 mb-1" icon={faAndroid} />
                            <div className="text-white">
                                <p className="font-bold text-lg mb-2">Native Android Development</p>
                                <p className="opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, quasi.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="px-5 sm:px-14 xl:px-32 py-10 md:py-20 bg-[#272727]">
                    <div className="inline-block relative mb-10 md:mb-20 text-white">
                            <div className="absolute bg-white w-9 h-1 -top-3 -left-3"></div>
                            <div className="absolute bg-white w-1 h-9 -top-3 -left-3"></div>

                            <p className="font-semibold">RECENT PROJECTS</p>
                            <p className="text-4xl font-bold">Featured Portofolios</p>
                            <div className="absolute bg-white w-28 h-1 -right-10"></div>
                    </div>

                    <PortofolioContainer></PortofolioContainer>


                </div>
            </>
        );
    }
}
 
export default Home;
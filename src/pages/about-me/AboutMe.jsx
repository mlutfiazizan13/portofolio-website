import { Component, useEffect, useState } from "react";

const AboutMe = () => {

    return ( 
        
        <>
            {data ? (
                <div className="px-5 sm:px-14 xl:px-32 pb-10 pt-36"> 
                </div>
            ) : (
                
                <div className="px-5 sm:px-14 xl:px-32 pb-10 pt-36"> 
                    <p className="text-4xl">Loading</p>
                </div>
            )}
        </>
     );
}
 
export default AboutMe;
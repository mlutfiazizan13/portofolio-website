import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import porto_img from "../../assets/images/porto.png"
import { getPortofoliosBySlug } from "../../services/Service";

const PortofolioDetail = () => {
    let { name } = useParams();

    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getPortofoliosBySlug(name);
            // console.log(result.data.data[0].technology);
            console.log(result);
            setData(result);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return ( 
        
        <>
            {data ? (
                <div className="px-5 sm:px-14 xl:px-32 pb-10 pt-36"> 
                    <div className="mb-10 md:mb-20 text-white">
                        <p className="text-4xl font-bold pb-3">{data.name}</p>
                        <div className="flex gap-3"></div>
                        
                        <div className={` bg-center bg-no-repeat bg-cover h-[500px] w-full`} style={{backgroundImage: `url(${data.image})`}}></div>


                        <div className="pt-10">
                            <p>{data.desc}</p>
                        </div>
                    </div>
                </div>
            ) : (
                
                <div className="px-5 sm:px-14 xl:px-32 pb-10 pt-36"> 
                    <p>Loading</p>
                </div>
            )}
        </>
     );
}
 
export default PortofolioDetail;
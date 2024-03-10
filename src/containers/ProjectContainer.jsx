import { useEffect, useState } from "react";
import { getPortofolios } from "../services/Service";
import PortofolioCard from "../components/PortofolioCard";

const PortofolioContainer = () => {

    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getPortofolios();
            // console.log(result.data.data[0].technology);
            setData(result.data.data);
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
                 <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-10">
                    {data.map(({id,slug, name, teaserDesc , desc, image, technology}) => {
                        return <PortofolioCard key={id} id={id} name={name} slug={slug} teaserDesc={teaserDesc} desc={desc} image={image} technology={technology}/>
                    })}
                </div>
            ) : (
                <div>
                    <p>Loading</p>
                </div>
            )}
        </>
     );
}
 
export default PortofolioContainer;
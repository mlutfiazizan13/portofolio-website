import { useEffect, useState } from "react";
import { getTechnologies } from "../services/Service";
import TechnologyCard from "../components/TechnologyCard";

const TechnologyContainer = () => {

    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getTechnologies();
            // console.log(result.data);
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
                 <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-5">
                    {data.map(({id, name, type, image}) => {
                        return <TechnologyCard key={id} id={id} name={name} type={type} image={image}/>
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
 
export default TechnologyContainer;
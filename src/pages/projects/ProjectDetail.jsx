import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortofoliosBySlug } from "../../services/Service";

const PortofolioDetail = () => {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let { name } = useParams();

  const fetchData = async () => {
    try {
      const result = await getPortofoliosBySlug(name);
      // console.log(result.data.data[0].technology);
      console.log(result);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="px-5 pb-10 pt-36 sm:px-14 xl:px-32">
          <p className="text-3xl text-black">Loading</p>
        </div>
      ) : (
        <div className="px-5 pb-10 pt-36 sm:px-14 xl:px-32">
          <div className="mb-10 text-black md:mb-20">
            <p className="pb-3 text-4xl font-bold">{data.name}</p>
            <div className="flex gap-3"></div>

            <div
              className={`h-[500px] w-full bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>

            <div className="pt-10">
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortofolioDetail;

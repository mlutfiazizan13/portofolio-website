import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../../services/Service";
import Line from "../../components/Line";
import ContactSection from "../../containers/ContactSection";

const ProjectDetail = () => {


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let { name } = useParams();

  const fetchData = async () => {
    try {
      const result = await getProjectBySlug(name);
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
        <div
          id="container"
          className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
        >
          {isLoading ? (
            <div className="px-5 pb-10 pt-36 sm:px-14 xl:px-32">
              <p className="text-3xl text-black">Loading</p>
            </div>
          ) : (
            <section id="project-content" className="pb-10">
              <div className="flex h-full flex-col items-center text-black">
                <div className="relative mb-20">
                  <div
                    after=""
                    className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                  ></div>
                </div>
                <div className="text-center">
                  <div className="mb-12 text-center">
                    <p className="text-6xl md:text-8xl font-bold">{data.name}</p>
                  </div>
                  <div className="mb-12">
                    <p className="text-base font-medium tracking-wider">
                      Client : <span className="opacity-70">{data.client}</span> | Date :  <span className="opacity-70">{data.date}</span> | <span className="opacity-70">{data.type}</span>
                    </p>
                  </div>
                </div>

                <div className="text-center 2xl:px-60 pb-20">
                  <p className="text-xl">{data.desc}</p>
                </div>

                <div>
                    <img src={data.image} alt={data.name} className="mb-2" />

                    <div className="grid grid-cols-2 gap-2">
                      {data.images.map(({ id, name, image }) => {
                          return (
                            <div
                              key={id}
                              className=""
                            >
                              <img id={id} className="" src={image} alt={name} />

                            </div>
                          );
                        })}
                    </div>
                </div>
              </div>
          </section>
          )}
          <Line text="Similar Projects"></Line>
          
          <p className="my-20">-</p>
          <ContactSection></ContactSection>

        </div>

    </>
  );
};

export default ProjectDetail;

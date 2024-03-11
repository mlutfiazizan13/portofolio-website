import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, getProjectByTypeExceptId } from "../../services/Service";
import Line from "../../components/Line";
import ContactSection from "../../containers/ContactSection";
import ImageViewer from "../../components/ImageViewer";
import ProjectContainer from "../../containers/ProjectContainer";

const ProjectDetail = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [similarProject, setSimilarProject] = useState([]);

    let { name } = useParams();

    const fetchData = async () => {
        try {
        const result = await getProjectBySlug(name);
        const result2 = await getProjectByTypeExceptId(result.type, result.id);

        setData(result);
        setSimilarProject(result2);

        setLoading(false);
        } catch (error) {
        console.log("Error fetching data:", error);
        }
    }

    const openImageViewer = useCallback((image) => {
        setCurrentImage(image);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        // setCurrentImage(0);
        setIsViewerOpen(false);
    };

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
           <>
                 <section id="project-content" className="pb-5">
                    <div className="flex h-full flex-col items-center text-black">
                        <div className="relative mb-20">
                            <div
                                after=""
                                className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                            ></div>
                        </div>
                        <div className="text-center">
                            <div className="mb-5">
                                <nav className="flex justify-center" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="inline-flex items-center">
                                        <Link to={'/'} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                                            Home
                                        </Link>
                                        </li>
                                        <li>
                                        <div className="flex items-center">
                                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                            </svg>
                                            <Link to={'/projects'} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2">Projects</Link>
                                        </div>
                                        </li>
                                        <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                            </svg>
                                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">{data.name}</span>
                                        </div>
                                        </li>
                                    </ol>
                                </nav>

                            </div>
                            <div className="mb-12 text-center">
                                <p className="text-6xl md:text-8xl font-bold">{data.name}</p>
                            </div>
                            <div className="mb-12">
                                <p className="text-base font-medium tracking-wider">
                                Client : <span className="opacity-70">{data.client}</span> | Date :  <span className="opacity-70">{data.date}</span> | <span className="opacity-70">{data.type}</span>
                                </p>
                            </div>
                            </div>

                            <div className="text-center 2xl:px-60 pb-10 lg:pb-20">
                            <p className="text-xl">{data.desc}</p>
                        </div>

                      

                    </div>
                </section>


                <section className="mb-2">
                    <div className="flex justify-start gap-3">
                        <span className="font-medium"> Tech Stacks :</span>
                        {data.technology.map(({ id, name, image }, index) => {
                        return (
                            <div
                                key={id}
                                className=" text-black"
                                >
                                {name} {data.technology.length - index === 1 ? '' : ','}
                            </div>
                        );
                        })}
                    </div>
                </section>


                <section className="pb-10">
                    <div>
                        <img src={data.image} alt={data.name} className="mb-2" onClick={() => openImageViewer(data.image)}/>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {data.images.map(({ id, name, image }) => {
                                return (
                                    <div
                                    key={id}
                                    className=""
                                    onClick={() => openImageViewer(image)}
                                    >
                                    <img id={id} className="" src={image} alt={name} />

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
           </>
          
          )}
          <Line text="Similar Projects"></Line>

          <section className="pb-10 pt-14">

            <ProjectContainer projectList={similarProject}/>
                
          </section>
          
          <ContactSection></ContactSection>

        </div>


        {isViewerOpen && (
            <ImageViewer 
                image={currentImage}
                onClose={closeImageViewer}
            />
        )}
    </>
  );
};

export default ProjectDetail;

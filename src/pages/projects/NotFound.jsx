import { useEffect } from "react";
import ProjectContainer from "../../containers/ProjectContainer";

const NotFound = () => {

  useEffect(() => {
      document.title = 'NotFound - Lutfi°';
  }, []);
  return (
      <div
          id="container"
          className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
      >
          <section id="main-banner" className="pb-20">
            <div className="flex h-full flex-col items-center gap-5 text-black">
              <div className="relative">
                <div
                  after=""
                  className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                ></div>
              </div>
              <div className="text-center">
                <div className="mb-12 text-center">
                  <p className="text-6xl md:text-8xl font-bold">Not Found</p>
                </div>
                <p className="text-xl">Empowering Innovation, Connecting Futures.</p>
              </div>

            </div>
          </section>

      </div>
  );
};

export default NotFound;

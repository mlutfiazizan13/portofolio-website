
const Projects = () => {
  return (
      <div
          id="container"
          className="w-full overflow-hidden px-5 lg:pl-[5%] xl:pl-[15%] lg:pr-[calc(5%+90px)] xl:pr-[calc(15%+90px)] pb-20"
      >
          <section id="main-banner" className="">
            <div className="flex h-full flex-col items-center gap-5 text-black">
              <div className="relative">
                <div
                  after=""
                  className="h-[130px] w-[1px] bg-[#2021241a] after:absolute after:bottom-0 after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-[#323443] after:content-[attr(after)]"
                ></div>
              </div>
              <div className="text-center">
                <div className="mb-12 text-center">
                  <p className="text-6xl md:text-8xl font-bold">Projects</p>
                </div>
              </div>

            </div>
          </section>

          <section className="text-center mb-20">
            <p className="text-xl">I am a fullstack web developer, with 2,5 years experience. Proven ability to develop, test application, and collaborate in a team. I'm eager to learn, grow and improve my skills. I'm also a tech enthusiast, i love to learn tech related thing. I aim to be more skilled in software engineering and deliver impactful stuff to my customers.</p>
          </section>

      </div>
  );
};

export default Projects;

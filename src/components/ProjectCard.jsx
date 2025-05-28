import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link
      to={`/projects/${props.slug}`}
      id={props.id}
      className=""
    >
      <div className="relative overflow-hidden h-[350px] w-full">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-center scale-100 hover:scale-110 duration-200" 
            src={props.image} alt={`${props.name}`} />
      </div>
      <p className="pt-5 pb-1 uppercase text-sm font-bold opacity-50">{props.type}</p>
      <div className="flex justify-between items-center text-black gap-2">
        <p className="text-3xl font-bold">{props.name}</p>
        <div className="bg-[#323443] flex justify-center items-center text-lg text-white h-[40px] w-[40px] rounded-full scale-100 hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </div>

        {/* <div className="flex gap-3">

          {props.technology.map(({ id, name, image }) => {
            return (
              <div
                key={id}
                className="h-11 w-11  rounded-full bg-[#2021241a] text-black"
              >
                <img id={id} className="p-2" src={image} alt={name} />
              </div>
            );
          })}
        </div> */}
      </div>
    </Link>
  );
};

export default ProjectCard;

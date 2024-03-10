import { Link } from "react-router-dom";

const PortofolioCard = (props) => {
  return (
    <Link
      to={"/portofolio/" + props.slug}
      id={props.id}
      className="overflow-hidden"
    >
      <img src={props.image} alt={`${props.name}`} />
      <div className="py-6 text-black">
        <p className="mb-2 text-xl font-bold">{props.name}</p>
        <p className="mb-3 text-sm opacity-75">{props.teaserDesc}</p>

        <div className="flex gap-3">
          {/* {console.log(props.technology)} */}

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
        </div>
      </div>
    </Link>
  );
};

export default PortofolioCard;

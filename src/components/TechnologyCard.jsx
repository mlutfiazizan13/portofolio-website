const TechnologyCard = (props) => {
  return (
    <div id={props.id} className="h-full rounded-xl px-5 py-4 md:flex">
      <img
        className="mb-3 h-14 w-14 rounded-xl p-2 text-black md:mb-1 md:mr-3"
        src={props.image}
        alt={props.name}
      />
      <div className="text-black">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="opacity-75">{props.type}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;

const TechnologyCard = (props) => {
    return ( 
        <div id={props.id} className="md:flex bg-[#323443] h-full px-5 py-4 rounded-xl">
            <img className="bg-[#272727] text-white p-2 w-14 h-14 mb-3 md:mb-1 md:mr-3 rounded-xl" src={props.image} alt={props.name} />
            <div className="text-white">
                <p className="font-bold text-lg">{props.name}</p>
                <p className="opacity-75">{props.type}</p>
            </div>
        </div>
     );
}
 
export default TechnologyCard;
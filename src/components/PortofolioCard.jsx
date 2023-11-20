const PortofolioCard = (props) => {
    return ( 
        <div id={props.id} className="bg-[#323443] overflow-hidden rounded-xl">
            <img src={props.image} alt="" />
            <div className="px-10 py-6 text-white">
                <p className=" text-xl font-bold mb-2">{props.name}</p>
                <p className=" text-sm mb-3 opacity-75">{props.desc}</p>

                <div className="flex gap-3">
                    {/* {console.log(props.technology)} */}
                    
                    {props.technology.map(({id, name, image}) => {
                        return <img key={id} id={id} className="bg-[#272727] text-white p-2 w-10 h-10 rounded-xl" src={image} alt={name} />
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default PortofolioCard;
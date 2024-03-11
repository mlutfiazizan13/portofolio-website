import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ImageViewer = ({
    onClose,
    image
}) => {

    
    return ( 
        <>
            <div className="fixed top-0 h-screen w-full z-30 inset-0">
                <div className="absolute h-full w-full bg-black bg-opacity-70" onClick={onClose}>
                </div>
                <div className="flex flex-col justify-center h-full px-3 md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <p className="text-end text-white fa-xl mb-3 justify-self-end" onClick={onClose}><FontAwesomeIcon icon={faClose}/></p>
                    <img src={image} alt="" />
                </div>
            </div>
        </>
     );
}
 
export default ImageViewer;
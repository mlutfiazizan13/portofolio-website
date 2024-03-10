import { Link } from "react-router-dom";
import Line from "../components/Line";

const ContactSection = () => {
    return (
        <>
            <Line text="Contact"></Line> 
            <div className="text-center pb-20 pt-14">
                <p className="font-medium text-3xl mb-10">Let's Get In Touch!</p>

                <Link to={'/'} className="bg-[#323443] px-10 py-5 text-white">Contact Me</Link>
            </div>
        </>
     );
}
 
export default ContactSection;
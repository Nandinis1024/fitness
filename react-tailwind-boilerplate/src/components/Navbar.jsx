import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";

const options = [
    'Home',
    'Feature',
    'Courses',
    'Why Join Us?',
    'Contact',
    'Open Demo'
]

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mx-4 text-foreground py-4 mb-10 fixed top-0 left-0 right-0 z-30">

            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="w-24">
                Logo
            </div>

            <div className="flex space-x-10">
                {options && options.map((option, index) => {
                    return <div key={index} className="hover:cursor-pointer hover:text-primary">
                        {option}
                    </div>
                })}
            </div>

            <div className="flex space-x-6 w-24">
                <FaInstagram className="hover:text-primary h-5 w-5 hover:cursor-pointer"/>
                <FaTelegram className="hover:text-primary h-5 w-5 hover:cursor-pointer" />
                <FaYoutube className="hover:text-primary w-5 h-5 hover:cursor-pointer" />
            </div>
        </div>
    );
}

export default Navbar;
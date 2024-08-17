import { useEffect, useState } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Spotlight } from "./ui/spotlight";

const options = [
    'Home',
    'Features',
    'Courses',
    'Why Join Us?',
    'Contact',
    'Open Demo'
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`flex justify-between items-center px-4 text-foreground py-4 mb-10 fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${scrolled ? 'bg-black/80 shadow-md' : 'bg-transparent'}`}
        >
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="w-24 text-primary">
                P R A T E E K
            </div>

            <div className="flex space-x-10">
                {options && options.map((option, index) => (
                    <div key={index} className="hover:cursor-pointer hover:text-primary">
                        <a href={`#${option}`}>{option}</a>
                    </div>
                ))}
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

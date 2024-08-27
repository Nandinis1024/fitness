import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { Spotlight } from "./ui/spotlight";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const options = [
    'Home',
    'Features',
    'Courses',
    'Why Join Us?',
    'Contact'
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);
    const mobileNavRef = useRef(null); 
    const navRef = useRef(null);
    const [selected, setSelected] = useState(window.location.href.split('#')[1]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
                setOpenMobileNav(false);
            }
        };

        if (openMobileNav) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openMobileNav]);

    const handleMobileNavToggle = () => {
        setOpenMobileNav(prev => !prev);
    }

    return (
        <>
            <div 
                className={`flex justify-between items-center px-4 text-foreground py-4 mb-10 fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${scrolled || openMobileNav ? 'bg-black/90 shadow-md' : 'bg-transparent'} select-none`}
            >
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

                <div className="w-24 flex items-center gap-4 select-none" ref={navRef}>
                    <div className="flex lg:hidden cursor-pointer">
                        <HamburgerMenuIcon onClick={handleMobileNavToggle}></HamburgerMenuIcon>
                    </div>
                    LOGO
                </div>

                <div className="space-x-10 hidden lg:flex">
                    {options.map((option, index) => (
                        <div key={index} className={`hover:cursor-pointer hover:text-primary ${selected === option ? 'text-primary' : ''}`} onClick={() => setSelected(option)}>
                            <a href={`#${option}`}>{option}</a>
                        </div>
                    ))}
                    {/* Manually add Options Trading */}
                    <div className="hover:cursor-pointer hover:text-primary">
                        <a href={`https://optiontradingonly.in`}>Options Trading</a>
                    </div>
                </div>

                <div className="flex space-x-6 w-24">
                    <FaInstagram className="hover:text-primary h-5 w-5 hover:cursor-pointer"/>
                    <FaTelegram className="hover:text-primary h-5 w-5 hover:cursor-pointer" />
                    <FaYoutube className="hover:text-primary w-5 h-5 hover:cursor-pointer" />
                </div>
            </div>

            <div ref={mobileNavRef} className={`${openMobileNav ? 'flex' : 'hidden'} transition-all fixed top-10 select-none bg-black/90 text-primary-foreground w-screen justify-center z-30 py-6`}>
                <div className="space-y-6">
                    {options.map((option, index) => (
                        <div key={index} className="hover:cursor-pointer hover:text-primary">
                            <a href={`#${option}`}>{option}</a>
                        </div>
                    ))}
                    {/* Options Trading link for mobile nav */}
                    <div className="hover:cursor-pointer hover:text-primary flex gap-2">
                        <a href={`https://optiontradingonly.in`}>Options Trading</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

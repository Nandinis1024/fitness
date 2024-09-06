import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Bottombar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`fixed z-30 bottom-0 left-0 right-0 ${scrolled ? "bg-black/90" : "bg-black/90"} `}>
            <div className="px-5 py-3 flex items-center justify-between text-primary-foreground">
                <div className="flex items-center">
                    <p>Join my Personal Training Program <span className="hidden md:inline-flex">to start today!</span></p>
                </div>
                <a href="#Training"><Button>Learn More</Button></a>
            </div>
        </div>
    )
};
export default Bottombar
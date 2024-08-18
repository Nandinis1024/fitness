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
        <div className={`fixed z-30 bottom-0 left-0 right-0 ${scrolled ? "bg-black/90" : "bg-transparent"} `}>
            <div className="p-5  flex items-center justify-between text-primary-foreground">
                <div className="flex items-center">
                    <p>Join our LIVE CLASS <span className="hidden md:inline-flex">and learn how to trade in a simplified manner.</span></p>
                </div>
                <Button>Learn More</Button>
            </div>
        </div>
    )
};
export default Bottombar
import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer } from "./ui/3d-card";
import { BorderBeam } from "./magicui/border-beam";

const Feature = ({ feature }) => {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const handleMouseEnter = () => {
        if(!isMobile){
            setPlayVideo(true);
        }
    };

    const handleMouseLeave = () => {
        if(!isMobile){
            setPlayVideo(false);
        }
        
    };

    useEffect(() => {
        if (videoRef.current) {
            if (isMobile) {
                videoRef.current.loop = true;  // Set loop for mobile devices
                videoRef.current.play().catch((error) => {
                    console.error("Error attempting to play video:", error);
                });
            } else {
                if (playVideo) {
                    videoRef.current.play().catch((error) => {
                        console.error("Error attempting to play video:", error);
                    });
                } else {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }
        }
    }, [playVideo, isMobile]);

    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:h-auto h-[12rem] border dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] flex items-center justify-center cursor-pointer"
            >
                <div
                    className="relative flex items-center justify-center sm:w-[450px] sm:h-[250px] w-[350px] h-[200px] overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex items-center justify-center w-full h-full absolute transition-opacity duration-300 opacity-100">
                        <div className="text-primary-foreground text-2xl font-bold items-center justify-center">
                            {feature.title}
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        src={feature.source}
                        muted
                        className="w-fit h-fit transition-opacity duration-300 opacity-100"
                        playsInline
                    ></video>
                </div>
            </CardBody>
            <BorderBeam size={250} duration={12} delay={9} />
        </CardContainer>
    );
};

export default Feature;
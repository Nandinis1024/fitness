import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer } from "./ui/3d-card";
import { BorderBeam } from "./magicui/border-beam";

const Feature = ({ feature }) => {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    const handleInteraction = () => {
        setPlayVideo(prev => !prev);
    };

    useEffect(() => {
        if (videoRef.current) {
            if (playVideo) {
                videoRef.current.play().catch(error => {
                    console.error("Error attempting to play video:", error);
                });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [playVideo]);

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:h-auto  h-[12rem] border dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] flex items-center justify-center"
            >
                <div
                    className="relative flex items-center justify-center sm:w-[450px] sm:h-[250px] w-[350px] h-[200px] overflow-hidden"
                    onMouseEnter={!isTouchDevice ? handleInteraction : null}
                    onMouseLeave={!isTouchDevice ? handleInteraction : null}
                    onClick={handleInteraction}
                >
                    <div
                        className={`flex items-center justify-center w-full h-full absolute transition-opacity duration-300 ${playVideo ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <div className="text-primary text-2xl font-bold items-center justify-center">
                            {feature.title}
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        src={`fitnes.mp4`}
                        controls
                        muted
                        className={`w-full h-full transition-opacity duration-300 ${playVideo ? 'opacity-100' : 'opacity-0 object-cover my-2'}`}
                    ></video>
                </div>
            </CardBody>
            <BorderBeam size={250} duration={12} delay={9} />
        </CardContainer>
    );
};

export default Feature;

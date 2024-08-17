import React, { useEffect, useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BorderBeam } from "./magicui/border-beam";
import ShineBorder from "./magicui/shine-border";
import { FollowerPointerCard, FollowPointer } from "./ui/following-pointer";

const Feature = ({ feature }) => {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setPlayVideo(true);
    };

    const handleMouseLeave = () => {
        setPlayVideo(false);
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

    return (
        <FollowerPointerCard>
            <CardContainer className="inter-var">
                <CardBody
                    className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:h-auto  h-[12rem] border dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] flex items-center justify-center"
                >
                    <div
                        className="relative flex items-center justify-center sm:w-[450px] sm:h-[250px] w-[350px] h-[200px] overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`flex items-center justify-center w-full h-full absolute transition-opacity duration-300 ${playVideo ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <div className="text-primary text-2xl font-bold">
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
        </FollowerPointerCard>
    );
};

export default Feature;


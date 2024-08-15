import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BorderBeam } from "./magicui/border-beam";
import ShineBorder from "./magicui/shine-border";
import { FollowerPointerCard, FollowPointer } from "./ui/following-pointer";

const Feature = ({ feature }) => {
    const [playVideo, setPlayVideo] = useState(false);

    const handleMouseEnter = () => {
        setPlayVideo(true);
    };

    const handleMouseLeave = () => {
        setPlayVideo(false);
    };

    return (
        <FollowerPointerCard>
            <CardContainer className="inter-var">
                <CardBody
                    className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[29.5rem] h-auto border dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] flex items-center justify-center"
                >
                    <div
                        className="relative flex items-center justify-center w-[450px] h-[250px] overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={`flex items-center justify-center w-full h-full absolute transition-opacity duration-300 ${playVideo ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <div className="text-primary text-lg font-bold">
                              {feature.title}
                            </div>
                        </div>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`${feature.source}?autoplay=${playVideo ? 1 : 0}&mute=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={`transition-opacity duration-300 ${playVideo ? 'opacity-100' : 'opacity-0'}`}
                        ></iframe>
                    </div>
                </CardBody>
                <BorderBeam size={250} duration={12} delay={9} />
            </CardContainer>
        </FollowerPointerCard>
    );
};

export default Feature;

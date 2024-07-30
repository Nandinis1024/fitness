import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BorderBeam } from "./magicui/border-beam";
import ShineBorder from "./magicui/shine-border";
import { FollowerPointerCard, FollowPointer } from "./ui/following-pointer";

const Feature = (feature) => {
    return (
      <FollowerPointerCard>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white shadow"
            >
            {feature.title}
            </CardItem>
            <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            {feature.description}
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            <CardItem
                translateZ={20}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-orange-500"
            >
                Try now →
            </CardItem>
            </div>
          </CardBody>
          <BorderBeam size={250} duration={12} delay={9} />
      </CardContainer>
      </FollowerPointerCard>
    )
};

export default Feature;
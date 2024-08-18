import React from "react";
import { features } from "@/constants";
import Feature from "./Feature";


const Features = () => {
    return (
        <div id="Features" className="flex flex-col items-center justify-center h-[100%] w-[100%] overflow-hidden p-10">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-foreground mt-10 mb-2 select-none">
                Workout Basics
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 gap-y-[2px] mt-2 h-full">
            {features.map((feature, index) => (
                <Feature key={index} feature={feature} />
            ))}
            </div>
        </div>
    );
};
export default Features;
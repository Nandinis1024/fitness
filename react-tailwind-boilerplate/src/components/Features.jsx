import React from "react";
import { features } from "@/constants";
import Feature from "./Feature";


const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[100%] w-[100%] overflow-hidden">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-foreground">
                Workout Basics
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 h-full">
            {features.map((feature, index) => (
                <Feature key={index} {...feature} />
            ))}
            </div>
        </div>
    );
};
export default Features;
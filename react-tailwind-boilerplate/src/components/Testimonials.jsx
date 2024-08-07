import React, { useEffect, useState } from "react";
import { testimonials } from "@/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* <h1 className="text-4xl font-bold text-neutral-900 dark:text-foreground m-5"> Client Stories </h1> */}
      <div className="flex flex-col items-center justify-between gap-10">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
      </div>
    </div>
  );
}

export default Testimonials;

import React, { useEffect, useState } from "react";
import { testimonials1, testimonials2} from "@/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
  return (
    <div id="Why Join Us?" className="mt-6 h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-foreground mt-16 mb-12 select-none"> Client Stories </h1>
      <div className="flex flex-col items-center justify-between gap-10">
      <InfiniteMovingCards
        items={testimonials1}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials2}
        direction="left"
        speed="slow"
      />
      </div>
    </div>
  );
}

export default Testimonials;

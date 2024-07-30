import { motion } from "framer-motion";
import BoxReveal from "./magicui/box-reveal";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import { ImagesSlider } from "./ui/images-slider";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


const Course = ()=>{
  return (
    <div className="flex justify-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white" />
      <div className="h-lvh w-lvh max-w-[90rem] flex flex-col justify-center pt-8">
      <ImagesSlider className="max-h-[20rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Buy now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>

      
       <BackgroundGradient className="  p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <h2 className="mt-[.5rem] text-[1rem] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl nulla, viverra in orci maximus, posuere sodales elit. {" "}
            <span className="text-orange-500">Mauris commodo finibus.</span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <h2 className="mt-[.5rem] text-[1rem] text-white">
          In molestie massa sed justo rhoncus ultrices. Phasellus semper elementum magna, scelerisque ornare nisl dictum consequat. Ut volutpat varius lacus id porttitor. Nunc et odio venenatis, sodales dui non, tincidunt eros. Morbi facilisis lacus sit amet velit sodales, aliquam lacinia odio varius. Duis ac lobortis magna. Proin dictum ut mauris finibus mattis. Donec id lacinia nibh. Mauris venenatis ligula a massa viverra placerat. Vestibulum semper massa sit amet justo consequat, eget faucibus sapien mattis. Proin porttitor, massa non venenatis posuere, eros elit interdum ex, ac pretium eros ipsum sit amet velit. Vestibulum non tortor dui. Cras sodales dignissim risus id ultrices.
          </h2>
        </BoxReveal>
    
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <div className="mt-[1.5rem]">
            <p className="text-white">
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-orange-500"> React</span>,
              <span className="font-semibold text-orange-500"> Typescript</span>,
              <span className="font-semibold text-orange-500"> Tailwind CSS</span>,
              and
              <span className="font-semibold text-orange-500"> Framer Motion</span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal>
        </BackgroundGradient>
      </div>
      </div>
    );
};
export default Course;
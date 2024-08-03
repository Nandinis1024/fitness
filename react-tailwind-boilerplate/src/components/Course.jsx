import { motion } from "framer-motion";
import BoxReveal from "./magicui/box-reveal";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import Carousel from 'react-spring-3d-carousel';




const Course = ()=>{
  return (
    <div className="flex justify-center">

      <div className="h-lvh w-lvh max-w-[80rem] flex flex-col items-center justify-start pt-8">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-foreground m-5"> About Course </h1>
        
       <BackgroundGradient className="  p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
        <div>
         {/* <img src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" alt="image" />  */}
        </div>
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <h2 className="mt-[.5rem] text-[1rem] text-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl nulla, viverra in orci maximus, posuere sodales elit. {" "}
            <span className="text-primary">Mauris commodo finibus.</span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <h2 className="mt-[.5rem] text-[1rem] text-foreground">
          In molestie massa sed justo rhoncus ultrices. Phasellus semper elementum magna, scelerisque ornare nisl dictum consequat. Ut volutpat varius lacus id porttitor. Nunc et odio venenatis, sodales dui non, tincidunt eros. Morbi facilisis lacus sit amet velit sodales, aliquam lacinia odio varius. Duis ac lobortis magna. Proin dictum ut mauris finibus mattis. Donec id lacinia nibh. Mauris venenatis ligula a massa viverra placerat. Vestibulum semper massa sit amet justo consequat, eget faucibus sapien mattis. Proin porttitor, massa non venenatis posuere, eros elit interdum ex, ac pretium eros ipsum sit amet velit. Vestibulum non tortor dui. Cras sodales dignissim risus id ultrices.
          </h2>
        </BoxReveal>
    
        <BoxReveal boxColor={"240 10% 3.9%"} duration={1.0}>
          <div className="mt-[1.5rem]">
            <p className="text-foreground">
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-primary"> React</span>,
              <span className="font-semibold text-primary"> Typescript</span>,
              <span className="font-semibold text-primary"> Tailwind CSS</span>,
              and
              <span className="font-semibold text-primary"> Framer Motion</span>
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
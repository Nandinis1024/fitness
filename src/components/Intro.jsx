import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FiUsers, FiYoutube } from 'react-icons/fi';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import TypingAnimation from "./magicui/typing-animation"
import no from "/no.jpg"
import img1 from "/prateek-intro-1.jpg"
import img2 from "/prateek-intro-2.jpg"

const bounceAnimation = `
  @keyframes bounceHorizontal {
    0%, 100% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(35px); /* Adjust the bounce distance */
    }
  }
`;

const Intro = ()=> {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true})
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[88.5%] mx-auto my-auto md:pt-7 bg-transparent"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {/* <style>{bounceAnimation}</style> */}
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="md:p-1">
              <Card>
                <CardContent className="flex w-full h-[650px] sm:mb-0 -mb-16 items-center justify-center">
                  {index === 0 ? 
                    
                      <div className="flex flex-row justify-center xl:justify-between">
                        <div className="space-y-5 md:pt-10">
                            <h1 className="font-bold tracking-tighter text-5xl md:text-7xl">Fitnesss Begins with a<span className="text-blue-500"> Single </span>Step</h1>
                            <p className="max-w-md text-muted-foreground sm:text-lg md:text-xl">Prateek Varshney, a renowned fitness trainer, is here to guide you on your journey to a healthier, stronger you.</p>
                            
                            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center">
                              <div className="bg-transparent shadow-lg rounded-full w-40 h-20 md:w-60 flex flex-col pt-10">
                                <div className="flex justify-center sm:justify-start items-center">
                                  <div className="flex flex-col justify-center items-center">
                                    <FiUsers className="text-xl md:text-4xl mb-2" />
                                    <div className="text-lg md:text-2xl font-bold">500+</div>
                                    <div className="text-md md:text-lg text-blue-500">Clients Trained</div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-transparent shadow-lg rounded-full w-40 h-20 md:w-60 flex flex-col pt-10">
                                <div className="flex justify-center sm:justify-start items-center">
                                  <div className="flex flex-col justify-center items-center">
                                    <FiYoutube className="text-xl md:text-4xl mb-2"/>
                                    <div className="text-lg md:text-2xl font-bold">1 Lakh+</div>
                                    <div className="text-md md:text-lg text-blue-500">Total Followers</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <img
                          src={img2}
                          width="500"
                          height="400"
                          alt="Prateek Varshney"
                          className="rounded-full object-cover hidden lg:flex lg:h-[450px] lg:w-[460px] xl:h-[514px] xl:w-[500px]"
                          style={{ aspectRatio: "400/400", objectFit: "cover"}}
                        />
                      </div>
                    : 
                      <div className="flex flex-row justify-center xl:justify-between">
                          <div className="space-y-10 md:pt-10">
                              <h1 className="font-bold tracking-tighter text-5xl md:text-8xl">Unleash Your <span  className="text-primary"> Fitness</span> Potential</h1>
                              <p className="max-w-3xl text-muted-foreground sm:text-lg md:text-xl">With years of experience and a passion for helping others, Prateek specializes in personalized fitness plans tailored to your goals. Join him today and take the first step towards transforming your body and mind!</p>
                              <div className="flex space-x-2 pt-5">
                                <a href="#Features"><Button className="text-md bg-primary">Explore</Button></a>
                                <a href="#Training"><Button className="text-muted-foreground text-md" variant="primary">Learn More</Button></a>
                              </div>
                          </div>

                          {/* <img
                            src={img1}
                            alt="Prateek Varshney"
                            className="rounded-full object-cover hidden lg:flex lg:h-[450px] lg:w-[460px] xl:h-[514px] xl:w-[500px]"
                            style={{ aspectRatio: "400/400", objectFit: "cover"}}
                          /> */}
                      </div>
                }
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default Intro

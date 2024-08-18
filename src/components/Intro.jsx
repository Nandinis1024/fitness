import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { IoLogoGooglePlaystore } from "react-icons/io5";

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
    Autoplay({ delay: 4000})
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[88.5%] mx-auto my-auto pt-7 bg-transparent"
    >
      {/* <style>{bounceAnimation}</style> */}
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex w-[100%] h-[450px] md:h-[650px] items-center justify-center p-6 overflow-hidden">
                   {index === 0 ? 
                    <div className="flex sm:flex-col md:flex-row gap-2">
                        <div className="space-y-5 pt-10">
                            <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-7xl">Unleash Your <span  className="text-orange-500"> Fitness</span> Potential</h1>
                            <p className="max-w-md text-muted-foreground sm:text-lg md:text-xl">Prateek Varshney, a renowned fitness trainer, is here to guide you on your journey to a healthier, stronger you.</p>
                            <div className="flex space-x-2">
                            <a href="#Home"><Button className="text-sm sm:text-md">Explore</Button></a>
                            <a href="#Home"><Button className="text-muted-foreground text-sm sm:text-md" variant="primary">Learn More</Button></a>
                              </div>
                              <div className="flex space-x-5 cursor-pointer">
                                <IoLogoGooglePlaystore className="text-muted-foreground hover:text-primary"/>

                                <IoLogoGooglePlaystore className="h-[150px] w-[150px]  text-muted-foreground hover:text-primary"/>
                            </div>
                          </div>
                        <img
                        src="https://www.primefitnessusa.com/cdn/shop/files/ro-t8-handles-banner_1920x820_crop_right.jpg?v=1626980099"
                        width="500"
                        height="400"
                        alt="Prateek Varshney"
                        className="rounded-full object-cover"
                        style={{ aspectRatio: "400/400", objectFit: "cover"}}
                       />
                    </div>
                    : 
                    <div className="flex sm:flex-col md:flex-row justify-evenly gap-20">
                        <div className="space-y-5 pt-10">
                            <h1 className="font-bold tracking-tighter text-4xl  sm:text-5xl md:text-7xl">Unleash Your <span  className="text-blue-500">Trading</span> Potential</h1>
                            <p className="max-w-md text-muted-foreground sm:text-lg md:text-xl">Prateek Varshney, a renowned trading expert, is here to guide you on your journey to a successfull, Options Trading career.</p>
                            <div className="flex space-x-2">
                            <a href="https://optiontradingonly.in/"><Button className="bg-blue-500 text-sm sm:text-md hover:bg-blue-600">Explore</Button></a>
                            <a href="https://optiontradingonly.in/"><Button className="text-muted-foreground text-sm sm:text-md" variant="primary">Learn More</Button></a>
                            </div>
                            <div className="flex space-x-5 cursor-pointer">
                                <IoLogoGooglePlaystore className="text-muted-foreground hover:text-primary"/>

                                <IoLogoGooglePlaystore className="h-[150px] w-[150px]  text-muted-foreground hover:text-primary"/>
                            </div>
                        </div>
                        <img
                        src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
                        width="500"
                        height="400"
                        alt="Prateek Varshney"
                        className="rounded-full object-cover"
                        style={{ aspectRatio: "400/400", objectFit: "cover"}}
                    />
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

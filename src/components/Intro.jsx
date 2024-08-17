import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"

const Intro = ()=> {
  const plugin = React.useRef(
    Autoplay({ delay: 5000})
  )

  return (
    <div className="w-screen h-screen">
    <Carousel
      plugins={[plugin.current]}
      className="w-[1440px] mx-auto my-auto pt-7 bg-transparent"
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex w-full h-[650px] items-center justify-center p-6">
                   {index === 0 ? 
                    <div className="flex justify-evenly gap-20">
                        <div className="space-y-5 pt-10">
                            <h1 className="font-bold tracking-tighter sm:text-5xl md:text-6xl">Unleash your <span  className="text-orange-500">Fitness</span> Potential</h1>
                            <p className="max-w-md text-muted-foreground sm:text-lg md:text-xl">Prateek Varshney, a renowned fitness trainer, is here to guide you on your journey to a healthier, stronger you.</p>
                            <div className="flex space-x-2">
                            <Button className="">Explore</Button>
                            <Button className="text-muted-foreground" variant="primary">Learn More</Button>
                            </div>
                        </div>
                        <img
                        src="https://www.primefitnessusa.com/cdn/shop/files/ro-t8-handles-banner_1920x820_crop_right.jpg?v=1626980099"
                        width="400"
                        height="400"
                        alt="Prateek Varshney"
                        className="rounded-full object-cover"
                        style={{ aspectRatio: "400/400", objectFit: "cover" }}
                       />
                    </div>
                    : 
                    <div className="flex justify-evenly gap-20">
                        <div className="space-y-5 pt-10">
                            <h1 className="font-bold tracking-tighter sm:text-5xl md:text-6xl">Unleash your <span  className="text-blue-500">Trading</span> Potential</h1>
                            <p className="max-w-md text-muted-foreground sm:text-lg md:text-xl">Prateek Varshney, a renowned trading expert, is here to guide you on your journey to a successfull, Options Trading career.</p>
                            <div className="flex space-x-2">
                            <Button className="bg-blue-500">Explore</Button>
                            <Button className="text-muted-foreground" variant="primary">Learn More</Button>
                            </div>
                        </div>
                        <img
                        src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
                        width="400"
                        height="400"
                        alt="Prateek Varshney"
                        className="rounded-full object-cover"
                        style={{ aspectRatio: "400/400", objectFit: "cover" }}
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
    </div>
  )
}
export default Intro

import { Button } from "@/components/ui/button"

export default function Course() {
  return (
    <div className="flex flex-col min-h-[100dvh] text-white">
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video">
        <video className="w-full h-full object-cover">
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-between p-6">
          <div className="text-lg font-semibold">Course: Web Development Masterclass</div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">Duration: 2h 15m</div>
            <Button className="px-6 py-2 rounded-md bg-[#ff6b00] text-black font-medium hover:bg-[#d95b00] cursor-pointer">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 max-w-2xl mx-auto"> 
        <h2 className="text-2xl font-bold mb-4">Course Description</h2>
        <p className="text-gray-300">
          In this comprehensive web development masterclass, you'll learn everything you need to know to build modern,
          responsive websites and web applications. From HTML and CSS to JavaScript and React, this course covers all
          the essential skills and technologies to become a proficient web developer.
        </p>
      </div>
    </div>
  )
}
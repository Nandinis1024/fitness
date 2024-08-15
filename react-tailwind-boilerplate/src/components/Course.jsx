import { useEffect, useRef, useState } from "react";

const Course = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoVisible(prevState => !prevState);
  };

  return (
    <div id="Courses" className="flex flex-col min-h-[100dvh] text-white pt-20">
      <div
        className="relative h-full w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video cursor-pointer"
        onClick={handlePlayVideo}
      >
        {isVideoVisible ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XdoN2vFnJHE?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <button className="px-6 py-2 rounded-md bg-[#ff6b00] text-black font-medium hover:bg-[#d95b00] cursor-pointer">
              Watch Now
            </button>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-between p-3">
          <div className="text-lg font-semibold">Course: Web Development Masterclass</div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">Duration: 15m</div>
            <button className="px-6 py-2 rounded-md bg-[#ff6b00] text-black font-medium hover:bg-[#d95b00] cursor-pointer">
              Buy Now
            </button>
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
  );
}

export default Course;


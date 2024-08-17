import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Course = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Create a script element to load the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define the function that will be called when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'PLzltoJu-08',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    return () => {
      // Cleanup the YouTube API script if the component unmounts
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  };

  const stopVideo = () => {
    if (playerRef.current) {
      playerRef.current.stopVideo();
    }
  };

  return (
    <div id="Courses" className="flex flex-col min-h-[100dvh] text-white pt-20">
      <div
        id="player-container"
        className="relative h-full w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video"
      >
        <div
          id="player"
          className="absolute top-0 left-0 h-full w-full"
        ></div>
        <Button className="absolute bottom-4 right-4 text-black z-50 bg-[#ff6b00] hover:bg-[#d95b00] px-6 py-2 rounded-md">
          Buy Now
        </Button>
      </div>
      <div className="px-6 py-8 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-[3xl] font-bold mb-4">Course Description</h2>
        <p className="sm:text-lg text-muted-foreground">
          In this comprehensive web development masterclass, you'll learn everything you need to know to build modern,
          responsive websites and web applications. From HTML and CSS to JavaScript and React, this course covers all
          the essential skills and technologies to become a proficient web developer.
        </p>
      </div>
    </div>
  );
};

export default Course;




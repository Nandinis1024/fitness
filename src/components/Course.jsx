import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";

const Course = () => {
  const playerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(0); 

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
        videoId: 'oMHxrJ_Nsmk',
        playerVars: {
          playsinline: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
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

  useEffect(() => {
    checkout();
  }, [isRazorpayLoaded]);

  const checkout = () => {
    const formContainer = document.getElementById('razorpay-form');

    if (formContainer) {
      const divs = formContainer.querySelectorAll('div');
      
      if(formContainer.firstChild) {
        divs.forEach(div => {
          div.innerHTML = 'Buy Now' 
          formContainer.style.visibility = 'visible'
        })
      } 

      if(!formContainer.firstChild) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_Ot4NMuGjXYc01Z');
        script.async = true;
        formContainer.style.visibility = 'hidden'
        formContainer.appendChild(script)
      }

      buttonRef.current?.click();
    } else {
      console.error("Razorpay form container not found.");
    }
  }

  const upd = () => {
    setIsRazorpayLoaded(prev => prev + 1);
  };

  const handleMail = () => {
    const email = 'prateekvarshney1224@gmail.com';
    const subject = 'Hello!';
    const body = 'Lets Transform';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }


  return (
    <div
      id="Training"
      className="flex flex-col w-[90%] mx-auto text-white pt-20 sm:h-auto  justify-between"
    >
      <div
        id="player-container"
        className="relative h-full w-full max-w-3xl mx-auto overflow-hidden rounded-lg aspect-video"
      >
        <div
          id="player"
          className="absolute top-0 left-0 h-full w-full"
        ></div>
        {/* <Button className="absolute bottom-4 right-4 text-black z-50 bg-[#ff6b00] hover:bg-[#d95b00] px-6 py-2 rounded-md">
          Buy Now
        </Button> */}
      </div>
      <div className="px-6 py-8 max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between mb-4 relative">
          <h2 className="text-2xl sm:text-[3xl] font-bold">Training Program Details </h2>

          <form id="razorpay-form"></form>  
          
          {/* <Button className="text-black12 bg-[#ff6b00] hover:bg-[#d95b00] px-6 py-2 rounded-md" onClick={handleCheckout}>
            Buy Now
          </Button> */}
        </div>
        <p className="sm:text-lg text-muted-foreground">
        <span className="text-gray-300">Duration:</span> 3 Months<br/>

        <span className="text-gray-300">Language:</span> Hindi/English (as per your choice)<br/>

        <span className="text-gray-300">Gender:</span> Suitable for both men & women<br/>

        <span className="text-gray-300">Deliverables:</span> Custom Workout program as per your skillset and goal, help in diet using easy and small changes in your daily diet<br/>
        <br/>
        
        <span className="text-gray-300">What can you expect from this program?</span><br/>
        - Fat Loss, Muscle Building, Bulking (as per your goal)<br/>
        - ⁠Getting your first Pull up<br/>
        - ⁠Push-up variations like explosive push ups, Clap Push ups, Aztec Pushups, Kuki Pushups and more<br/>
        - ⁠Pull-up variations like Muscle up, Muscle up 360, Explosive pullups, Single Hand pull ups and more<br/>
        - ⁠Unique Skills like handstand, Human flag, Backflips, Front flips, Wall flips and more<br/>
        - ⁠Flexibility & Mobility exercises to be actually fit<br/>
        - ⁠Skin & Hair tips and tricks<br/>
        - ⁠Overall Personality development <br/>
        - ⁠Infinite Boost of motivation from me<br/>
        - ⁠A new Confidence boost<br/><br/>

        In a duration of 3 months, you will be able to see yourself unlock some strength, some skills and see your body be better than before.<br/><br/>

        We will be connected through Whatsapp/Instagram directly during the course of the training program to provide you the most convenient experience.<br/><br/>

        <span className="text-gray-300">Simply make the payment by clicking on Buy Now and share the screenshot at <span className="cursor-pointer  underline" onClick={handleMail} > mail ID </span> or at <span className="underline"><a href="https://www.instagram.com/this_is_varshney">instagram.</a></span></span><br/>
        </p>
      </div>
      <div className="hidden">{isRazorpayLoaded}</div>
      <Button className="hidden" ref={buttonRef} onClick={() => upd()}></Button>
    </div>
  );
};

export default Course;
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdStarBorderPurple500 } from "react-icons/md";
import Last from "../Anime/Last.json"
import Lottie from 'react-lottie-player';

const Thanks = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    // GSAP animation for typing effect
    gsap.to('.thanks-text', {
      text: 'Thanks for the visiting....!', // Text to animate
      duration: 3,                          // Duration of the animation
      ease: 'power1.inOut',                 // Smooth animation
      scrollTrigger: {
        trigger: '.thanks-text',            // Element to trigger the animation
        start: 'top 80%',                   // Trigger when top of element hits 80% of viewport
        end: 'bottom 60%',                  // End trigger (not really needed here)
        toggleActions: 'play none none none', // Play animation on scroll
        markers: false,                     // Enable markers for debugging
      },
    });
  }, []);

  return (
    <div className="bg-primary w-full min-h-[90vh] md:h-screen overflow-hidden flex items-center justify-center relative">
        <div className='absolute'> 
        <Lottie
            animationData={Last}
            loop
            className="w-[80%] md:w-[60%] lg:w-full"
          />
        </div>
      <h1 className="font-alfa lg:text-8xl sm:text-4xl text-3xl thanks-text">
        {/* Initial empty content */}
      </h1>
        <MdStarBorderPurple500 className='text-2xl' />
    </div>
  );
};

export default Thanks;

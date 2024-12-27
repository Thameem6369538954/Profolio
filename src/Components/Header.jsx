import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger for scroll-based animations
import X from "../Images/X.png"; // Assuming you're using this image for decoration

const Header = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Split the text into individual letters and wrap each letter in a span
    const textElement = document.querySelector('.animate-text');
    const letters = textElement.innerText.split('').map(letter => `<span class="letter">${letter}</span>`).join('');
    
    // Replace the text content with the letter-wrapped span
    textElement.innerHTML = letters;

    // GSAP animation for typing effect horizontally
    gsap.from('.letter', {
      opacity: 0,            // Start with text hidden
      x: -30,                // Start from the left
      duration: 2,           // Duration of animation for each letter
      stagger: 0.05,         // Delay between each letter
      ease: "power2.out",    // Smooth ease effect
    });

    // ScrollTrigger animation for the sticky text to move horizontally
    gsap.to('.animate-text', {
      scrollTrigger: {
        trigger: '.animate-text',  // The element that triggers the animation
        start: 'top center',       // When the top of the element hits the center of the viewport
        end: 'bottom top',         // Animation ends when the top of the element reaches the top of the viewport
        scrub: 1,                  // Smoothly scrub the animation with the scroll
        markers: false,            // Disable markers for debugging
      },
      x: '10vw',                 // Move the text to 50% of the viewport width (center)
      ease: 'none',              // Linear motion during scroll
      duration: 3,               // Slow down the scroll movement
    });
  }, []);

  return (
    <div className="relative">
      <div className="bg-primary w-full h-screen overflow-hidden">
        <div className="flex items-center justify-center relative min-h-[100vh] ">
          {/* Positioned images */}
          <div className='flex items-center justify-center absolute top-[37%] md:right-[75%] right-[65%] gap-1'>
            <img src={X} className="md:w-[30px] w-[20px]" alt="X" />
            <img src={X} className="md:w-[30px] w-[20px]" alt="X" />
            <img src={X} className="md:w-[30px] w-[20px]" alt="X" />
            <img src={X} className="md:w-[30px] w-[20px]" alt="X" />
            <img src={X} className="md:w-[30px] w-[20px]" alt="X" />
          </div>

          <div className='flex items-center justify-center gap-1 absolute left-[80%] top-[60%]'>
            <img src={X} className="w-[20px]" alt="X" />
            <img src={X} className="w-[20px]" alt="X" />
            <img src={X} className="w-[20px]" alt="X" />
            <img src={X} className="w-[20px]" alt="X" />
            <img src={X} className="w-[20px]" alt="X" /> 
          </div>

          {/* Sticky Header with GSAP Animation */}
          <h1 className="md:text-6xl lg:text-8xl sm:text-5xl text-4xl w-full font-alfa  text-center sticky top-0 animate-text">
            Welcome to my portfolio
          </h1>
        </div>
        
      </div>
    </div>
  );
};

export default Header;

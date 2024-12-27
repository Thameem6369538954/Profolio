import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'react-lottie-player';
import SkillsAni from '../Anime/SkillsAni.json';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  const animateText = (ref) => {
    const elements = ref.current.querySelectorAll('li, h1');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  };

  useEffect(() => {
    animateText(frontendRef);
    animateText(backendRef);
  }, []);

  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden">
      {/* Header */}
      <div className="relative border-b pb-5">
        <h1 className="font-built text-5xl md:text-7xl text-left p-5">
          Skills
        </h1>
      </div>

      {/* Content */}
      <div className=" flex-col md:flex md:flex-row justify-center items-center gap-8 px-4 md:px-10 lg:px-20 mt-10">

        <div className="flex  justify-center items-center gap-8 px-4 md:px-10 lg:px-20 mt-10">
        {/* Frontend Skills */}
        <div
          ref={frontendRef}
          className="flex flex-col items-start w-full"
        >
          <h1 className="font-built text-3xl md:text-5xl lg:text-7xl p-2">
            Frontend
          </h1>
          <ul className="p-4 grid gap-4 font-Verna text-xl md:text-3xl lg:text-5xl">
            <li>HTML</li>
            <li>CSS (Tailwind)</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Backend Skills */}
        <div
          ref={backendRef}
          className="flex flex-col items-start w-full lg:w-1/3"
        >
          <h1 className="font-built text-3xl md:text-5xl lg:text-7xl p-2">
            Backend
          </h1>
          <ul className="p-4 grid gap-4 font-Verna text-xl md:text-3xl lg:text-5xl">
            <li>Express JS</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>AWS</li>
            <li>Postman</li>
          </ul>
        </div>

        </div>

        {/* Lottie Animation */}
        <div className="flex items-center justify-center w-full lg:w-1/3">
          <Lottie
            animationData={SkillsAni}
            play
            loop
            className="w-[80%] md:w-[60%] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

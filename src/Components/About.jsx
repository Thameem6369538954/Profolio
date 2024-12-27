import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ME from "../Images/ME.jpeg";
import Screw from "../Images/Screw.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.textContent;
    textRef.current.textContent = '';

    const letters = text.split('').map((letter) =>
      letter === ' ' ? `<span>&nbsp;</span>` : `<span>${letter}</span>`
    );
    textRef.current.innerHTML = letters.join('');

    const spans = textRef.current.querySelectorAll('span');

    gsap.fromTo(
      spans,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  return (
    <div className="bg-primary w-full min-h-[100vh] relative p-8">
      <div className="relative border-b pb-5">
        <h1
          className="font-built text-5xl md:text-7xl text-center"
          ref={textRef}
        >
          About ME
        </h1>
      </div>

      <div className="lg:grid grid-cols-2 gap-10 items-center justify-center mt-10">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center">
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[70%]">
            <img
              ref={imageRef}
              src={ME}
              className="rounded-lg shadow-xl transform transition duration-500 w-full"
              alt="Animated Image"
            />
            {/* Decorative Screws */}
            <img src={Screw} className="absolute w-[8%] top-3 left-3" alt="" />
            <img src={Screw} className="absolute w-[8%] bottom-3 left-3" alt="" />
            <img src={Screw} className="absolute w-[8%] top-3 right-3" alt="" />
            <img src={Screw} className="absolute w-[8%] bottom-3 right-3" alt="" />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col items-start justify-center gap-6 p-5">
          <h1 className="font-built text-4xl md:text-6xl">
            Are you ready to discover about me?
          </h1>
          <p className="font-Verna text-lg md:text-2xl leading-relaxed">
            Hi everyone! 👋 <br />
            I’m <strong>Thameem Ansari</strong>, a passionate Full Stack Developer with a knack for building dynamic and user-friendly applications. I’m 23 years old and proudly hail from Tamil Nadu, the land of rich culture and innovation. 🚀
          </p>
          <p className="font-Verna text-lg md:text-2xl leading-relaxed">
            I love creating web experiences that blend technology and creativity seamlessly. Let’s connect, collaborate, and build something amazing together!
          </p>
          <div>
            <h2 className="font-built text-2xl md:text-4xl mb-3">Contact</h2>
            <div className="border-b-2 w-full mb-4"></div>
            <p className="font-Verna text-lg md:text-2xl">
              Phone No: <span className="font-semibold">91+ 6369538954</span>
            </p>
            <p className="font-Verna text-lg md:text-2xl">
              Email: <span className="font-semibold"><a href="mailto:thameemrpp@gmail.com" className="hover:text-blue-500 transition">thameemrpp@gmail.com</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

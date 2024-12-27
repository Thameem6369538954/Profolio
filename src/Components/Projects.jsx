import React from 'react'
import specslan from "../PrImages/specslan.png"
import AL from "../PrImages/AL.png"
import Cov from "../PrImages/Cov.png"
import CXO from "../PrImages/CXO.png"
const Projects = () => {
  return (
    <div>
         <div className='bg-primary w-full min-h-auto relative'>
         <div className='relative border min-h-[100px]'>
                <h1 className='font-built text-7xl absolute  top-5 left-10 ' >My Projects</h1>
            </div>
            <div className='flex items-center justify-center '>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
  {/* Box 1 */}
  <div className="bg-white min-h-[450px] rounded-xl transform transition-transform duration-300 hover:scale-105"
   data-aos="fade-up"
   data-aos-offset="200"
   data-aos-delay="50"
   data-aos-duration="1000"
  
  >
    <div className="w-full min-h-[10px] grid place-items-center">
      <img src={specslan} className="min-h-[10px] w-[90%] p-4 rounded-xl" alt="" />
      <h1 className='font-built'>E-commerce Site (Specsland)</h1>
      <p className='p-4 font-Verna text-2xl'>I developed a fully functional e-commerce website with user authentication and product management using Express, Node.js, and MongoDB. It features secure login and signup, and allows users or admins to manage products. This project highlights my skills in backend development, database management, and web design.</p>
      <div className='flex items-center justify-around w-full'>
      <h2 className='font-built'>TechStack :</h2>    
        <ul className='flex items-center justify-center gap-2 flex-wrap'>
                <li className='bg-yellow-200 rounded-lg px-2'>html</li>
                <li className='bg-yellow-200 rounded-lg px-2'>CSS</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Java Script</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Node</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Express</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Mongo DB</li>
                <li className='bg-yellow-200 rounded-lg px-2'>AWS</li>
        </ul>
      </div>
    </div>
    <div className='flex items-center justify-around'>


    <div class="flex items-center justify-center gap-4 min-h-[15vh]">
  <div class="relative group">
    <button
      class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1">View Project</span >
          <svg
            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
  <div class="relative group">
  <button
    class="relative inline-block p-1 sm:p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    <span
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>

    <span class="relative z-10 block px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-950">
      <div class="relative z-10 flex items-center space-x-1 sm:space-x-2">
        <span
          class="text-sm sm:text-base transition-all duration-500 group-hover:translate-x-1"
        >
          Github Link
        </span>
        <svg
          class="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1"
          data-slot="icon"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  </button>
</div>

</div>

    </div>
  </div>

  {/* Box 2 */}
  <div className="bg-white min-h-[450px] rounded-xl transform transition-transform duration-300 hover:scale-105"
  data-aos="fade-up"
  data-aos-offset="200"
  data-aos-delay="50"
  data-aos-duration="2000"
  >
    <div className="w-full min-h-[170px] grid place-items-center">
      <img src={AL} className="min-h-[10px] w-[90%] p-4 rounded-xl" alt="" />
      <h1 className='font-built'>Subscribtion Based WEbsite (Active Listenrens)</h1>
      <p className='p-4 font-Verna text-2xl'>I created a platform to connect parents and communities, addressing issues like children's screen time, social media usage, and mobile phone addiction. It helps parents engage, share experiences, and access resources to manage their children's digital habits.</p>
      <div className='flex items-center justify-around w-full'>
      <h2 className='font-built'>TechStack :</h2>    
        <ul className='flex items-center justify-center gap-2 flex-wrap'>
                <li className='bg-yellow-200 rounded-lg px-2'>html</li>
                <li className='bg-yellow-200 rounded-lg px-2'>CSS</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Java Script</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Node</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Express</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Mongo DB</li>
                <li className='bg-yellow-200 rounded-lg px-2'>AWS</li>
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 min-h-[15vh]">
  <div class="relative group">
    <button
      class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1">View Project</span>
          <svg
            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
  <div class="relative group">
    <button
      class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1"
            >Github Link</span
          >
          <svg
            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
</div>
  </div>

  {/* Box 3 */}
  <div className="bg-white min-h-[450px] rounded-xl transform transition-transform duration-300 hover:scale-105"
  data-aos="fade-up"
  data-aos-offset="200"
  data-aos-delay="50"
  data-aos-duration="1000"
  >
    <div className="w-full min-h-[170px] grid place-items-center">
      <img src={Cov} className="min-h-[10px] w-[90%] p-4 rounded-xl" alt="" />
      <h1 className='font-built'>Digital Marketing Website ( Coveten digital marketing )</h1>
      <p className='p-4 font-Verna text-2xl'>I developed a digital marketing website focused on helping businesses improve their online presence. The platform provides services like SEO, social media management, and content marketing, aimed at boosting visibility and engagement</p>
      <div className='flex items-center justify-around w-full'>
      <h2 className='font-built'>TechStack :</h2>    
        <ul className='flex items-center justify-center gap-2 flex-wrap'>
                <li className='bg-yellow-200 rounded-lg px-2'>html</li>
                <li className='bg-yellow-200 rounded-lg px-2'>CSS</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Java Script</li>
                
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 min-h-[15vh]">
  <div class="relative group">
    <button
      class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1">View Project</span>
          <svg
            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
  <div class="relative group">
  <button
    class="relative inline-block p-1 sm:p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    <span
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>

    <span class="relative z-10 block px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-950">
      <div class="relative z-10 flex items-center space-x-1 sm:space-x-2">
        <span
          class="text-sm sm:text-base transition-all duration-500 group-hover:translate-x-1"
        >
          Github Link
        </span>
        <svg
          class="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1"
          data-slot="icon"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  </button>
</div>

</div>
  </div>

  {/* Box 4 */}
  <div className="bg-white min-h-[450px] rounded-xl transform transition-transform duration-300 hover:scale-105"
  data-aos="fade-up"
  data-aos-offset="200"
  data-aos-delay="50"
  data-aos-duration="2000"
  >
    <div className="w-full min-h-[170px] grid place-items-center p-4">
      <img src={CXO} className="min-h-[10px] w-[90%] rounded-xl" alt="" />
      <h1 className='font-built'>E-commerce Site (Specsland)</h1>
      <p className='p-4 font-Verna text-2xl'>I created a job search web app that connects job seekers with employers. The platform allows users to browse job listings, apply for positions, and manage their profiles, helping streamline the job search process.</p>
      <div className='flex items-center justify-around w-full'>
      <h2 className='font-built'>TechStack :</h2>    
        <ul className='flex items-center justify-center gap-2 flex-wrap'>
                <li className='bg-yellow-200 rounded-lg px-2'>html</li>
                <li className='bg-yellow-200 rounded-lg px-2'>CSS</li>
                <li className='bg-yellow-200 rounded-lg px-2'>Java Script</li>
                
        </ul>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 min-h-[15vh]">
  <div class="relative group">
    <button
      class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
    >
      <span
        class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1">View Project</span>
          <svg
            class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
  <div class="relative group">
  <button
    class="relative inline-block p-1 sm:p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  >
    <span
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></span>

    <span class="relative z-10 block px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gray-950">
      <div class="relative z-10 flex items-center space-x-1 sm:space-x-2">
        <span
          class="text-sm sm:text-base transition-all duration-500 group-hover:translate-x-1"
        >
          Github Link
        </span>
        <svg
          class="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1"
          data-slot="icon"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  </button>
</div>

</div>
  </div>
  
  
</div>

            </div>
         </div>
    </div>
  )
}

export default Projects
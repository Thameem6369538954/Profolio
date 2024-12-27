import React from 'react';
import Map from "../PrImages/Map.png"; // Import your image

const Getintouch = () => {
  return (
    <div>
      <div className='bg-primary w-full min-h-[100vh] relative'>
        <div className='min-h-[100px]  relative'>
          <h1 className='font-built text-7xl absolute top-5 left-10'>Contact</h1>
        </div>

        {/* Set background image correctly */}
        <div
          className='w-full min-h-[100vh] flex items-center justify-content'
          style={{ backgroundImage: `url(${Map})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
               <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-alfa text-center mb-6">Get in Touch</h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-Verna text-2xl">
              <div>
                <label htmlFor="name" className="block text-2xl font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-2xl font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-2xl font-Verna text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className=" font-Verna text-2xl mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>

     

      </div>
    </div>
  );
}

export default Getintouch;

import { div } from 'framer-motion/client';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-blue-50 h-screen py-20'>
    <section className=" mx-auto max-w-3xl mb-10  flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-lg min-h-[500px] ">

      <div className="w-full md:w-1/2 p-6 flex flex-col bg-white ">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form action="">
          <div className="mb-4 flex gap-4 ">
            <input type="text" placeholder="Name" className="w-1/2 p-3 border border-gray-300 rounded-md" required />
            <input type="email" placeholder="Email" className="w-1/2 p-3 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
          </div>
          <div>
          <button type="submit" className="w-full bg-[#ff6d5a] text-white p-3 rounded-md cursor-pointer hover:bg-[#f36e6e]">Submit</button>
          </div>
        </form>
      </div>
      
    
      <div className="w-full md:w-1/2 bg-[#ff6d5a] text-white p-6 flex flex-col space-y-5 ">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="flex items-center mb-2">
          <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
            <FaMapMarkerAlt />
          </span>
          <p>Address: Rawalpindi,Pakistan</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
            <FaPhoneAlt />
          </span>
          <p>Phone: +92 334-5315265</p>
        </div>
        <div className="flex items-center">
          <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
            <FaEnvelope />
          </span>
          <p>Email: <a href="mailto:info@yourdomain.com" className="underline">info@yourdomain.com</a></p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
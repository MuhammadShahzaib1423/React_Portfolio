
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import SpotlightCard from './spotlightcard';
const Contact = () => {
  return (
    // <div className='bg-[#C7D9DD] h-screen py-20'>
    // <section className=" mx-auto max-w-3xl mb-10  flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-lg min-h-[500px] ">

    //   <div className="w-full md:w-1/2 p-6 flex flex-col bg-white ">
    //     <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
    //     <form action="">
    //       <div className="mb-4 flex gap-4 ">
    //         <input type="text" placeholder="Name" className="w-1/2 p-3 border border-gray-300 rounded-md" required />
    //         <input type="email" placeholder="Email" className="w-1/2 p-3 border border-gray-300 rounded-md" required />
    //       </div>
    //       <div className="mb-4">
    //         <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-md" required />
    //       </div>
    //       <div className="mb-4">
    //         <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-md" required></textarea>
    //       </div>
    //       <div>
    //       <button type="submit" className="w-full bg-[#ff6d5a] text-white p-3 rounded-md cursor-pointer hover:bg-[#f36e6e]">Submit</button>
    //       </div>
    //     </form>
    //   </div>
      
    
    //   <div className="w-full md:w-1/2 bg-[#ff6d5a] text-white p-6 flex flex-col space-y-5 ">
    //     <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    //     <div className="flex items-center mb-2">
    //       <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
    //         <FaMapMarkerAlt />
    //       </span>
    //       <p>Address: Rawalpindi,Pakistan</p>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
    //         <FaPhoneAlt />
    //       </span>
    //       <p>Phone: +92 334-5315265</p>
    //     </div>
    //     <div className="flex items-center">
    //       <span className="bg-white text-[#ff6d5a] p-2 rounded-full mr-2">
    //         <FaEnvelope />
    //       </span>
    //       <p>Email: <a href="mailto:info@yourdomain.com" className="underline">info@yourdomain.com</a></p>
    //     </div>
    //   </div>
    // </section>
    // </div>
    <>
    <div className="bg-white h-auto flex flex-col md:flex-row justify-center pt-10 p-4 gap-4">
  <SpotlightCard className="w-full md:w-96 h-56 bg-[#F4F4F4] cursor-pointer" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col items-center space-y-3">
      <span className="bg-[#FFE8E4] text-[#D6453D] p-4 rounded-full text-xl">
        <FaMapMarkerAlt />
      </span>
      <h2 className="text-black font-bold text-2xl">Address</h2>
      <p className="text-[#5d6570] text-md text-center">Rawalpindi, Pakistan</p>
    </div>
  </SpotlightCard>

  <SpotlightCard className="w-full md:w-96 h-56 bg-[#F4F4F4] cursor-pointer" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col items-center space-y-3">
      <span className="bg-[#FFE8E4] text-[#D6453D] p-4 rounded-full text-xl">
        <FaEnvelope />
      </span>
      <h2 className="text-black font-bold text-2xl">Email</h2>
      <p className="text-[#5d6570] text-md text-center">shahzaibr308@gmail.com</p>
    </div>
  </SpotlightCard>

  <SpotlightCard className="w-full md:w-96 h-56 bg-[#F4F4F4] cursor-pointer" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col items-center space-y-3">
      <span className="bg-[#FFE8E4] text-[#D6453D] p-4 rounded-full text-xl">
        <FaPhoneAlt />
      </span>
      <h2 className="text-black font-bold text-2xl">Call Me</h2>
      <p className="text-[#5d6570] text-md text-center">+92 334-5315265</p>
    </div>
  </SpotlightCard>
</div>

 
<div className='p-3'>
  <section className="mx-auto max-w-4xl flex flex-col mb-20 bg-[##F4F4F4] md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-lg min-h-[400px] mt-0">
  <div className="w-full md:w-1/2   p-6 flex flex-col space-y-5 ">
  <h2 className="text-2xl font-bold  mb-4 " style={{color:"rgb(248, 82, 61)"}}>Get in Touch</h2>

  <h1 className='text-4xl font-bold'>Let’s Build Something Amazing Together
  </h1>
  <p className='text-[#5d6570] text-md'>I'm always open to new opportunities, collaborations, or just a friendly chat. If you have a project in mind or need a creative touch, feel free to reach out—I’d love to hear from you!</p>
     </div>
   <div className="w-full md:w-1/2 p-6 flex flex-col bg-white ">
  
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
       <button type="submit" className="w-full bg-[#ff6d5a] text-white p-3 rounded-md cursor-pointer hover:bg-[#fc381e]">Submit</button>
       </div>
     </form>
   </div>
  
   
 </section>
 </div>
 </>

  );
};

export default Contact;
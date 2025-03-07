
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import SpotlightCard from './spotlightcard';
const data=[
  {
    id:1,
    title:"Address",
    icon:<FaMapMarkerAlt />,
    text:"Rawalpindi, Pakistan",

  },
  {
    id:2,
    title:"Email",
    icon:<FaEnvelope />,
    text:"shahzaibr308@gmail.com",

  },
  {
    id:3,
    title:"Call Me",
    icon:<FaPhoneAlt />,
    text:"+92 334-5315265",
  }
]
const Contact = () => {
  return (
    
    <>
      {location.pathname === "/contact" && (  
    <div 

  className="" 
  style={{ 
    // backgroundImage: `url(${bgimage1})`,
    backgroundColor:"#C7D9DD",  
    height: "50vh",  
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
        <h1 className="text-9xl text-center font-bold bg-gradient-to-r from-[#342ead] to-[#ff6d5a] text-transparent bg-clip-text py-40 " style={{ fontFamily: 'Rajdhani, sans-serif' }}>
  Contact Me
</h1>
</div>
    )}
    <div className="bg-white h-auto flex flex-col md:flex-row justify-center pt-10 p-4 gap-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {data.map((item)=>(
         <SpotlightCard className="w-full md:w-96 h-56 bg-[#F4F4F4] cursor-pointer shadow-xl" spotlightColor="rgba(0, 229, 255, 0.2)">
         <div className="flex flex-col items-center space-y-3">
           <span className="bg-[#FF6d5a] text-[#e32e17] p-4 rounded-full text-xl">
            {item.icon}
           </span>
           <h2 className="text-black font-bold text-2xl">{item.title}</h2>
           <p className="text-black text-md text-center font-semibold">{item.text}</p>
         </div>
       </SpotlightCard>
              ))}
  

 
</div>

 
<div className='p-3' style={{ fontFamily: 'Rajdhani, sans-serif' }}>
  <section className="mx-auto max-w-4xl flex flex-col mb-20 bg-[##F4F4F4] md:flex-row border border-gray-300 shadow-xl rounded-lg overflow-hidden  min-h-[400px] mt-0">
  <div className="w-full md:w-1/2   p-6 flex flex-col space-y-5 ">
  <h2 className="text-2xl font-bold  mb-4 " style={{color:"rgb(248, 82, 61)"}}>Get in Touch</h2>

  <h1 className='text-4xl font-bold'>Let’s Build Something Amazing Together
  </h1>
  <p className='text-black text-md font-semibold'>I'm always open to new opportunities, collaborations, or just a friendly chat. If you have a project in mind or need a creative touch, feel free to reach out—I’d love to hear from you!</p>
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
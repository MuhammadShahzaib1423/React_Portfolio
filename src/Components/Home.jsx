import React from 'react';

import bgimage1 from '../assets/bg/hero_bg_2.png';
import bgimage2 from '../assets/bg/hero_bg_3.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import mainimg from '../assets/mainimage/mainimg.png';
import About from './About';
import Contact from './Contact';
import { motion } from 'framer-motion';
import Projects from './Projects';
import dimage2 from '../assets/bg/dimage2.jpg';
import dimage3 from '../assets/bg/dimage3.png';
const Home = () => {
  return (
    <div >
      {/* style={{ backgroundImage: `url(${bgimage1})` }} */}
      <section 
  className="min-h-screen bg-cover bg-center bg-no-repeat bg-[#C7D9DD] " style={{ fontFamily: 'Rajdhani, sans-serif' }}
  
>

    <div className='container w-full py-15 flex  p-8 md:flex-row justify-center items-center space-x-2'>

        <div className='space-y-8 w-[50]'>
            <h1 className='text-3xl md:text-5xl text-[rgb(210, 210, 214)] font-semibold'> Hi! I'm</h1>
        <motion.h2  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-3xl font-bold md:text-5xl  text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(147deg, #342ead 0%,rgb(250, 54, 28) 100%)" }}
            >
            Muhammad <br />Shahzaib
            </motion.h2>

        <motion.h3 initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }} className='text-[rgb(220, 220, 228)] text-2xl md:text-3xl font-bold'  >Frontend  <span className='text-[#342ead]'> Web Developer</span></motion.h3>

        <motion.p initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }} className='text-black font-semibold'>I build all kinds of websites that help businesses scale and meet their needs. <br />I specialize in frontend web development, creating responsive and dynamic user interfaces. <br /> Currently, I'm living in Rawalpindi, Pakistan.</motion.p>
        
        <div className='social-icons flex space-x-4 text-3xl md:text-3xl'>
  <a href='https://www.instagram.com/shahzaib1___' target='_blank' rel='noreferrer'>
    <FaInstagram className='social-icon' />
  </a>
  <a href='https://github.com/MuhammadShahzaib1423' target='_blank' rel='noreferrer'>
    <FaGithub className='social-icon' />
  </a>
  <a href='https://www.linkedin.com/in/m-shahzaib-30b550244/' target='_blank' rel='noreferrer'>
    <FaLinkedin className='social-icon' />
  </a>
  <a href='https://www.facebook.com/shahzaib.rashid.35513' target='_blank' rel='noreferrer'>
    <FaFacebook className='social-icon' />
  </a>
</div>

        <div className='flex space-x-4 items-center'>
        <button type="button" className="text-white bg-[#FF6d5A] hover:bg-[#FF6d5A] cursor-pointer hover:scale-110  text-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</button>
        <a href="" className='text-[#342ead] underline text-xl' > Lets Talk</a>
        </div>
        </div>
        <div 
  className="relative h-[450px] w-[350px] mt-20 bg-cover bg-center rounded-lg overflow-hidden"
  style={{ backgroundImage: `url(${bgimage2})` }}
>
  {/* Inner Image - Centered Properly */}
  <img 
    alt="Inner Image"
    src={dimage3} 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-auto "
  />

  {/* Floating Info Box */}
  <div className='flex justify-center items-center space-x-4 absolute top-[70%] hover:bg-[#ff6d5a] cursor-pointer hover:text-white left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white rounded-lg shadow-lg float-animation'> 
    <h1 className='text-[#342ead] text-2xl font-bold'>1+</h1>
    <p className='text-black text-lg'>Years of Experience</p>
  </div>
</div>

    </div>

      </section>
    
      <section id='about'         >
        <About />
     </section>  
     <section id='contact' >
      <Contact/>
      </section>
      <section id='projects' >
      <Projects/>
      </section>
    </div>
  );
};

export default Home;

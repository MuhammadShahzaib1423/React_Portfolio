import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import bgimage2 from "../assets/bg/hero_bg_3.png";
import dimage3 from "../assets/bg/dimage3.png";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
 
  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const phoneNumber = "923345315265"; 
  const message = "Hello! I want to talk with you."; 

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center bg-no-repeat bg-[#C7D9DD] " style={{ fontFamily: 'Rajdhani, sans-serif' }}>
        <div className="w-full py-15 flex flex-col-reverse md:flex-row justify-around items-center space-x-2">
          <div className="space-y-8 px-12 w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl text-[rgb(210, 210, 214)] font-semibold"> Hi! I'm</h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-3xl font-bold md:text-5xl text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(147deg, #342ead 0%,rgb(250, 54, 28) 100%)" }}
            >
              Muhammad <br />Shahzaib
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-[rgb(220, 220, 228)] text-2xl md:text-3xl font-bold"
            >
              Frontend <span className="text-[#342ead]"> Web Developer</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
              className="text-black font-semibold"
            >
              I build all kinds of websites that help businesses scale and meet their needs. <br />
              I specialize in frontend web development, creating responsive and dynamic user interfaces. <br />
              Currently, I'm living in Rawalpindi, Pakistan.
            </motion.p>
            <div className='social-icons flex space-x-4 text-3xl md:text-3xl'>
  <a href='https://www.instagram.com/shahzaib1___' target='_blank' rel='noreferrer' className="hover:text-[#FF6d5A]  cursor-pointer hover:scale-110 transition-transform duration-300">
    <FaInstagram className='social-icon' />
  </a>
  <a href='https://github.com/MuhammadShahzaib1423' target='_blank' rel='noreferrer' className="hover:text-[#FF6d5A]  cursor-pointer hover:scale-110 transition-transform duration-300">
    <FaGithub className='social-icon' />
  </a>
  <a href='https://www.linkedin.com/in/m-shahzaib-30b550244/' target='_blank' rel='noreferrer' className="hover:text-[#FF6d5A]  cursor-pointer hover:scale-110 transition-transform duration-300">
    <FaLinkedin className='social-icon' />
  </a>
  <a href='https://www.facebook.com/shahzaib.rashid.35513' target='_blank' rel='noreferrer' className="hover:text-[#FF6d5A]  cursor-pointer hover:scale-110 transition-transform duration-300" >
    <FaFacebook className='social-icon' />
  </a>
      </div>

            {/* Buttons */}
            <div className="flex space-x-3  items-center">
              <a href="https://drive.google.com/file/d/1W3Z5b6laWJgpas2_xCDHvkG1up4lwxAo/view?usp=drive_link" download>
                <button
                  type="button"
                  className="text-white bg-[#FF6d5A] hover:bg-[#FF6d5A] cursor-pointer hover:scale-110 text-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm md:px-6 md:py-4  px-4 py-2 text-center"
                >
                  Download CV
                </button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className="whatsapp-btn text-xl text-white underline font-bold cursor-pointer font-semibold rounded-lg  md:px-6 md:py-4 px-4 py-2 text-center bg-blue-500 ">Let's Talk</button>
    </a>

            </div>
          </div>

          {/* Profile Image Section */}
          <div className="relative h-[450px] w-[350px] mt-20 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${bgimage2})` }}>
            <img alt="Inner Image" src={dimage3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-auto " />
            <div className="flex justify-center items-center space-x-4 absolute top-[70%] hover:bg-[#ff6d5a] cursor-pointer hover:text-white left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white rounded-lg shadow-lg float-animation">
              <h1 className="text-[#342ead] text-2xl font-bold">1+</h1>
              <p className="text-black text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="projects">
        <Projects />
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-5  cursor-pointer right-10 bg-[#FF6d5A] text-white p-4 rounded-full shadow-lg hover:bg-[#e55b47] hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Home;

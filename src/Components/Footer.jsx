import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 
import bgimage5 from "../assets/bg/hero_bg_5.png";

const Footer = () => {
  const phoneNumber = "923345315265"; 
  const message = "Hello! I want to discuss my project.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="footer w-full h-[40vh] relative flex flex-col justify-center items-center text-center bg-[#252439] text-[#aaaaba]"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="text-5xl md:text-6xl text-white font-extrabold drop-shadow-lg">
          Have a Project?
        </h1>

        <p className="text-lg text-gray-200 max-w-xl">
          Let's bring your ideas to life! Get in touch to discuss your project.
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="bg-[#25D366] float3-animation text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg flex items-center gap-3 transform transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
          >
            <FaWhatsapp className="text-2xl" /> Let's Chat
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;

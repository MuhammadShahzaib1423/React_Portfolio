import React from 'react'
import bgimage5 from '../assets/bg/hero_bg_5.png'
const Footer = () => {
  return (
    <div className="footer w-full h-[30vh] " style={{backgroundImage: `url(${bgimage5})`}}>
      
      <div className='flex w-full space-x-8 flex-col md:flex-row md:text-6xl  justify-center items-center h-full'>
      <h1 className='text-5xl text-white bg-clip-text font-bold '>
        Have a Project 
    </h1>
    <button type="button" className="text-white bg-[#FF6d5A] hover:bg-[#FF6d5A] cursor-pointer hover:scale-110   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</button>

      </div>
  

    </div>
  )
}

export default Footer

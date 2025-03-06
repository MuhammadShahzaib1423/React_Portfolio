// import React, { useState } from "react";
import bgimage1 from '../assets/bg/hero_bg_4.png'
import bgimage2 from '../assets/bg/hero_bg_2.png'
import bgimage3 from '../assets/bg/skills_shape_1.png'
const About = () => {
//   const [activeTab, setActiveTab] = useState("about"); // Default tab: About Me

  return (
    // <div className=" mx-auto mt-10 p-6">
    
    //   <div className="flex justify-center space-x-4 mb-6">
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "about" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("about")}
    //     >
    //       About Me
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "skills" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("skills")}
    //     >
    //       Skills
    //     </button>
    //     <button
    //       className={`px-4 py-2 rounded-lg ${
    //         activeTab === "experience" ? "bg-blue-600 text-white" : "bg-gray-300"
    //       }`}
    //       onClick={() => setActiveTab("experience")}
    //     >
    //       Experience
    //     </button>
    //   </div>

    //   {activeTab === "about" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">My Story</h2>
    //       <p className="text-gray-700">
    //         I am a frontend web developer based in Rawalpindi. I build all kinds of
    //         websites that scale up company businesses and meet their needs.
    //       </p>
    //       <p className="text-gray-700 mt-2">
    //         I have been passionate about web development since I was 18 years old.
    //       </p>
    //     </div>
    //   )}

    //   {activeTab === "skills" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">Skills</h2>
    //       <p className="text-gray-700">
    //         Here are some of my technical skills and expertise.
    //       </p>
    //       <ul className="mt-4">
    //         <li className="mb-2">Adobe Photoshop - 80%</li>
    //         <li className="mb-2">HTML / CSS - 95%</li>
    //         <li className="mb-2">JavaScript - 88%</li>
    //       </ul>
    //     </div>
    //   )}

      
    //   {activeTab === "experience" && (
    //     <div>
    //       <h2 className="text-2xl font-bold mb-4">Experience</h2>
    //       <p className="text-gray-700">My professional work history.</p>
    //       <ul className="mt-4">
    //         <li className="mb-2">
    //           <strong>Art & Creative Director</strong> (2014-2015) - Google Inc.
    //         </li>
    //         <li className="mb-2">
    //           <strong>Frontend Developer</strong> (2015-2017) - Google Inc.
    //         </li>
    //         <li className="mb-2">
    //           <strong>UI/UX Designer</strong> (2018-2020) - Google Inc.
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <>
    <section className=''>
    <div 
  className="" 
  style={{ 
    backgroundImage: `url(${bgimage1})`,  
    height: "50vh",  // Corrected syntax
    backgroundSize: "cover", // Optional: Makes background fit properly
    backgroundPosition: "center" // Optional: Centers background image
  }}
>
        <h1 className="text-9xl text-center font-bold bg-gradient-to-r from-[#342ead] to-[#ff6d5a] text-transparent bg-clip-text py-40">
  About Me
</h1>
</div>

       
<div className='container px-10 py-15 mx-auto flex flex-col items-center justify-center md:flex-row  space-x-20 ' style={{fontFamily:'jost, sans-serif'}}>
    <div>
<img src={bgimage2} alt="" />
    </div>
    <div>
       <div>
        <h1 className='md:text-4xl text-3xl text-[#12103E] font-bold mb-4'>
            I <span className='text-[#ff6d5a]'> develop websites  </span>that scale up businesses
        </h1>
        <p className='text-[#B5B5c0] text-lg'>
        I am a Frontend Web Developer passionate about creating responsive, user-friendly, and visually appealing web applications. I specialize in modern frontend technologies, ensuring seamless user experiences through clean code and innovative designs.
        </p>
        </div> 
        <div className='Summary mt-4 space-y-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#12103E]'> In Summary</h2>

            <div>
            <h3 className='text-[#B5B5c0]'>Current Location</h3>
            <p className='text-[#12103E] text-2xl font-semibold'>USA</p>
            </div>
            <div>
                <h3 className='text-[#B5B5c0]'>Education</h3>
                <p className='text-[#12103E] text-2xl font-semibold'>BS in Computer Science</p>
            </div>
            <div>
                <h3 className='text-[#B5B5c0]'>Experience</h3>
                <p className='text-[#12103E] text-2xl font-semibold'>1+ years</p>
                </div>
                <div>
                    <h3 className='text-[#B5B5c0]'>Email</h3>
                    <p className='text-[#12103E] text-2xl font-semibold'>shahzaibr308@gmail.com</p>
                </div>
         
           

        </div>
         </div>
</div>
<div className='flex justify-center' style={{ backgroundImage: `url(${bgimage1}) ` }}>
<div className="min-h-screen justify-center p-5  py-20 w-[70vw] " >

    <h1 className='text-3xl md:text-5xl font-bold '> I'm great in what I do <br />  and  <span className='text-[#ff6d5a]' style={{fontFamily:'jost, sans-serif'}}>I'm Loving it </span></h1>
    
    <div className='container flex flex-col md:flex-row  w-full justify-center   items-center gap-10 mt-10'>
    <div className='education w-full '>
        <h1 className='text-3xl md:text-4xl font-bold mt-10 ' style={{fontFamily:'jost, sans-serif'}}>Education</h1>
        <div className='flex space-x-7 mt-5 items-center'>
       <div className="cs_iconbox_icon cs_accent_color_2 cs_filled_bg cs_center"        data-src="../assets/bg/iconbox_bg_3.svg">
                  <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"
                      fill="currentColor" />
                  </svg>
                 
                </div>

                
                <div>
                <h2 className='text-xl text-[#B5B5c0]'>NUTECH University</h2>
                <p className='text-2xl text-[#12103E] font-semibold ' style={{fontFamily:'jost, sans-serif'}}>BS in Computer Science &nbsp; (2020-2024)</p>
                </div>

                </div>
                <div className='flex space-x-7 mt-5 items-center'>
       <div className="cs_iconbox_icon cs_accent_color_2 cs_filled_bg cs_center"        data-src="../assets/bg/iconbox_bg_3.svg">
                  <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div>
                <h2 className='text-xl text-[#B5B5c0]'>Punjab Group Of Colleges Rawalpindi, D9 Campus</h2>
                <p className='text-2xl text-[#12103E] font-semibold ' style={{fontFamily:'jost, sans-serif'}}>ICS &nbsp; (2018-2020)</p>
                </div>

                </div>
                <div className='flex space-x-7 mt-5 items-center'>
       <div className="cs_iconbox_icon cs_accent_color_2 cs_filled_bg cs_center"        data-src="../assets/bg/iconbox_bg_3.svg">
                  <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.7148 26.5142C26.5064 26.1679 27.2705 25.762 28.0006 25.2999V30.8571C28.0006 31.1602 27.8802 31.4509 27.6659 31.6653C27.4515 31.8796 27.1608 32 26.8577 32C26.5546 32 26.2639 31.8796 26.0496 31.6653C25.8353 31.4509 25.7148 31.1602 25.7148 30.8571V26.5142ZM17.2719 9.74253C17.1334 10.0126 17.1052 10.3258 17.1932 10.6163C17.2811 10.9068 17.4783 11.1518 17.7433 11.2997L24.4291 14.8569L26.8577 13.5569L18.829 9.2711C18.559 9.13267 18.2457 9.10445 17.9553 9.19239C17.6648 9.28033 17.4198 9.47755 17.2719 9.74253ZM35.9721 9.2711L18.829 0.128104C18.6605 0.0438581 18.4746 0 18.2862 0C18.0977 0 17.9119 0.0438581 17.7433 0.128104L0.600192 9.2711C0.418457 9.37089 0.266872 9.51768 0.161288 9.69611C0.0557045 9.87454 0 10.0781 0 10.2854C0 10.4927 0.0557045 10.6962 0.161288 10.8747C0.266872 11.0531 0.418457 11.1999 0.600192 11.2997L4.00024 13.0997V20.2141C3.99809 20.7046 4.15889 21.182 4.45739 21.5713C5.58598 23.0856 9.9289 27.9999 18.2862 27.9999C20.8397 28.0212 23.3697 27.5104 25.7148 26.4999V15.5426L24.4291 14.8569L18.2862 18.1284L5.68598 11.414L3.57166 10.2854L18.2862 2.44242L33.0007 10.2854L30.8863 11.414L26.8577 13.5569L27.4006 13.8426C27.5938 13.9542 27.7521 14.1174 27.8577 14.314C27.9527 14.4791 28.0021 14.6665 28.0006 14.8569V25.2999C29.5792 24.3068 30.9717 23.0448 32.1149 21.5713C32.4134 21.182 32.5742 20.7046 32.5721 20.2141V13.0997L35.9721 11.2997C36.1539 11.1999 36.3055 11.0531 36.411 10.8747C36.5166 10.6962 36.5723 10.4927 36.5723 10.2854C36.5723 10.0781 36.5166 9.87454 36.411 9.69611C36.3055 9.51768 36.1539 9.37089 35.9721 9.2711Z"
                      fill="currentColor" />
                  </svg>
                </div>
                <div>
                <h2 className='text-xl text-[#B5B5c0]'>Islamic Foundation Secondary School</h2>
                <p className='text-2xl text-[#12103E] font-semibold ' style={{fontFamily:'jost, sans-serif'}}>Matric &nbsp; (2016-2018)</p>
                </div>

                </div>
                

                </div>
                <div className="skills mt-10 w-full">
    <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'jost, sans-serif' }}>Skills</h1>

    
    <div className="mb-6">

        <div className="flex justify-between">
            <h2 className="text-lg font-medium">React</h2>
            <h1 className="text-sm font-semibold">60%</h1>
        </div>

     
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '60%' }}></div>
        </div>
    </div>

   
    <div className="mb-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-medium">JavaScript</h2>
            <h1 className="text-sm font-semibold">50%</h1>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '50%' }}></div>
        </div>
    </div>

  
    <div className="mb-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-medium">Tailwind CSS</h2>
            <h1 className="text-sm font-semibold">70%</h1>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
    </div>

  
    <div className="mb-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-medium">Angular</h2>
            <h1 className="text-sm font-semibold">50%</h1>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '50%' }}></div>
        </div>
    </div>

   
    <div className="mb-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-medium">BootStrap CSS</h2>
            <h1 className="text-sm font-semibold">70%</h1>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
    </div>
    <div className="mb-6">
        <div className="flex justify-between">
            <h2 className="text-lg font-medium">Micrsosoft Suite</h2>
            <h1 className="text-sm font-semibold">50%</h1>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
            <div className="bg-[#342ead] h-2.5 rounded-full" style={{ width: '50%' }}></div>
        </div>
    </div>
</div>


                </div>


</div >

<div>
    <img src={bgimage3} alt="" className='w-[200px] float-animation' />
</div>
</div>
       
    </section>

    </>
  );
};

export default About;


import bgimage1 from '../assets/bg/hero_bg_4.png'
import bgimage2 from '../assets/bg/hero_bg_2.png'
import bgimage3 from '../assets/bg/skills_shape_1.png'
import SpotlightCard from './spotlightcard';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { i } from 'framer-motion/client';
import image1 from './one.svg'
import image2 from './two.svg'
import image3 from './three.svg'
import bgimage4 from '../assets/bg/expert_img_two.jpg';

import { useLocation } from 'react-router-dom';
import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";
import dimage from '../assets/bg/dimage.jpg';
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", delay }, // Delay added for staggered effect
  }),
};
const educationdata=[
    {
        id:1,
        title:'NUTECH University',
        degree:'BS in Computer Science',
        year:'2020-2024',
        desc:' I completed my BS in Computer Science from NUTECH University (2020-2024), where I developed a strong foundation in programming, software development, and problem-solving.  ',
        icon:<FaGraduationCap/>
    }
    ,
    {
        id:2,
        title:'Punjab Group Of Colleges Rawalpindi, D9 Campus',
        degree:'ICS',
        year:'2018-2020',
        desc:'I completed my ICS from Punjab Group of Colleges, Rawalpindi, D9 Campus (2018-2020), where I built a solid foundation in computer science and problem-solving. ',
        icon:<FaSchool/>
    },
    {
        id:3,
        title:'Islamic Foundation Secondary School',
        degree:'Matric',
        year:'2016-2018',
        desc:'I completed my Matric from Islamic Foundation Secondary School (2016-2018), where I developed a passion for computer science and technology. ',
        icon:<FaSchool/>
    }
];
const technicalSkills=[
    { name: 'React', percentage: '60%' },
    { name: 'JavaScript', percentage: '50%' },
    { name: 'Tailwind CSS', percentage: '70%' },
    { name: 'Angular', percentage: '50%' },
    { name: 'Bootstrap CSS', percentage: '70%' },
    { name: 'Microsoft Suite', percentage: '50%' },
  ];
  const toolsAndTechnologies = [
    { name: 'Git & GitHub', percentage: '55%' },
    { name: 'VS Code', percentage: '70%' },
    { name: 'Postman', percentage: '60%' },
    { name: 'Figma', percentage: '60%' },
    {name:'VirtualBox',percentage:'50%'},
    {name:'Cisco Packet Tracer',percentage:'70%'}

  ];
  const experienceData = [
    {
        id:1,
      role: "Junior Software Engineer",
      company: "Smart TechOne",
      duration: "8-July-2024 to Present",
      description:
        "As a Junior Software Engineer at Smart TechOne, I develop and optimize web applications using Angular, React, JavaScript, and Tailwind CSS. I collaborate with teams to enhance UI/UX, debug issues, and implement best practices for scalable solutions. This role allows me to refine my skills and contribute to innovative projects.",
    },
    {
        id:2,
      role: "Frontend Developer Intern",
      company: "Pakistan International Airlines",
      duration: "15-Aug-2023 to 29-Sep-2023",
      description:
        "As a Frontend Developer Intern, I worked on designing and developing small web pages using HTML, CSS, JavaScript, and Tailwind CSS. I assisted in improving UI components, ensuring responsiveness, and enhancing user experience. This internship helped me gain practical experience in frontend development and modern web technologies.",
    },
  ];
  const features = [
    {
      id: "01",
      title: "Dedication",
      icon: image1,
      description:
        "Our unwavering commitment to excellence ensures that we give our best in everything we do, striving for perfection and continuous improvement.",
    },
    {
      id: "02",
      title: "Smart Work",
      icon: image2,
      description:
        "We believe in efficiency and innovation, using strategic planning and modern tools to achieve maximum results with minimal effort.",
    },
    {
      id: "03",
      title: "Intelligence",
      icon: image3,
      description:
        "With a deep understanding of our field, we make informed decisions and adapt quickly to challenges, ensuring smart and effective solutions.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Makes elements animate one by one smoothly
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.75, 0.5, 1] }, // Smooth cubic bezier easing
    },
  };
  
const About = () => {
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null)
  const  aboutref=useRef(null);
  const aboutinview=useInView(aboutref,{once:true,margin:"-100px"});

  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });
  const educationInView = useInView(educationRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
   const location= useLocation();

  return (
    
    <>
    <section className=''>
    {location.pathname === "/about" && (  
    <div 

  className=" bg-cover bg-center bg-[#C7D9DD] h-[50vh] " 
 
>
        <h1 className="text-9xl text-center font-bold bg-gradient-to-r from-[#342ead] to-[#ff6d5a] text-transparent bg-clip-text py-40">
  About Me
</h1>
</div>
    )}

<h1 className='text-center text-3xl md:text-4xl py-5 underline' id='one'> Why Choose Me </h1>

<motion.div
        key={features.id}
        initial={{ opacity: 0, y: 50 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.8, delay: features.delay, ease: "easeOut" }} 
        className='flex justify-center items-center gap-5 flex-col p-4 md:flex-row ' style={{ fontFamily: 'Rajdhani, sans-serif' }}
      >
  {features.map((feature) => (
    <div
      
      className="shadow-lg rounded-2xl p-6 w-86 transform transition-all duration-300 hover:scale-105  hover:shadow-xl bg-[#C7D9DD]"
    >
      {/* Top Section: ID, Title & Image */}
      <div className="flex justify-between items-start gap-2">
        {/* Left Side: Text */}
        <div className="flex flex-col border-b-2 pr-14">
          <h1 className="text-2xl font-semibold text-[#ff6d5a]">{feature.id}</h1>
          <h2 className="text-2xl font-extrabold text-black mt-2">{feature.title}</h2>
        </div>
        {/* Right Side: Image */}
        <img src={feature.icon} alt="" className="w-[80px] ml-auto" />
      </div>

      {/* Description */}
      <p className="text-black-500 mt-4" id='one'>{feature.description}</p>
    </div>
  ))}
</motion.div>

       
<div className='container px-10 py-15 mx-auto flex flex-col items-center justify-center md:flex-row  space-x-20 ' style={{ fontFamily: 'Rajdhani, sans-serif' }}>
< motion.div initial={{ opacity: 0, y: 50 }}
ref={aboutref}
animate={ aboutinview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className=''>
  <img src={dimage} alt="" className='w-[950px] md:w-[800px]' />
</motion.div>

    <div>
    <motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
>
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={aboutinview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
  ref={aboutref}
  className="md:text-4xl text-3xl text-[#12103E] dark:text-white font-bold mb-4" id='one' style={{ fontFamily: 'Rajdhani, sans-serif' }}
>
  I <span className="text-[#ff6d5a]">develop websites</span> that scale up businesses
</motion.h1>

  < motion.p initial={{ opacity: 0, y: 50 }} 
  ref={aboutref}
  animate={ aboutinview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} className='text-[rgb(208, 208, 212)] para text-lg'>
    I am a Frontend Web Developer passionate about creating responsive, user-friendly, and visually appealing web applications. I specialize in modern frontend technologies, ensuring seamless user experiences through clean code and innovative designs.
  </motion.p>
</motion.div> 
<motion.div 
  className='Summary mt-4 space-y-4'
  initial={{ opacity: 0, y: 50 }}
  ref={aboutref}
  animate={ aboutinview ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
>
  <h2 className='text-3xl md:text-4xl font-bold text-[#12103E]' id='one'> In Summary</h2>

  <div>
    <h3 className='text-[#B5B5c0] text-md para'>Current Location</h3>
    <p className='text-[#ff6d5a] text-2xl font-semibold'>Pakistan</p>
  </div>
  <div>
    <h3 className='text-[#B5B5c0] text-md para'>Education</h3>
    <p className='text-[#ff6d5a] text-2xl font-semibold'>BS in Computer Science</p>
  </div>
  <div>
    <h3 className='text-[#B5B5c0] text-md para'>Experience</h3>
    <p className='text-[#ff6d5a] text-2xl font-semibold'>1+ years</p>
  </div>
  <div>
    <h3 className='text-[#B5B5c0] text-md para'>Email</h3>
    <p className='text-[#ff6d5a] text-2xl font-semibold'>shahzaibr308@gmail.com</p>
  </div>
</motion.div>
         </div>
</div>

<div className="min-h-screen flex flex-col  p-5 py-20 w-full " >
<motion.h1 
  className="text-3xl md:text-5xl font-bold px-5" 
  style={{ fontFamily: 'Rajdhani, sans-serif' }}
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
  id='one'
>
  I'm great in what I do and &nbsp; 
  <span className="text-[#ff6d5a]">
    I'm Loving it
  </span>
</motion.h1>

  <div className="flex flex-col  md:flex-row w-full items-start justify-center gap-10 md:gap-40 mt-10" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {/* Skills Section */}
<motion.div 
      ref={skillsRef}
  className="skills w-full md:w-1/3"
  initial="hidden"
  animate={skillsInView ? "visible" : "hidden"}
  custom={0.2} // First section appears after 0.2s
  variants={sectionVariants}
>
  <h1 className="text-3xl md:text-4xl font-bold mb-6 p-4" style={{ fontFamily: "jost, sans-serif" }} id='one'>
    Development Skills
  </h1>
  {technicalSkills.map((skill, index) => (
    <div key={index} className="mb-1 px-8 p-2 md:px-0   ">
      <div className="flex justify-between md:w-full w-[72vw] ">
        <h2 className="text-lg font-medium">{skill.name}</h2>
        <h1 className="text-sm font-semibold">{skill.percentage}</h1>
      </div>
      <div className="md:w-full w-[72vw] bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
        <motion.div
          className="bg-[#ff6d5a] h-2.5 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: skill.percentage }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  ))}
</motion.div>

<motion.div 
  className="tools w-full md:w-1/3"
  ref={toolsRef}
  initial="hidden"
  animate={toolsInView ? "visible" : "hidden"}
  custom={0.5} 
  variants={sectionVariants}
>
  <h1 className="text-3xl md:text-4xl p-4 font-bold mb-6" style={{ fontFamily: "jost, sans-serif" }} id='one'>
    Tools & Technologies
  </h1>
  {toolsAndTechnologies.map((tool, index) => (
    <div key={index} className="mb-1 px-8 p-2 md:px-0 ">
      <div className="flex justify-between md:w-full w-[72vw] ">
        <h2 className="text-lg font-medium">{tool.name}</h2>
        <h1 className="text-sm font-semibold">{tool.percentage}</h1>
      </div>
      <div className="md:w-full w-[72vw]  bg-gray-200 rounded-full h-2.5 mt-1 overflow-hidden">
        <motion.div
          className="bg-[#ff6d5a]  h-2.5 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: tool.percentage }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  ))}
</motion.div>
    </div>
    <h1 className="text-3xl md:text-4xl font-bold px-4" id='one' style={{ fontFamily: 'Rajdhani, sans-serif' }}>Education</h1>
  
{/* Education Section */}
  
   <motion.div  initial={{ opacity: 0, y: 50 }}
   ref={educationRef}

   animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}

 className="  md:w-full grid grid-cols-1 md:grid-cols-2  p-4 space-y-2 gap-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {educationdata.map((education, index) => (
        <SpotlightCard key={index} className="w-full h-full bg-[#F4F4F4] cursor-pointer border-animation ">
          <div className="flex flex-col space-y-3">
            <h2 className="text-[#141414] font-semibold text-2xl">{education.title}</h2>
            <p className="text-black font-bold text-md">{education.year}</p>
            <p className="text-black text-md">{education.degree}</p>
            <p className="text-[#444359] text-md">{education.desc}</p>
          </div>
        </SpotlightCard>
      ))}
    </motion.div>
    <div className="flex justify-center items-center gap-5 flex-col p-4 md:flex-row w-[80vw]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
  {/* Image Section */}
  <div className="flex justify-center w-full md:w-1/2 ">
    <img src={bgimage4} alt="Experience Image" className="w-[540px]" />
  </div>

  {/* Experience Section */}
  <div className="w-full md:w-1/2">
    <motion.h1  ref={experienceRef}
      initial={{ opacity: 0, y: 50 }}
      animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
 // Slight delay to appear after the first animation
 className="text-3xl md:text-4xl font-bold mt-5 text-[#141414]" style={{ fontFamily: 'jost, sans-serif' }} id='one'>
      Experiences
    </motion.h1>

    {/* Junior Software Engineer */} 
    {experienceData.map((experience, index) => (
        <div key={index} className="mt-6">
        <h3  className="text-[ #7d7d80] font-bold">{experience.role}</h3>
        <motion.p  initial={{ opacity: 0, y: 50 }}
             ref={experienceRef}
             animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-[#FF6D5A] text-lg font-semibold">{experience.company}</motion.p>
        <motion.p  initial={{ opacity: 0, y: 50 }}
  ref={experienceRef}
 
  animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }} 
 className="text-[#141414] text-md font-semibold" id='one'>{experience.duration}</motion.p>
        <motion.p ref={experienceRef}
      initial={{ opacity: 0, y: 50 }}
      animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }} 
>
          {experience.description}
        </motion.p>
      </div>
    ))}
    
  
  </div>
</div>


    
</div>






    </section>

    </>
  );
};

export default About;

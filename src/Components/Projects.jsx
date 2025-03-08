import React from "react";
import { motion } from "framer-motion";
import image1 from '../assets/bg/image.png';
import image2 from '../assets/bg/image2.png';
import image4 from '../assets/bg/image4.png';
import image5 from '../assets/bg/image5.jpg';
import image6 from '../assets/bg/image6.jpg';

const projects = [
  {
    id: 1,
    title: "GlamMart",
    description: "A dynamic e-commerce platform with seamless shopping experience.",
    image: image1,
    link: "https://glammart.vercel.app/login",
    deployed: true,
  },
  {
    id: 2,
    title: "Coffee Cafe",
    description: "A coffee shop website with a modern design and smooth animations.",
    image: image2,
    link: "https://coffee-cafe-shop-six.vercel.app/",
    deployed: true,
  },
  {
    id: 3,
    title: "Knowledge Nest",
    description: "An educational platform for online learning.",
    image: image4,
    deployed: false,
  },
  {
    id: 4,
    title: "News App",
    description: "A news aggregator app for trending stories.",
    image: image5,
    deployed: false,
  },
  {
    id: 5,
    title: "Calculator App",
    description: "A simple and interactive calculator app.",
    image: image6,
    deployed: false,
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-md mb-4">{project.description}</p>
                {project.deployed ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#ff6d5a] to-[#fc381e] hover:from-pink-500 hover:to-purple-500 text-white py-2 px-6 rounded-lg transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    Visit Website
                  </motion.a>
                ) : (
                  <span className="inline-block bg-gray-700 text-gray-300 py-2 px-6 rounded-lg">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className=" mt-12 text-center text-gray-400 text-xl "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span className="block text-3xl font-semibold text-orange-400">More Projects Coming Soon...</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
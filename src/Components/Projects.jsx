import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web app built with React and Tailwind CSS.",
    image: "https://source.unsplash.com/400x300/?technology",
    link: "https://yourprojectlink.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A responsive landing page with interactive animations.",
    image: "https://source.unsplash.com/400x300/?website",
    link: "https://yourprojectlink.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "An e-commerce platform with secure payment integration.",
    image: "https://source.unsplash.com/400x300/?coding",
    link: "https://yourprojectlink.com",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

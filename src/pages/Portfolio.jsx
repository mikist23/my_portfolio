import project1 from "../assets/images/proj10.png";
import project4 from "../assets/images/risk_project.png";
import project2 from "../assets/images/mern_project.jpg";
import project3 from "../assets/images/django_project.jpg";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "College Management System in Python Django",
    desc: "A fully functional project based on College Management System which uses Python with Django Web Framework. Django project contains all the important features.",
    devstack: "Django, Tailwind, Python, React",
    link: "#",
    git: "#",
    src: project3,
    type: "Backend",
  },
  {
    title: "Malignancy Risk Assessment Tool",
    desc: "The Malignancy Risk Assessment Tool is a powerful machine-learning application designed to evaluate whether a cell cluster is benign or malignant. By analyzing key cellular features, this tool delivers real-time, data-driven predictions to assist healthcare professionals in making critical diagnostic decisions.",
    devstack: "Django, Python, Streamlit, Deep Learning",
    link: "https://shorturl.at/SltaG",
    git: "#",
    src: project4,
    type: "Machine Learning",
  },
  {
    title: "MERN Real Estate Marketplace",
    desc: "The MERN Real Estate Marketplace is a cutting-edge platform designed to revolutionize the process of buying, selling, and renting properties. Utilizing the MERN stack (MongoDB, Express.js, React, and Node.js), this marketplace offers a seamless user experience.",
    devstack: "MongoDB, Express.js, React, Node.js",
    link: "#",
    git: "https://github.com/mikist23/mern-estate",
    src: project2,
    type: "Fullstack",
  },
  {
    title: "3D Solar System Planets to Explore",
    desc: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    devstack: "Three.js, JavaScript, React",
    link: "#",
    git: "#",
    src: project1,
    type: "Fullstack",
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="bg-gray-900 text-white py-24" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          My <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Stack: {project.devstack}
                </p>
                <button
                  className="text-emerald-300 hover:text-emerald-500 font-medium"
                  onClick={() => openModal(project)}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-gray-800 rounded-lg p-6 max-w-3xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>
              <img
                src={activeProject.src}
                alt={activeProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-3xl font-semibold mb-4">
                {activeProject.title}
              </h3>
              <p className="text-gray-400 mb-4">{activeProject.desc}</p>
              <p className="text-emerald-300 font-medium mb-2">
                Stack: {activeProject.devstack}
              </p>
              <div className="flex space-x-4">
                <a
                  href={activeProject.link}
                  className="text-emerald-400 hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink size={24} />
                </a>
                <a
                  href={activeProject.git}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

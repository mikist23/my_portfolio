import project1 from "../assets/images/proj10.png";
import project4 from "../assets/images/risk_project.png";
import project2 from "../assets/images/mern_project.jpg";
import project3 from "../assets/images/django_project.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
        title: "College Management System in Python Django",
        desc: "A fully functional project based on College Management System which uses Python with Django Web Framework. Django project contains all the important features.",
        devstack: "Django,Tailwind, Python, React",
        link: "#",
        git: "#",
        src: project3,
        type: "Backend",
  },
  {
    title: "Malignancy Risk Assessment Tool",
    desc: "The Malignancy Risk Assessment Tool is a powerful machine-learning application designed to evaluate whether a cell cluster is benign or malignant. By analyzing key cellular features, this tool delivers real-time, data-driven predictions to assist healthcare professionals in making critical diagnostic decisions. With an intuitive interface and interactive visualizations, the tool enhances the diagnostic process, providing clear insights that support the early detection and treatment of cancer.",
    devstack: "Django, Python, Streamlit, Deep Learning",
    link: "#",
    git: "#",
    src: project4,
    type: "Machine Learning",
  },
  {
    title: "MERN Real Estate Marketplace",
    desc: "The MERN Real Estate Marketplace is a cutting-edge platform designed to revolutionize the process of buying, selling, and renting properties. Utilizing the MERN stack (MongoDB, Express.js, React, and Node.js) for a robust and scalable architecture, this marketplace offers a seamless user experience. Key features include secure user authentication, comprehensive property listings with advanced search and filters, and real-time communication using Socket.io for instant messaging between buyers and sellers. The platform also integrates interactive maps for location-based searches, supports responsive design for optimal use across devices, and incorporates secure payment gateways for transactions.",
    devstack: "Django,Tailwind, Python, React",
    link: "#",
    git: "#",
    src: project2,
    type: "Fullstack",
  },

  {
    title: "3D Solar System Planets to Explore",
    desc: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    devstack: "Django, Python, React",
    link: "#",
    git: "#",
    src: project1,
    type: "Fullstack",
  },
];

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
        From Concept to <span className="text-emerald-300">Creation</span>
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header Section */}
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Expandable Section */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

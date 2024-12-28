import project1 from '../assets/images/proj9.jpg';
import project2 from '../assets/images/proj11.jpg';
import project3 from '../assets/images/proj12.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

const projects = [
  {
    title: "Ecommerce website",
    desc: "Give me a desc",
    devstack: "Mongo, Python, React",
    link: "#",
    git: "#",
    src: project1,
    type: "Fullstack",
  },
  {
    title: "Ecommerce website",
    desc: "Give me a desc",
    devstack: "Mongo, Python, React",
    link: "#",
    git: "#",
    src: project1,
    type: "Fullstack",
  },
  {
    title: "Ecommerce website",
    desc: "Give me a desc",
    devstack: "Mongo, Python, React",
    link: "#",
    git: "#",
    src: project1,
    type: "Fullstack",
  },
];

export default function Portfolio() {
  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ opacity: 0, transform: 'translateY(20px)', userSelect: 'auto' }}
            >
              <div className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10">
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">{index + 1}</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 transform transition-transform"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

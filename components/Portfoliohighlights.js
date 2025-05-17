'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInfoCircle,
  FaReact,
  FaNodeJs,
  FaSass,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import Image from 'next/image';
import ParticlesBg from './ParticlesBg';


const projects = [
  {
    id: 1,
    title: 'Rest Countries',
    cover: '/rest-countries-cover.png',
    url: 'https://rest-countries-demo.example.com',
    description:
      'A frontend app that fetches and displays country info using REST APIs.',
    techStack: [FaReact, SiTailwindcss, FaSass],
  },
  {
    id: 2,
    title: 'Dashboard UI',
    cover: '/dashboard-cover.png',
    url: 'https://dashboard-ui.example.com',
    description:
      'Admin dashboard template with charts and theme toggling.',
    techStack: [SiNextdotjs, FaDatabase, FaNodeJs],
  },
  {
    id: 3,
    title: 'E-Commerce App',
    cover: '/ecommerce-cover.png',
    url: 'https://ecommerce-app.example.com',
    description:
      'Mock e-commerce store with filters and shopping cart.',
    techStack: [FaReact, SiTailwindcss, SiTypescript],
  },
  {
    id: 4,
    title: 'E-Commerce App',
    cover: '/ecommerce-cover.png',
    url: 'https://ecommerce-app.example.com',
    description:
      'Mock e-commerce store with filters and shopping cart.',
    techStack: [FaReact, SiTailwindcss, SiTypescript],
  },
];

export default function PortfolioHighlights() {
  const [activeProject, setActiveProject] = useState(null);

  return (
  <section className="relative py-6 sm:py-8 text-black overflow-hidden min-h-[60vh]">
      <ParticlesBg />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center tracking-tight">
          Portfolio Highlights
        </h2>

        {/* Scrollable Project Grid */}
     <div className="rounded-xl shadow-inner px-4 py-6 sm:px-6 mb-6">
  <div className="overflow-x-auto scrollbar-custom pb-4">
    <div className="flex gap-4 sm:gap-6 min-w-full w-max">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition duration-300 relative"
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                  priority
                />

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold tracking-wide">
                      {project.title}
                    </h3>
                    <button
                      onClick={() =>
                        setActiveProject(
                          activeProject === project.id ? null : project.id
                        )
                      }
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white p-1.5 rounded-full shadow hover:scale-110 transition"
                      aria-label="More info"
                    >
                      <FaInfoCircle size={16} />
                    </button>
                  </div>
                </div>

                {/* Project Details Modal */}
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-md border border-gray-300 rounded-2xl z-30 flex flex-col p-4 sm:p-6 text-sm shadow-lg"
                    >
                      <button
                        onClick={() => setActiveProject(null)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full cursor-pointer hover:scale-110 transition"
                        aria-label="Close project details"
                      >
                        ✕
                      </button>

                      {/* Scrollable Content */}
                      <div className="overflow-y-auto mt-10 space-y-5 max-h-[80%] pr-2">
                        <div>
                          <h4 className="text-base font-semibold mb-1">
                            Description
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-1">
                            Tech Stack
                          </h4>
                          <div className="flex gap-4 overflow-x-auto text-2xl text-gray-700 pb-2">
                            {project.techStack.map((Icon, i) => (
                              <Icon
                                key={i}
                                className="hover:text-red-500 transition flex-shrink-0"
                              />
                            ))}
                          </div>
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-5 py-2 text-sm rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition text-white font-semibold text-center shadow"
                        >
                          View Project
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInfoCircle,
  FaReact,
  FaNodeJs,
  FaSass,
  FaDatabase,
  FaChevronLeft,
  FaChevronRight,
  FaFigma,
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
    title: 'Luxe Donut - Admin Dashboard',
    cover: '/Cover.jpg', // This will look for /public/rest-countries-cover.png
    url: 'https://www.behance.net/gallery/227072853/Luxe-Donut-Admin-dashboard',
    description:
      'A UI/UX Design for a Donut Shop Admin Dashboard.',
    techStack: [FaFigma],
  },
  {
    id: 2,
    title: 'Esports Streaming Site',
    cover: '/Web-Cover.png', // This will look for /public/dashboard-cover.png
    url: 'https://www.behance.net/gallery/227155627/Esports-Streaming-Site',
    description:
      'A user-friendly and engaging esports streaming website that caters to fans of competitive gaming. The design will focus on delivering a seamless experience for viewers, including discovering live matches, watching streams, interacting with content, and browsing game-related information.',
    techStack: [FaFigma],
  },
  {
    id: 3,
    title: 'Colina Health Authentication - Flow Design',
    cover: '/login cover.jpg', // This will look for /public/ecommerce-cover.png
    url: 'https://www.behance.net/gallery/227205371/Colina-Health-Authentication-Flow-Design',
    description:
      'A UI/UX internship project focused on reimagining the login, sign-up, and forgot password pages. Though not intended for production, this task helped me explore clean layouts, user-friendly forms, and responsive design.',
    techStack: [FaFigma],
  },
  {
    id: 4,
    title: 'E-Commerce App',
    cover: '/ecommerce-cover.png', // This will look for /public/ecommerce-cover.png
    url: 'https://ecommerce-app.example.com',
    description:
      'Mock e-commerce store with filters and shopping cart.',
    techStack: [FaReact, SiTailwindcss, SiTypescript],
  },
];
const BurstLetter = ({ char, index }) => {
  const [isBursting, setIsBursting] = useState(false);

  return (
    <span
      className={`inline-block ${isBursting ? 'animate-burst' : ''}`}
      onMouseEnter={() => {
        setIsBursting(true);
        setTimeout(() => setIsBursting(false), 1000);
      }}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

const BurstText = ({ text }) => (
  <span className="cursor-pointer">
    {text.split('').map((char, index) => (
      <BurstLetter key={index} char={char} index={index} />
    ))}
  </span>


);
export default function PortfolioHighlights() {
  const [activeProject, setActiveProject] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Helper for mobile navigation
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const showLeft = mobileIndex > 0;
  const showRight = mobileIndex < projects.length - 1;

  return (
  <section className="relative py-6 sm:py-8 text-black overflow-hidden min-h-[60vh]">
  <ParticlesBg />
  <div className="relative z-10 container mx-auto px-2 sm:px-4 max-w-6xl">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center tracking-tight">
      <BurstText text="Portfolio Highlights" />
    </h2>

    {/* Mobile: Arrow navigation, show one project */}
  <div className="sm:hidden flex items-center justify-center gap-2 mb-4 px-2">

      <button
        onClick={() => setMobileIndex(i => Math.max(i - 1, 0))}
        disabled={!showLeft}
        className={`p-2 rounded-full bg-gray-200 text-gray-600 shadow ${!showLeft ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-300'}`}
        aria-label="Previous project"
      >
        <FaChevronLeft size={20} />
      </button>
      <motion.div
        key={projects[mobileIndex].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden group relative"

      >
        <Image
          src={projects[mobileIndex].cover}
          alt={projects[mobileIndex].title}
          width={400}
          height={200}
          className="object-cover w-full h-36"
        />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-wide">
              {projects[mobileIndex].title}
            </h3>
            <button
              onClick={() =>
                setActiveProject(
                  activeProject === projects[mobileIndex].id ? null : projects[mobileIndex].id
                )
              }
              className="bg-gradient-to-r from-red-600 to-red-500 text-white p-1.5 rounded-full shadow hover:scale-110 transition cursor-pointer"
              aria-label="More info"
            >
              <FaInfoCircle size={16} />
            </button>
          </div>
        </div>
        {/* Project Details Modal for mobile */}
        <AnimatePresence>
          {activeProject === projects[mobileIndex].id && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-md border border-gray-300 rounded-2xl z-30 flex flex-col p-4 text-sm shadow-lg"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full cursor-pointer hover:scale-110 transition"
                aria-label="Close project details"
              >
                ✕
              </button>
              <div className="overflow-y-auto mt-10 space-y-5 max-h-[80%] pr-2">
                <div>
                  <h4 className="text-base font-semibold mb-1">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{projects[mobileIndex].description}</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Tech Stack</h4>
                  <div className="flex gap-4 overflow-x-auto text-2xl text-gray-700 pb-2">
                    {projects[mobileIndex].techStack.map((Icon, i) => (
                      <Icon key={i} className="hover:text-red-500 transition flex-shrink-0" />
                    ))}
                  </div>
                </div>
                <a
                  href={projects[mobileIndex].url}
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
      <button
        onClick={() => setMobileIndex(i => Math.min(i + 1, projects.length - 1))}
        disabled={!showRight}
        className={`p-2 rounded-full bg-gray-200 text-gray-600 shadow ${!showRight ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-300'}`}
        aria-label="Next project"
      >
        <FaChevronRight size={20} />
      </button>
    </div>

    {/* Desktop: Horizontal scroll as before */}
    <div className="hidden sm:block rounded-xl shadow-inner px-2 py-4 sm:px-6 mb-6">
      <div className="overflow-x-auto scrollbar-custom pb-4">
        <div className="flex gap-4 sm:gap-6 min-w-full w-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 max-w-[85vw] sm:w-72 md:w-80 lg:w-96 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition duration-300 relative"
            >
              <Image
                src={project.cover}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-32 sm:h-36 md:h-44 lg:h-48"
              />
              <div className="p-3 sm:p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-lg font-semibold tracking-wide">
                    {project.title}
                  </h3>
                  <button
                    onClick={() =>
                      setActiveProject(
                        activeProject === project.id ? null : project.id
                      )
                    }
                    className="bg-gradient-to-r from-red-600 to-red-500 text-white p-1.5 rounded-full shadow hover:scale-110 transition cursor-pointer"
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






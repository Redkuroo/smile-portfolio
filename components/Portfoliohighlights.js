'use client';

import { useState, useMemo } from 'react';
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

// Add a `category` field to each project
const projects = [
  {
    id: 1,
    title: 'Luxe Donut - Admin Dashboard',
    cover: '/Cover.jpg',
    url: 'https://www.behance.net/gallery/227072853/Luxe-Donut-Admin-dashboard',
    description: 'A UI/UX Design for a Donut Shop Admin Dashboard.',
    techStack: [FaFigma],
    category: 'Design',
  },
  {
    id: 2,
    title: 'Esports Streaming Site',
    cover: '/Web-Cover.png',
    url: 'https://www.behance.net/gallery/227155627/Esports-Streaming-Site',
    description: 'A user-friendly and engaging esports streaming website for competitive gaming fans.',
    techStack: [FaFigma],
    category: 'Design',
  },
  {
    id: 3,
    title: 'Colina Health Authentication - Flow Design',
    cover: '/login cover.jpg',
    url: 'https://www.behance.net/gallery/227205371/Colina-Health-Authentication-Flow-Design',
    description: 'Reimagined login, signup, and forgot-password pages during a UI/UX internship.',
    techStack: [FaFigma],
    category: 'Design',
  },
  {
    id: 4,
    title: 'E-Commerce App',
    cover: '/ecommerce-cover.png',
    url: 'https://ecommerce-app.example.com',
    description: 'Mock e-commerce store with filters and shopping cart.',
    techStack: [FaReact, SiTailwindcss, SiTypescript],
    category: 'Frontend',
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

export { BurstText };

export default function PortfolioHighlights({ filter = 'All' }) {
  const [activeProject, setActiveProject] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const showLeft = mobileIndex > 0;
  const showRight = mobileIndex < filteredProjects.length - 1;

  const handleSwipe = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      if (mobileIndex < filteredProjects.length - 1) setMobileIndex((i) => i + 1);
    } else if (offset > 100 || velocity > 500) {
      if (mobileIndex > 0) setMobileIndex((i) => i - 1);
    }
  };

  if (filteredProjects.length === 0) {
    return (
      <section className="py-6 text-center text-gray-500">
        <p>No projects available in this category.</p>
      </section>
    );
  }

  return (
    <section className="relative py-6 sm:py-8 text-black dark:text-white overflow-hidden min-h-[60vh]">
      <ParticlesBg />
      <div className="relative z-10 container mx-auto px-2 sm:px-4 max-w-6xl">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center tracking-tight">
          <BurstText text={filter === 'All' ? 'Portfolio Highlghts' : `${filter} Projects`} />
        </h2>

        {/* Mobile */}
        <div className="sm:hidden flex flex-col items-center gap-4 mb-6 px-2">
          <motion.div
            key={projects[mobileIndex].id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 overflow-hidden group relative"
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
                <h3 className="text-base font-medium tracking-tight leading-snug break-words">
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

            {/* Bottom Sheet Modal */}
            <AnimatePresence>
              {activeProject === projects[mobileIndex].id && (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 bottom-0 w-full bg-white dark:bg-zinc-900 border-t border-gray-300 dark:border-zinc-700 rounded-t-2xl z-30 p-4 text-sm shadow-lg max-h-[80%] overflow-y-auto"
                >
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-2.5 right-4 p-1.5 rounded-full cursor-pointer hover:scale-110 transition"
                    aria-label="Close project details"
                  >
                    ✕
                  </button>
                  <div className="mt-8 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold mb-1">Description</h4>
                      <p className="text-gray-600 leading-relaxed">{projects[mobileIndex].description}</p>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-1">Tech Stack</h4>
                      <div className="flex gap-4 text-2xl text-gray-700">
                        {projects[mobileIndex].techStack.map((Icon, i) => (
                          <Icon key={i} className="hover:text-red-500 transition" />
                        ))}
                      </div>
                    </div>
                    <a
                      href={projects[mobileIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition text-white font-semibold text-center shadow"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Animated Pagination Dots */}
          <div className="flex gap-2 mt-2">
            {projects.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setMobileIndex(i)}
                className="w-2.5 h-2.5 rounded-full bg-gray-300"
                animate={{
                  scale: i === mobileIndex ? 1.5 : 1,
                  backgroundColor: i === mobileIndex ? '#ef4444' : '#d1d5db',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Scroll Cards – No change */}
        <div className="hidden sm:block rounded-xl shadow-inner px-2 py-4 sm:px-6 mb-6">
          <div className="overflow-x-auto scrollbar-custom pb-4">
            <div className="flex gap-4 sm:gap-6 min-w-full w-max">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96 bg-white dark:bg-zinc-800 rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition duration-300 relative"
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-32 sm:h-36 md:h-44 lg:h-48"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold tracking-wide break-words leading-tight">
                        {project.title}
                      </h3>
                      <button
                        onClick={() =>
                          setActiveProject(
                            activeProject === project.id ? null : project.id
                          )
                        }
                        className="ml-2 bg-gradient-to-r from-red-600 to-red-500 text-white p-1.5 rounded-full shadow hover:scale-110 transition cursor-pointer"
                        aria-label="More info"
                      >
                        <FaInfoCircle size={16} />
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-gray-300 dark:border-zinc-700 rounded-2xl z-30 flex flex-col p-4 text-sm shadow-lg"
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
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                          </div>
                          <div>
                            <h4 className="text-base font-semibold mb-1">Tech Stack</h4>
                            <div className="flex gap-4 text-2xl text-gray-700">
                              {project.techStack.map((Icon, i) => (
                                <Icon key={i} className="hover:text-red-500 transition" />
                              ))}
                            </div>
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition text-white font-semibold text-center shadow"
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

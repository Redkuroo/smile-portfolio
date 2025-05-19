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

  return (
  <section className="relative py-6 sm:py-8 text-black overflow-hidden min-h-[60vh]">
  <ParticlesBg />
  <div className="relative z-10 container mx-auto px-2 sm:px-4 max-w-6xl">
    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-12 text-center tracking-tight">
      <BurstText text="Portfolio Highlights" />
    </h2>

    <div className="rounded-xl shadow-inner px-2 py-4 sm:px-6 mb-6">
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

              {/* ...keep modal the same */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

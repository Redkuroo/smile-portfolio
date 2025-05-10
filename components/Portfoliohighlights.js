'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaReact, FaNodeJs, FaSass, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Rest Countries',
    cover: '/rest-countries-cover.png',
    url: 'https://rest-countries-demo.example.com',
    description:
      'A frontend application that fetches and displays information about countries using REST APIs. Users can search, filter, and view detailed info including population, region, and borders.',
    techStack: [FaReact, SiTailwindcss, FaSass],
  },
  {
    id: 2,
    title: 'Dashboard UI',
    cover: '/dashboard-cover.png',
    url: 'https://dashboard-ui.example.com',
    description:
      'An admin dashboard template with responsive charts, user management, and light/dark theme toggle. Built with modern design and component-driven development.',
    techStack: [SiNextdotjs, FaDatabase, FaNodeJs],
  },
  {
    id: 3,
    title: 'E-Commerce App',
    cover: '/ecommerce-cover.png',
    url: 'https://ecommerce-app.example.com',
    description:
      'A mock e-commerce platform showcasing product listings, shopping cart functionality, and category filters. Integrated with Stripe for payments (in dev mode).',
    techStack: [FaReact, SiTailwindcss, SiTypescript],
  },
  {
    id: 4,
    title: 'Portfolio Site',
    cover: '/portfolio-cover.png',
    url: 'https://portfolio.example.com',
    description:
      'My personal developer portfolio showcasing web projects, design process, and contact form integration. Fully responsive and built with modern tools.',
    techStack: [SiNextdotjs, SiTailwindcss],
  },
];

export default function PortfolioHighlights() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-wide">
          Portfolio Highlights
        </h2>

        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-custom">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative min-w-[300px] md:min-w-[400px] bg-[#1e1e1e] rounded-2xl shadow-lg p-4 flex-shrink-0 border border-[#333] hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  className="rounded-md w-full h-auto object-cover max-h-[220px]"
                  width={500}
                  height={300}
                  priority
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-white text-lg font-semibold">{project.title}</span>
                <button
  onClick={() =>
    setActiveProject(activeProject === project.id ? null : project.id)
  }
  className="bg-gradient-to-tr from-[#e53935] to-[#ff6f61] p-2 rounded-full hover:scale-105 transition-all duration-300 shadow-md focus:outline-none"
  aria-label="More info"
  aria-expanded={activeProject === project.id}
>
  <FaInfoCircle size={18} />
</button>

              </div>

              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-[#1f1f1f]/95 backdrop-blur-lg rounded-2xl z-30 flex flex-col text-white overflow-hidden"
                  >
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <button
  onClick={() => setActiveProject(null)}
  className="absolute top-4 right-4 bg-gradient-to-tr from-[#e53935] to-[#ff6f61] hover:scale-110 text-white p-2 rounded-full shadow-md transition-all duration-300"
  aria-label="Close project details"
>
  ✕
</button>


                      <div>
                        <h4 className="text-xl font-semibold mb-2">Project Description</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
                        <div className="flex gap-4 text-2xl">
                          {project.techStack.map((Icon, i) => (
                            <Icon key={i} className="text-white" />
                          ))}
                        </div>
                      </div>

                      <a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#e53935] to-[#ff6f61] hover:scale-105 transition-all duration-300 text-white font-semibold shadow-md"
>
  View Page
</a>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

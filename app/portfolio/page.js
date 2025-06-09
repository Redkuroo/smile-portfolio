'use client';

import { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import SocialSidebar from '../../components/SocialSideBar';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaFigma, FaReact, FaInfoCircle } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

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

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const tabs = ['All', 'Frontend', 'Design'];

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <ParticlesBg />
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="hidden lg:block lg:fixed lg:top-20 lg:left-4 z-50">
          <SocialSidebar />
        </aside>

        <main className="flex-1 w-full pt-24 px-4 lg:pl-32">
          <section className="max-w-6xl mx-auto p-6">
            <div className="flex justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-full font-medium transition shadow ${
                    filter === tab
                      ? 'bg-red-500 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition relative"
                  >
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold leading-tight">
                          {project.title}
                        </h3>
                        <button
                          onClick={() =>
                            setActiveProject(activeProject === project.id ? null : project.id)
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
                          key="details"
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
                          <div className="overflow-y-auto mt-10 space-y-4 max-h-[80%] pr-2">
                            <div>
                              <h4 className="text-base font-semibold mb-1">Description</h4>
                              <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold mb-1">Tech Stack</h4>
                              <div className="flex gap-4 text-2xl text-gray-700">
                                {project.techStack.map((Icon, idx) => (
                                  <Icon key={idx} className="hover:text-red-500 transition" />
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
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-8 text-gray-500 text-sm text-center p-4">
        &copy; 2025 John Smile Mella. All rights reserved.
      </footer>
    </div>
  );
}

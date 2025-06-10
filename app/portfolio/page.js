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
    return filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white relative">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBg />
      </div>

      <header className="sticky top-0 z-50 bg-gray-100 dark:bg-zinc-900">
        <Navbar />
      </header>

      <div className="flex flex-1 flex-col lg:flex-row relative">
        <aside className="hidden lg:block lg:fixed lg:top-20 lg:left-4 lg:w-16 z-50">
          <SocialSidebar />
        </aside>

        <main className="flex-1 pt-20 px-4 lg:pl-32">
          <section className="max-w-6xl mx-auto p-6">
            <nav className="flex justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-full font-medium transition-shadow duration-300 ease-in-out ${
                    filter === tab
                      ? 'bg-red-500 text-white shadow-md scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  aria-pressed={filter === tab}
                >
                  {tab}
                </button>
              ))}
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project, i) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition duration-300 relative z-10"
                  >
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={400}
                      height={200}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover w-full h-48"
                      priority={i < 3}
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                        <button
                          onClick={() =>
                            setActiveProject(activeProject === project.id ? null : project.id)
                          }
                          className="ml-2 bg-gradient-to-r from-red-600 to-red-500 text-white p-1.5 rounded-full shadow hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                          aria-label={`Toggle details for ${project.title}`}
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
                          role="dialog"
                          aria-labelledby={`project-title-${project.id}`}
                        >
                          <button
                            onClick={() => setActiveProject(null)}
                            className="cursor-pointer absolute top-2.5 right-2.5 p-1.5 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"
                            aria-label="Close project details"
                          >
                            ✕
                          </button>
                          <div className="overflow-y-auto mt-10 space-y-4 max-h-[80%] pr-2">
                            <div>
                              <h4 id={`project-title-${project.id}`} className="text-base font-semibold mb-1">
                                Description
                              </h4>
                              <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                            <div>
                              <h4 className="text-base font-semibold mb-1">Tech Stack</h4>
                              <div className="flex gap-4 text-2xl text-gray-700">
                                {project.techStack.map((Icon, idx) => (
                                  <Icon
                                    key={idx}
                                    className="hover:text-red-500 transition duration-200"
                                    aria-label={Icon.name}
                                  />
                                ))}
                              </div>
                            </div>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition duration-300 ease-in-out text-white font-semibold text-center shadow"
                            >
                              View Project
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>

      <footer className="mt-auto text-gray-500 dark:text-gray-400 text-sm text-center p-4 bg-gray-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700">
        <p>© {new Date().getFullYear()} John Smile Mella. All rights reserved.</p>
      </footer>
    </div>
  );
}
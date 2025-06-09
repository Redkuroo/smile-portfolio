'use client';
import React from 'react';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExperienceCard({ title, date, role, duties }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <article className="relative pl-0 z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-zinc-700 p-4 sm:p-6"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-2 truncate">
          {role}
        </h3>
        <div className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 truncate">
          {title}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
          <FaCalendarAlt className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>{date}</span>
        </div>
        <hr className="border-gray-300 dark:border-zinc-700 mb-4" />
        <div>
          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
            Duties & Responsibilities
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
            {duties.map((duty, idx) => (
              <li key={idx} className="leading-relaxed">
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}
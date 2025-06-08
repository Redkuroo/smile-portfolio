'use client';
import React from 'react';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ExperienceCard({ title, date, role, duties, year }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative pl-16">
      {/* Year Badge */}
      <div className="absolute left-0 top-3 w-12 text-center">
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 text-white text-sm font-bold rounded-full px-2 py-1 shadow-md">
          {year}
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-zinc-700 p-4 sm:p-5"
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 truncate">{title}</h2>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
          <FaCalendarAlt className="mr-2" />
          {date}
        </div>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <FaBriefcase className="mr-2" />
          {role}
        </div>

        <hr className="border-gray-300 dark:border-zinc-700 mb-4" />

        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
          Duties & Responsibilities
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {duties.map((duty, idx) => (
            <li key={idx}>{duty}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import {
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
} from 'react-icons/si';
import Experience from './experience';

const floatingVariants = {
  floating: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  still: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export default function FloatingEffects() {
  const iconComponents = useMemo(
    () => [
      { Icon: SiVuedotjs, color: '#41b883', label: 'Vue.js' },
      { Icon: SiTypescript, color: '#3178c6', label: 'TypeScript' },
      { Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' },
      { Icon: SiReact, color: '#61dafb', label: 'React' },
      { Icon: SiNextdotjs, color: '#000000', label: 'Next.js' },
      { Icon: SiFigma, color: '#f24e1e', label: 'Figma' },
    ],
    []
  );

  const [rearranged, setRearranged] = useState(false);
  const [iconPositions, setIconPositions] = useState([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIconPositions(
      iconComponents.map(() => ({
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
      }))
    );
  }, [iconComponents]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setRearranged(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const ref = skillsRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  const baseIconStyle =
    'bg-white rounded-full w-12 h-12 p-2 shadow-md flex items-center justify-center transition duration-300';

  // Experience data
 // Add this inside your FloatingEffects component file

const experienceData = [
  {
    title: 'Hububble',
    date: 'May, 2021 – Present',
    role: 'Junior Front-End Engineer',
    duties: [
      'Developed web applications using JavaScript, React, Tailwind, and NextJS.',
      'Created websites, landing pages, and email templates using HubSpot CMS.',
      'Assisted in maintenance and troubleshooting of client websites.',
    ],
    year: 2021,
  },
  {
    title: 'Upwork',
    date: 'October, 2021 – Present',
    role: 'Freelance Front-End Engineer',
    duties: [
      'Developed and implemented CMS websites using HubSpot.',
      'Resolved technical issues and improved user experience.',
      'Achieved top-rated badge for performance and customer satisfaction.',
    ],
    year: 2021,
  },
  {
    title: 'Another Client',
    date: 'January, 2022 – Present',
    role: 'Frontend Consultant',
    duties: [
      'Collaborated with teams to deliver performant web interfaces.',
      'Introduced design systems to improve scalability.',
    ],
    year: 2022,
  },
];

// Sort experiences from oldest to newest
const sortedExperiences = experienceData.sort((a, b) => a.year - b.year);


  return (
    <>
      <ParticlesBg />

      {/* Floating Icons */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full relative">
          {iconComponents.map(({ Icon }, idx) => (
            <motion.div
              key={idx}
              layoutId={`icon-${idx}`}
              className="absolute"
              style={{
                top: `${iconPositions[idx]?.top || 0}%`,
                left: `${iconPositions[idx]?.left || 0}%`,
              }}
              variants={floatingVariants}
              initial={{ opacity: 1 }}
              animate={
                rearranged
                  ? { ...floatingVariants.still, opacity: 1 }
                  : { ...floatingVariants.floating, opacity: 1 }
              }
              transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: idx * 0.05,
              }}
            >
              <motion.div
                className="bg-white rounded-full w-14 h-14 p-2 shadow-md flex items-center justify-center text-gray-400"
                initial={{ scale: 1 }}
                animate={{ scale: rearranged ? 0.7 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={28} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-8">
        <div
          ref={skillsRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
        >
          {iconComponents.map(({ Icon, color, label }, idx) => (
            <motion.div
              key={idx}
              className="w-24 h-28 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-3 bg-white shadow-sm"
              layout
              transition={{ layout: { duration: 0.8, ease: 'easeInOut' } }}
            >
              {rearranged && (
                <>
                  <motion.div
                    layoutId={`icon-${idx}`}
                    className={baseIconStyle}
                    style={{ color }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <motion.span
                    className="mt-2 text-sm text-gray-700 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {label}
                  </motion.span>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {rearranged && (
          <motion.div
            className="mt-8 text-center max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills</h2>
            <p className="text-gray-600">
              Successfully shipped solutions using the following technologies.
            </p>
          </motion.div>
        )}
      </div>

    
      {/* Experience Timeline Section */}
<div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
    My Experience
  </h2>

  {/* Vertical timeline line */}
  <motion.div
    className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-yellow-300 via-pink-400 to-indigo-500 rounded-full"
    initial={{ height: 0 }}
    whileInView={{ height: '100%' }}
    transition={{ duration: 2, ease: 'easeOut' }}
  />

  <div className="relative flex flex-col gap-12 ml-10">
    {sortedExperiences.map((exp, index) => (
      <Experience
        key={index}
        title={exp.title}
        date={exp.date}
        role={exp.role}
        duties={exp.duties}
        year={exp.year}
      />
    ))}
  </div>
</div>

    </>
  );
}

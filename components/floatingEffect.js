'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import {
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiTailwindcss,
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
      { Icon: SiTailwindcss, color: '#41b883', label: 'Tailwindcss' },
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

  // Setup icon positions randomly on mount
  useEffect(() => {
    setIconPositions(
      iconComponents.map(() => ({
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
      }))
    );
  }, [iconComponents]);

  // Observe when to rearrange icons
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setRearranged(entry.isIntersecting),
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
  const experienceData = [
    {
      title: 'Focusinc Group Corp.',
      date: 'December 2020 - May 2021',
      role: 'Network Administrator Intern',
      duties: [
        'Assist in the maintenance and configuration of network systems including routers, switches, and other networking hardware.',
        'Monitor network performance and troubleshoot connectivity issues.',
      ],
      year: 2021,
    },
    {
      title: 'Holy Cross of Davao College',
      date: 'July 2022 - June 2025',
      role: 'IT Support',
      duties: [
        'Maintain and monitor IT lab systems by performing regular updates and addressing technical issues promptly.',
        'Provide technical support and troubleshooting assistance to students and faculty.',
        'Assist in the setup and configuration of hardware, software, and network systems.',
      ],
      year: 2021,
    },
    {
      title: 'Jairosoft',
      date: 'February 2025 – June 2025',
      role: 'UI/UX Designer Intern',
      duties: [
        'Designed responsive user interfaces for web and mobile platforms, improving user engagement by 30%',
        'Created wireframes, prototypes, and high-fidelity mockups using Figma',
        'Developed and maintained a design system to ensure brand consistency across all digital touchpoints',
        'Collaborated with developers and product managers to implement designs aligned with project goals and timelines',
      ],
      year: 2022,
    },
  ];

  // Sort from oldest to newest
  const sortedExperiences = experienceData.sort((a, b) => a.year - b.year);

  // Scroll-based vertical timeline animation - ENHANCED
  const experienceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ['start 0.8', 'end 0.2'], // Better offset points
  });
  
  // Add smooth spring animation for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const animatedHeight = useTransform(smoothProgress, [0, 1], ['0%', '120%']); // Adjusted height range
  
  // Additional timeline animations
  const timelineOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);
  const timelineScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 1.02]);
  
  // Individual experience item animations - FIXED FOR EQUAL OPACITY
  const getExperienceAnimation = (index) => {
    const totalItems = sortedExperiences.length;
    // Give each item equal spacing across the scroll range
    const itemProgress = index / Math.max(totalItems, 1);
    const triggerStart = itemProgress * 0.5; // Start earlier
    const triggerEnd = triggerStart + 0.3; // Ensure full opacity is reached
    
    return {
      opacity: useTransform(smoothProgress, [triggerStart, triggerEnd, 1], [0, 1, 1]), // Stay at full opacity
      y: useTransform(smoothProgress, [triggerStart, triggerEnd], [50, 0]),
      scale: useTransform(smoothProgress, [triggerStart, triggerEnd], [0.95, 1])
    };
  };

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

      {/* Experience Timeline Section - ENHANCED */}
      <div
        ref={experienceRef}
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">
          My Experience
        </h2>

        {/* Vertical timeline line (scroll animated) - ENHANCED */}
        <motion.div
          className="absolute left-6 top-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-800 rounded-full origin-top"
          style={{ 
            height: animatedHeight,
            opacity: timelineOpacity,
            scaleY: timelineScale
          }}
        />

        <div className="relative flex flex-col gap-12 ml-10">
          {sortedExperiences.map((exp, index) => {
            const experienceAnimation = getExperienceAnimation(index);
            return (
              <motion.div
                key={`${exp.title}-${index}`}
                style={experienceAnimation}
              >
                <Experience
                  title={exp.title}
                  date={exp.date}
                  role={exp.role}
                  duties={exp.duties}
                  year={exp.year}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
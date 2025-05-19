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
      { Icon: SiVuedotjs, color: '#41b883' },
      { Icon: SiTypescript, color: '#3178c6' },
      { Icon: SiJavascript, color: '#f7df1e' },
      { Icon: SiReact, color: '#61dafb' },
      { Icon: SiNextdotjs, color: '#000000' },
      { Icon: SiFigma, color: '#f24e1e' },
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
      { threshold: 0.5 }
    );
    const ref = skillsRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <>
      <ParticlesBg />

      {/* Floating Icons */}
      <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
        {!rearranged && iconPositions.length > 0 && (
          <div className="w-full h-full relative">
            {iconComponents.map(({ Icon, color }, idx) => (
              <motion.div
                key={idx}
                layoutId={`icon-${idx}`}
                className="absolute"
                style={{
                  top: `${iconPositions[idx].top}%`,
                  left: `${iconPositions[idx].left}%`,
                }}
                variants={floatingVariants}
                animate="floating"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div
                  className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center"
                  style={{ color: color }}
                >
                  <Icon size={28} />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Target Grid with Cards */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div
          ref={skillsRef}
          className="grid grid-cols-3 gap-6 mt-12"
        >
          {iconComponents.map(({ Icon, color }, idx) => (
            <motion.div
              key={idx}
              className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative"
              layout
              transition={{ layout: { duration: 0.8, ease: 'easeInOut' } }}
            >
              {rearranged && (
                <motion.div
                  layoutId={`icon-${idx}`}
                  className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center"
                  style={{ color: color }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Icon size={28} />
                </motion.div>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills & Experience</h2>
            <p className="text-gray-600">
              Gained experience and successfully shipped solutions using the following technologies.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}

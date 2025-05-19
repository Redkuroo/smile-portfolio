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

const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function FloatingEffects() {
  const iconComponents = [SiVuedotjs, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiFigma];
  const icons = useMemo(() => iconComponents.map((Icon, index) => ({
    id: index,
    icon: <Icon key={index} size={30} />,
  })), []);

  const positions = useMemo(
    () => [
      'top-2/3 left-10', 'bottom-10 right-1/4', 'top-12 right-12',
      'bottom-1/4 left-20', 'top-1/4 right-1/3', 'top-1/2 right-1/1',
    ],
    []
  );

  const [rearranged, setRearranged] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const shuffled = shuffleArray(positions);
    const withPosition = icons.map((item, index) => ({
      ...item,
      position: shuffled[index] || '',
    }));
    setFloatingIcons(withPosition);
  }, [icons, positions]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRearranged(true);
      },
      { threshold: 0.5 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticlesBg />

      <div ref={skillsRef} className="relative w-full min-h-screen flex items-center justify-center p-8">
        <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-6">
          {floatingIcons.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              className={
                rearranged
                  ? 'relative w-16 h-16 flex justify-center items-center'
                  : `absolute ${item.position}`
              }
              animate={
                rearranged
                  ? { y: 0 }
                  : { y: [0, -15, 0] }
              }
              transition={{
                y: {
                  duration: rearranged ? 0.8 : 4 + idx * 0.1,
                  repeat: rearranged ? 0 : Infinity,
                  ease: 'easeInOut',
                },
                layout: { duration: 1, ease: 'easeInOut' },
              }}
            >
              <div className="bg-white rounded-full p-3 shadow-md hover:scale-110 hover:text-red-600 transition duration-300">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text section appears beside after rearranged */}
        {rearranged && (
          <motion.div
            className="absolute bottom-8 md:bottom-auto md:right-16 max-w-md text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-2">Skills & Experience.</h2>
            <p className="text-gray-700">
              Gained experience and successfully shipped solutions using the following technologies.
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
}

'use client';
import { useEffect, useMemo, useState } from 'react';
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
  const icons = useMemo(() => iconComponents.map((Icon, index) => <Icon key={index} size={28} />), []);

  const positions = useMemo(() => [
    'top-2/3 left-10', 'bottom-10 right-1/4', 'top-12 right-12',
    'bottom-1/4 left-20', 'top-1/4 right-1/3', 'top-1/2 right-1/1',
    'top-5 left-5', 'top-10 right-10', 'top-1/2 left-1/3',
    'bottom-1/3 right-8', 'bottom-5 left-16', 'top-6 right-24',
    'bottom-20 left-10', 'top-1/3 right-1/4', 'bottom-12 right-2',
    'top-3 left-20', 'top-1/4 left-1/2', 'bottom-1/2 right-1/2',
    'top-14 right-1/5', 'bottom-8 left-1/3', 'top-1/6 right-10',
    'top-1/5 left-8', 'bottom-3 right-14', 'top-10 left-1/6',
    'bottom-1/5 right-1/3', 'top-2 right-6',
  ], []);

  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(positions);
    const randomized = icons.slice(0, positions.length).map((icon, index) => ({
      icon,
      style: shuffled[index],
    }));
    setFloatingIcons(randomized);
  }, [icons, positions]);

  return (
    <>
      <ParticlesBg />
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute text-gray-400 z-[-1] ${item.style}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="bg-white rounded-full w-14 h-14 p2 shadow-md flex items-center justify-center transition duration-300">
            {item.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
}
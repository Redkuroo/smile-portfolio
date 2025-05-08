'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
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

// Utility: Shuffle function
const shuffleArray = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const BurstLetter = ({ char, index }) => {
  const [isBursting, setIsBursting] = useState(false);

  return (
    <span
      className={`inline-block ${isBursting ? 'animate-burst' : ''}`}
      onMouseEnter={() => {
        setIsBursting(true);
        setTimeout(() => setIsBursting(false), 1000);
      }}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );
};

const BurstText = ({ text }) => (
  <span className="cursor-pointer">
    {text.split('').map((char, index) => (
      <BurstLetter key={index} char={char} index={index} />
    ))}
  </span>
);

export default function HeroSection() {
  const titles = ['Frontend Developer', 'UI/UX Designer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // Handle title transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsChanging(false);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const icons = useMemo(
    () => [
      <SiVuedotjs size={30} />,
      <SiTypescript size={30} />,
      <SiJavascript size={30} />,
      <SiReact size={30} />,
      <SiNextdotjs size={30} />,
      <SiFigma size={30} />,
    ],
    []
  );

  const positions = [
    'top-2/3 left-10',
    'bottom-10 right-1/4',
    'top-12 right-12',
    'bottom-1/4 left-20',
    'top-1/4 right-1/3',
    'top-1/2 right-1/1',
    'top-5 left-5',
    'top-10 right-10',
    'top-1/2 left-1/3',
    'bottom-1/3 right-8',
    'bottom-5 left-16',
    'top-6 right-24',
    'bottom-20 left-10',
    'top-1/3 right-1/4',
    'bottom-12 right-2',
    'top-3 left-20',
    'top-1/4 left-1/2',
    'bottom-1/2 right-1/2',
    'top-14 right-1/5',
    'bottom-8 left-1/3',
    'top-1/6 right-10',
    'top-1/5 left-8',
    'bottom-3 right-14',
    'top-10 left-1/6',
    'bottom-1/5 right-1/3',
    'top-2 right-6',
  ];
  

  // Randomize icons with positions per render
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    const shuffledPositions = shuffleArray(positions);
    const randomizedIcons = icons.map((icon, index) => ({
      icon,
      style: shuffledPositions[index],
    }));
    setFloatingIcons(randomizedIcons);
  }, []);
  

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-16 md:py-24 lg:py-32">
            <ParticlesBg />
      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
  <motion.div
    key={idx}
    className={`absolute text-gray-400 z-0 ${item.style}`}
    initial={{ y: 0 }}
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="bg-white rounded-full p-2 shadow-md hover:scale-110 hover:text-red-600 transition duration-300">
      {item.icon}
    </div>
  </motion.div>
))}



      {/* Content */}

      <div className="container relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <BurstText text="John Smile Mella" />
          </h1>

          <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center md:justify-start">
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-black transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}
            >
              {titles[titleIndex]}
            </h2>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            <BurstText text="Delivering pixel-perfect frontend development with UX insight." />
          </p>

          <div className="pt-4">
          <Link href="#contact">
  <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 text-white font-bold rounded-full py-3 px-8 block text-center shadow-lg hover:brightness-110 transition-all duration-300 animate-subtlePulse">
    Hire Me
  </span>
</Link>



          </div>
        </div>

     {/* Image Section */}
     <div className="w-full md:w-1/2 flex justify-center md:justify-end">
  <div className="w-74 h-74 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">
    <img
      src="/akosismile.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      </div>
    </section>
  );
}

'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import HeroFloatingIcons from './heroFloatingIcons';
import SunMoonToggle from './SunMoonToggle';
import { useTheme } from 'next-themes';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const titleVariants = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    y: -20,
    opacity: 0
  }
};

// Shuffle utility
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
      className={`inline-block text-black dark:text-white ${isBursting ? 'animate-burst' : ''}`}
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
  <span className="cursor-pointer text-black dark:text-white">
    {text.split('').map((char, index) => (
      <BurstLetter key={index} char={char} index={index} />
    ))}
  </span>
);

function Sun({ onClick }) {
  return (
    <mesh onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial emissive="yellow" color="yellow" />
    </mesh>
  );
}

function Moon({ onClick }) {
  return (
    <mesh onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

export default function HeroSection() {
  const titles = ['Frontend Developer', 'UI/UX Designer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const titleCount = titles.length;
  const { theme, setTheme } = useTheme();

  // Scroll-triggered animation controls
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titleCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [titleCount]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-zinc-900"
    >
      <ParticlesBg />
      <HeroFloatingIcons />

      <div className="container relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap text-black dark:text-white">
            <BurstText text="John Smile Mella" />
          </h1>

          <div className="h-28 md:h-32 lg:h-36 flex items-center justify-center md:justify-start overflow-hidden">
            <motion.h2
              key={titleIndex}
              variants={titleVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="w-full text-4xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white text-center md:text-left leading-[1.15]"
            >
              {titles[titleIndex]}
            </motion.h2>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">
            <BurstText text="Delivering pixel-perfect frontend development with UX insight." />
          </p>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            <Link href="#contact">
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 text-white dark:text-white font-bold rounded-full py-3 px-8 block text-center shadow-lg hover:brightness-110 transition-all duration-300 animate-subtlePulse">
                Hire Me
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          initial="hidden"
          animate={controls}
          variants={fadeInRight}
        >
          <div className="w-74 h-74 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
            <SunMoonToggle />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

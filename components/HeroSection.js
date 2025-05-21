'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import HeroFloatingIcons from './heroFloatingIcons';
import Image from 'next/image';

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
 const titleCount = titles.length;

useEffect(() => {
  const interval = setInterval(() => {
    setIsChanging(true);
    setTimeout(() => {
      setTitleIndex((prev) => (prev + 1) % titleCount);
      setIsChanging(false);
    }, 500);
  }, 2000);
  return () => clearInterval(interval);
}, [titleCount]);





  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-16 md:py-24 lg:py-32">
            <ParticlesBg />
      {/* Floating Icons */}
      <HeroFloatingIcons />



      {/* Content */}

      <div className="container relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
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
    <Image
      src="/akosismile.JPG"
      alt="Profile"
      className="w-full h-full object-cover"
      height={200}
      width={200}
    />
  </div>
</div>


      </div>
    </section>
  );
}

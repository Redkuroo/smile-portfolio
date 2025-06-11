'use client';
import { motion } from 'framer-motion';
import { BurstText } from './Portfoliohighlights';
import ParticlesBg from './ParticlesBg';

export default function About() {
  return (
    <section 
      className="py-8 sm:py-12 md:py-16 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white relative"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ParticlesBg />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.h2
          id="about-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <BurstText text="About Me" />
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-center bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 border border-zinc-200 dark:border-zinc-700 rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 md:p-8 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          role="region"
          aria-label="About me description"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            Hello! I'm a front-end developer and UI/UX designer based in Davao City, Philippines. I specialize in creating clean, responsive, and engaging user interfaces using tools like React and Tailwind CSS. I'm passionate about crafting designs that are not only visually appealing but also intuitive and user-friendly.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            Beyond coding, I'm a proud Portland Trail Blazers fan and a Mobile Legends gamer, thriving on both competition and creativity. I'm always learning, growing, and pushing boundaries—whether through design, development, or a clutch comeback in ranked matches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
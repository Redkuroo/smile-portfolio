'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 text-gray-800 dark:text-white relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center tracking-tight text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-white">
            Hello! I'm a front-end developer and UI/UX designer based in Davao City, Philippines. I specialize in creating clean, responsive, and engaging user interfaces using tools like React and Tailwind CSS. I'm passionate about crafting designs that are not only visually appealing but also intuitive and user-friendly.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-white">
            Beyond coding, I'm a proud Portland Trail Blazers fan and a Mobile Legends gamer, thriving on both competition and creativity. I'm always learning, growing, and pushing boundaries—whether through design, development, or a clutch comeback in ranked matches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
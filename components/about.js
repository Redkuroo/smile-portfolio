'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-16 text-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-center text-gray-600 max-w-3xl mx-auto z-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hello! I'm a passionate front-end developer who loves crafting clean, responsive, and interactive web experiences. Whether it's building dynamic UIs with React or styling with Tailwind CSS, I enjoy solving design and technical challenges. I'm always learning and exploring new technologies to grow as a developer.
        </motion.p>
      </div>
    </section>
  );
}

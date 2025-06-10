'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import { BurstText } from './Portfoliohighlights';
import ParticlesBg from './ParticlesBg';

const certificates = [
  {
    title: 'Research Presenter for the Parallel Theme 1 - Data Innovation',
    issuer: 'Center for Research and Publication',
    date: '2025',
    image: '/certificates/research 2025.jpg',
    description: 'Presented our capstone project titled Dresscan during the Joint Research Conference of Maritime Education, Criminal Justice Education and College of Engineering and Technology.',
    category: 'competition'
  },
  {
    title: 'Introduction to HTML',
    issuer: 'Simplilearn',
    date: '2025',
    image: '/certificates/html 2025.jpg',
    description: 'Deepening skills in HTML.',
    category: 'programming'
  },
  {
    title: 'UI! UXpect the unxpected | UI/UX For Starters Workshop',
    issuer: 'Google Developer Groups on Campus UIC',
    date: '2025',
    image: '/certificates/uiux.png  ',
    description: 'Workshop for fostering a productive UI/UX learning',
    category: 'uiux'
  },
  {
    title: 'Capstone Project Writing 1 Workshop',
    issuer: 'Holy Cross of Davao College - BSIT',
    date: '2024',
    image: '/certificates/CAPSTONE PROJECT WRITING 1 WORKSHOP_CERTIFICATES.pdf.jpg',
    description: 'Participation for the capstone project writing workshop.',
    category: 'programming'
  },
  {
    title: 'Capstone Project Writing 2 Workshop',
    issuer: 'Holy Cross of Davao College - BSIT',
    date: '2024',
    image: '/certificates/CAPSTONE PROJECT WRITING 2 WORKSHOP_CERTIFICATES.pdf.jpg',
    description: 'Participation for the capstone project writing workshop.',
    category: 'programming'
  },
  {
    title: 'JavaScript Tutorial: Learn JavaScript in 1 Hour',
    issuer: 'Learnoverse',
    date: '2024',
    image: '/certificates/javascript 2024.jpg',
    description: 'An Online Course for JavaScript.',
    category: 'programming'
  },
  {
    title: 'Blockchain Campus Conference 2024',
    issuer: 'The Blocklabs, Inc.',
    date: '2024',
    image: '/certificates/Js Mella_BCC Mindanao 2024 Cert.pdf.jpg',
    description: 'Attended the Blockchain Conference at Mapua Malayan Colleges Mindanao.',
    category: 'gathering'
  },
  {
    title: 'Mindanao Conference of Information Technology (MCITS) 2024',
    issuer: 'PSITE XI, CDITE XI',
    date: '2024',
    image: '/certificates/mcits 2024.jpg',
    description: 'Participated the MCITS 2024.',
    category: 'gathering'
  },
  {
    title: '1st Runner Up in the Networking Competition',
    issuer: 'Holy Cross of Davao College - CET',
    date: '2024',
    image: '/certificates/networking 2024.jpg',
    description: 'CET TechnoFair 2024 Networking Competition 1st Runner Up.',
    category: 'competition'
  },
  {
    title: 'IT Olympiad 2024 - ACM Programming Competition',
    issuer: 'PSITE XI, CDITE XI',
    date: '2024',
    image: '/certificates/programmin 2024.jpg',
    description: 'Competitor for the Holy Cross of Davao College for the Programming Contest of PSITS.',
    category: 'competition'
  },
  {
    title: '10th TOPCIT Level 2 Passer',
    issuer: 'TOPCIT',
    date: '2024',
    image: '/certificates/topcit 2024 (2).jpg',
    description: 'HCDC Test Taker for the 10th TOPCIT Philippines (Level 2 Passer).',
    category: 'competition'
  },
  {
    title: '11th TOPCIT Level 2 Passer',
    issuer: 'TOPCIT',
    date: '2024',
    image: '/certificates/topcit 2024.jpg',
    description: 'HCDC Test Taker for the 11th TOPCIT Philippines (Level 2 Passer).',
    category: 'competition'
  },
  {
    title: 'Crack the Code: An Introduction to IOS Development',
    issuer: 'fix my mac.',
    date: '2023',
    image: '/certificates/crack the code 2023.jpg',
    description: 'A workshop for Swift programming language.',
    category: 'programming'
  },
  {
    title: 'Data Visualization',
    issuer: 'Smart Wireless Engineering Education Program',
    date: '2023',
    image: '/certificates/John Smile Mella Certificate.pdf.jpg',
    description: 'A webinar for Data Visualization Techniques.',
    category: 'programming'
  },
  {
    title: 'MCITS 2023',
    issuer: 'PSITE XI, CDITE XI',
    date: '2023',
    image: '/certificates/mcits 2023.jpg',
    description: 'Mindanao Conference for IT Students.',
    category: 'gathering'
  }
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sortedCertificates = [...certificates].sort((a, b) => b.date - a.date);
  
  const filteredCertificates = selectedCategory === 'all' 
    ? sortedCertificates 
    : sortedCertificates.filter(cert => cert.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'competition', label: 'Competitions' },
    { id: 'programming', label: 'Programming Related Workshops' },
    { id: 'gathering', label: 'IT Related Gatherings' },
    { id: 'uiux', label: 'UI/UX' }
  ];

  return (
    <section 
      className="py-8 sm:py-12 md:py-16 text-gray-800 dark:text-white relative"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ParticlesBg />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.h2
          id="about-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center tracking-tight text-black dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <BurstText text="About Me" />
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-center bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 md:p-8 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          role="region"
          aria-label="About me description"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 dark:text-white">
            Hello! I'm a front-end developer and UI/UX designer based in Davao City, Philippines. I specialize in creating clean, responsive, and engaging user interfaces using tools like React and Tailwind CSS. I'm passionate about crafting designs that are not only visually appealing but also intuitive and user-friendly.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 dark:text-white">
            Beyond coding, I'm a proud Portland Trail Blazers fan and a Mobile Legends gamer, thriving on both competition and creativity. I'm always learning, growing, and pushing boundaries—whether through design, development, or a clutch comeback in ranked matches.
          </p>
        </motion.div>

        {/* Certificates Section */}
        <div 
          className="mt-12 sm:mt-16"
          role="region"
          aria-labelledby="certificates-heading"
        >
          <h3 
            id="certificates-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white"
          >
            <span className="flex items-center justify-center gap-2">
              <FaCertificate className="text-red-600 dark:text-red-400" aria-hidden="true" />
              Certificates & Achievements
            </span>
          </h3>

          {/* Category Filter */}
          <div 
            className="sticky top-0 z-20 flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 bg-gray-100 dark:bg-zinc-900 py-2 px-2"
            role="tablist"
            aria-label="Certificate categories"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                role="tab"
                aria-selected={selectedCategory === category.id}
                aria-controls={`certificates-${category.id}`}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium transition-shadow duration-300 cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-red-700 dark:bg-red-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-zinc-700'
                } focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            role="tabpanel"
            id={`certificates-${selectedCategory}`}
            aria-labelledby={`tab-${selectedCategory}`}
          >
            {filteredCertificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-800 rounded-lg sm:rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 p-3 sm:p-4 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-zinc-900"
                onClick={() => setSelectedImage(cert.image)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(cert.image);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title} certificate`}
              >
                <img 
                  src={cert.image} 
                  alt={`Certificate for ${cert.title} issued by ${cert.issuer} in ${cert.date}`}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mb-2 sm:mb-3 border-2 border-red-200 dark:border-red-400 shadow" 
                />
                <div className="font-semibold text-sm sm:text-base text-center mb-1 line-clamp-2 text-gray-900 dark:text-white">{cert.title}</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 text-center mb-1 line-clamp-1">{cert.issuer}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-screen image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setSelectedImage(null);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate full view"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close certificate view"
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Certificate full view"
            className="max-w-[95%] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
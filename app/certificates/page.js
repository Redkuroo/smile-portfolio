'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import SocialSidebar from '../../components/SocialSideBar';
import { BurstText } from '../../components/Portfoliohighlights';

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

const categories = [
  { id: 'all', label: 'All Certificates' },
  { id: 'competition', label: 'Competitions' },
  { id: 'programming', label: 'Programming Related Workshops' },
  { id: 'gathering', label: 'IT Related Gatherings' },
  { id: 'uiux', label: 'UI/UX' }
];

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sortedCertificates = [...certificates].sort((a, b) => b.date - a.date);
  
  const filteredCertificates = selectedCategory === 'all' 
    ? sortedCertificates 
    : sortedCertificates.filter(cert => cert.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white">
      <header className="sticky top-0 z-50 bg-gray-100 dark:bg-zinc-900">
        <Navbar />
      </header>
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="hidden lg:block lg:fixed lg:top-20 lg:left-4 lg:w-16 z-50">
          <SocialSidebar />
        </aside>
        <main className="flex-1 relative p-4 lg:pl-32 overflow-y-auto">
          <ParticlesBg />
          <section className="w-full max-w-5xl mx-auto p-4 sm:p-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 text-center">
              <BurstText text="Certificates" />
            </h2>
            
            {/* Category Filter */}
            <div className="sticky top-0 z-20 flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 bg-gray-100 dark:bg-zinc-900 py-2 px-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium transition-shadow duration-300 cursor-pointer ${
                    selectedCategory === category.id
                      ? 'bg-red-500 text-white shadow-md scale-105'
                      : 'bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-700'
                  }`}
                  aria-pressed={selectedCategory === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredCertificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-zinc-800 rounded-lg sm:rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 p-3 sm:p-4 flex flex-col items-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-200"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg mb-2 sm:mb-3 border-2 border-red-200 dark:border-red-400 shadow" 
                  />
                  <div className="font-semibold text-sm sm:text-base text-center mb-1 line-clamp-2">{cert.title}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-300 text-center mb-1 line-clamp-1">{cert.issuer}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">{cert.date}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      {/* Full-screen image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Certificate" 
            className="max-w-[95%] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
} 
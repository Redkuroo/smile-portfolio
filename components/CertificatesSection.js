'use client';
import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';

const certificates = [
  { id: 1, title: 'Certificate 1', category: 'competitions', year: 2023, image: '/path/to/image1.jpg' },
  { id: 2, title: 'Certificate 2', category: 'programming', year: 2022, image: '/path/to/image2.jpg' },
  { id: 3, title: 'Certificate 3', category: 'UI/UX', year: 2021, image: '/path/to/image3.jpg' },
  // Add more certificates as needed
];

const categories = ['all', 'competitions', 'programming', 'UI/UX'];

const CertificatesSection = () => {
  const [filter, setFilter] = useState('all');

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <FaAward className="mr-2" /> Certificates
      </h2>
      <div className="mb-6">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map(cert => (
          <div key={cert.id} className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection; 
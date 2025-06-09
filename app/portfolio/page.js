'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import FloatingEffects from '../../components/floatingEffect';
import SocialSidebar from '../../components/SocialSideBar';
import PortfolioHighlights from '../../components/Portfoliohighlights';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const tabs = ['All', 'Frontend', 'Design'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="hidden lg:block lg:fixed lg:top-20 lg:left-4 z-50">
          <SocialSidebar />
        </div>

        <main className="flex-1 p-4 lg:pl-32 overflow-y-auto">
          <section className="w-full max-w-6xl mx-auto p-6">
            <div className="flex justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-full font-medium transition shadow ${
                    filter === tab
                      ? 'bg-red-500 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <PortfolioHighlights filter={filter} />
          </section>
        </main>
      </div>

      <footer className="mt-8 text-gray-500 text-sm text-center p-4">
        &copy; 2025 John Smile Mella. All rights reserved.
      </footer>
    </div>
  );
}

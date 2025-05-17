
'use client';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SocialSidebar from '../components/SocialSideBar';
import PortfolioHighlights from '../components/Portfoliohighlights';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar: hidden on mobile, visible on lg */}
        <div className="hidden lg:block lg:fixed lg:top-20 lg:left-4 z-50">
          <SocialSidebar />
        </div>

        <main className="flex-1 p-4 lg:pl-32 overflow-y-auto">

          <HeroSection />

          <section id="about" className="w-full p-6 mt-8">
            <PortfolioHighlights />
          </section>
        </main>
      </div>

      <footer className="mt-8 text-gray-500 text-sm text-center p-4">
        &copy; 2025 John Smile Mella. All rights reserved.
      </footer>
    </div>
  );
}

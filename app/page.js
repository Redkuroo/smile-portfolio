'use client';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SocialSidebar from '../components/SocialSideBar';
import Portfoliohighlights from '../components/Portfoliohighlights';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar at the top */}
      <Navbar />

      {/* Main content with sidebar and content area */}
      <div className="flex">
        {/* Sidebar aligned to left */}
        <div className="fixed top-20 left-4 z-50">
  <SocialSidebar />
</div>

        {/* Main Page Content */}
        <div className="flex-1 p-4">
          <HeroSection />

          {/* About Section */}
          <section id="about" className="max-w-9xl w-full bg-white p-6 mt-8 rounded-lg shadow-md">
          <Portfoliohighlights />

          </section>

          {/* Footer */}
          <footer className="mt-8 text-gray-500 text-sm">
            &copy; 2025 John Smile Mella. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

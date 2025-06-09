'use client';

import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import FloatingEffects from '../../components/floatingEffect';
import SocialSidebar from '../../components/SocialSideBar';
import About from '../../components/about';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-gray-100">
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Social Sidebar for larger screens */}
        <aside className="hidden lg:block lg:fixed lg:top-20 lg:left-4 lg:w-16 z-50">
          <SocialSidebar />
        </aside>

        {/* Main Section */}
        <main className="flex-1 p-4 lg:pl-32 overflow-y-auto">
          <section className="w-full max-w-5xl mx-auto p-6">
            <About />
          </section>
          <ParticlesBg />
          <FloatingEffects />
        </main>
      </div>

      {/* Sticky Footer */}
      <footer className="mt-auto text-gray-500 text-sm text-center p-4 bg-gray-100 border-t border-gray-200">
        <p>© {new Date().getFullYear()} John Smile Mella. All rights reserved.</p>
      </footer>
    </div>
  );
}
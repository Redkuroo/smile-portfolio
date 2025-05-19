'use client';
import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import FloatingEffects from '../../components/floatingEffect';
import SocialSidebar from '../../components/SocialSideBar';
import About from '../../components/about';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="hidden lg:block lg:fixed lg:top-20 lg:left-4 z-50">
          <SocialSidebar />
        </div>

        <main className="flex-1 p-4 lg:pl-32 overflow-y-auto">
            <section className="w-full p-6 mt-8">
            <About />
          </section>
                 <ParticlesBg />
                {/* Floating Icons */}
                <FloatingEffects />
        
        </main>
      </div>

      <footer className="mt-8 text-gray-500 text-sm text-center p-4">
        &copy; 2025 John Smile Mella. All rights reserved.
      </footer>
    </div>
  );
}

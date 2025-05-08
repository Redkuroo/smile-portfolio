'use client';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SocialSidebar from '../components/SocialSideBar';

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
          <section id="about" className="max-w-2xl w-full bg-white p-6 mt-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate developer with experience in building modern web applications using React and Next.js. I love crafting clean and user-friendly interfaces.
            </p>

            {/* Projects */}
            <section id="projects" className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Portfolio Website</li>
                <li>Task Manager App</li>
                <li>E-commerce Store</li>
              </ul>
            </section>
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

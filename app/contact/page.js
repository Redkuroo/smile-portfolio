import Navbar from '../../components/Navbar';
import ParticlesBg from '../../components/ParticlesBg';
import SocialSidebar from '../../components/SocialSideBar';
import ContactSection from '../../components/ContactSection';

export default function ContactPage() {
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
          <section className="w-full max-w-5xl mx-auto p-6 relative z-10">
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  );
} 
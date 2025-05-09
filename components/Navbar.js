"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg ' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform">
            My Logo
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "projects", "skills", "contact"].map((item) => (
              <NavLink key={item} href={`#${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} current={pathname.includes(item)} />
            ))}
            <a
              href="/cv.pdf"
              download
              className="bg-gradient-to-r from-red-600 via-red-500 to-red-800 text-white font-bold rounded-full py-2 px-6 shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-800 focus:outline-none hover:text-red-600 transition-colors"
            >
              <span className="sr-only">Toggle Menu</span>
              <div className={`space-y-1 transition-all ${mobileMenuOpen ? 'rotate-45' : ''}`}>
                <span className="block h-0.5 w-6 bg-current"></span>
                <span className={`block h-0.5 w-6 bg-current ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className="block h-0.5 w-6 bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="bg-white/90 backdrop-blur-md shadow-md rounded-b-xl mx-4 p-4 space-y-4">
          {["about", "projects", "skills", "contact"].map((item) => (
            <MobileNavLink
              key={item}
              href={`#${item}`}
              text={item.charAt(0).toUpperCase() + item.slice(1)}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <a
            href="/cv.pdf"
            download
            className="block text-center w-full bg-gradient-to-r from-red-600 to-gray-900 text-white font-bold py-2 rounded-full shadow"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, text, current }) {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-all duration-300 group text-gray-700 hover:text-red-600 ${
        current ? 'text-red-600' : ''
      }`}
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md font-medium"
    >
      {text}
    </Link>
  );
}

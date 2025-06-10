"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // Define nav items for your pages
  const navItems = [
    { label: 'Home', href: '/', icon: <FaHome size={22} /> },
    { label: 'About', href: '/about', icon: <FaUser size={22} /> },
    { label: 'Projects', href: '/portfolio', icon: <FaFolderOpen size={22} /> },
    { label: 'Contact', href: '/#contact', icon: <FaEnvelope size={22} /> },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="flex justify-between items-center w-full rounded-full bg-transparent shadow-xl border border-zinc-700/20 dark:border-zinc-200/10 backdrop-blur-md py-2 px-4">
        {navItems.map(({ label, href, icon }) => {
          const isActive =
            (href === '/' && pathname === '/') ||
            (href !== '/' && pathname.startsWith(href.replace('/#', '/')));
          return (
            <Link key={label} href={href} className="focus:outline-none flex-1 flex justify-center">
              <button
                className={`flex flex-col items-center justify-center transition-all duration-200 rounded-full p-2 ${isActive ? 'text-red-500 bg-zinc-100 dark:bg-zinc-800 shadow' : 'text-zinc-500 dark:text-zinc-300 hover:text-red-500'}`}
                aria-label={label}
              >
                {icon}
                {/* Optionally show label for active only */}
                {/* {isActive && <span className="text-xs font-semibold mt-1">{label}</span>} */}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

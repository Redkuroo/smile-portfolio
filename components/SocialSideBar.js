'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialSideBar() {
  const iconSize = 20;
  const links = [
    { href: 'https://facebook.com', label: 'Facebook', icon: <FaFacebookF size={iconSize} /> },
    { href: 'https://instagram.com', label: 'Instagram', icon: <FaInstagram size={iconSize} /> },
    { href: 'https://tiktok.com', label: 'TikTok', icon: <FaTiktok size={iconSize} /> },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: <FaLinkedinIn size={iconSize} /> },
    { href: 'https://github.com', label: 'GitHub', icon: <FaGithub size={iconSize} /> },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex"
    >
      <div className="flex flex-col items-center space-y-6 text-gray-400">
        {links.map(({ href, label, icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="hover:text-red-600 transition-transform duration-300 transform hover:scale-125"
          >
            {icon}
          </a>
        ))}
       
      </div>
    </motion.div>
  );
}

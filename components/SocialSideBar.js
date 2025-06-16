'use client';
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialSideBar() {
  const iconSize = 20;
  const links = [
    { href: 'https://www.facebook.com/js.mella.9', label: 'Facebook', icon: <FaFacebookF size={iconSize} /> },
    { href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fj_smileeeee%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExS0M5WVhVZXhiNGM1QWVDSgEe9hYk-IH29xuScdT-1Zv1ZKvzJkvqrfEmFsuFJrcDWtIYGfCBbiqdvevUUDA_aem_6KOg0EWMdUe7WbG1HoWBrQ&h=AT2bSLBh3G7m3rXpYMAI0WU62iaq9g2957JRcuyoxY5RqXFuwOmjwBhBROMWcZuM-JXcsaEGmNwRLNPAk6Mo3d4SmxhW0hdh3yP9DXUnCcOpMkU8M9k2ACD_mYLBVXYZxQpGCkJNkw9vCsVsH34t', label: 'Instagram', icon: <FaInstagram size={iconSize} /> },
    { href: 'https://www.behance.net/smilemella', label: 'Behance', icon: <FaBehance size={iconSize} /> },
    { href: 'https://www.linkedin.com/in/john-smile-mella-064a12347/', label: 'LinkedIn', icon: <FaLinkedinIn size={iconSize} /> },
    { href: 'https://github.com/Redkuroo', label: 'GitHub', icon: <FaGithub size={iconSize} /> },
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
            className="hover:text-red-600 transition-transform duration-300 transform hover:scale-120"
          >
            {icon}
          </a>
        ))}
       
      </div>
    </motion.div>
  );
}

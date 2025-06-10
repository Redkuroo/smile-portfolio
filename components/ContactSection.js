'use client';
import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BurstText } from './Portfoliohighlights';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      setError('Network error.');
      setStatus('error');
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3">
          <span className="text-gray-800 dark:text-white">Let's</span>
          <span className="ml-2 text-gray-800 dark:text-white">
            <BurstText text="Connect" />
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-300 max-w-2xl mx-auto px-2">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>
      </div>
      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-xl">
        <button
          onClick={() => setModalOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 dark:bg-red-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
        >
          <FaPaperPlane className="text-sm sm:text-base" /> Send Message <span className="ml-2">→</span>
        </button>
        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Google+Meet+with+John Smile&details=Let's+connect+via+Google+Meet!&add=02jsmella@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-red-600 dark:border-red-500 text-red-700 dark:text-red-400 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow hover:bg-red-50 dark:hover:bg-red-900 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
        >
          <FaPhoneAlt className="text-sm sm:text-base" /> Schedule Google Meet
        </a>
      </div>
      {/* Contact Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl text-center mt-6 sm:mt-8 px-2">
        <div className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
          <FaEnvelope className="text-xl sm:text-2xl mb-2 text-red-500" />
          <span className="font-medium text-sm sm:text-base break-words">02jsmella@gmail.com</span>
        </div>
        <div className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
          <FaPhoneAlt className="text-xl sm:text-2xl mb-2 text-red-500" />
          <span className="font-medium text-sm sm:text-base">+639387006898</span>
        </div>
        <div className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
          <FaMapMarkerAlt className="text-xl sm:text-2xl mb-2 text-red-500" />
          <span className="font-medium text-sm sm:text-base">Davao City, Philippines</span>
        </div>
      </div>
      {/* Modal for Contact Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-zinc-200 dark:border-zinc-800">
            <button
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xl sm:text-2xl text-zinc-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 active:scale-95 transition-all duration-300 ease-in-out"
              onClick={() => { setModalOpen(false); setStatus('idle'); setError(''); }}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <span className="text-4xl sm:text-5xl text-red-500 mb-2"><FaPaperPlane /></span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-zinc-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 text-center">I'll get back to you soon.</p>
            </div>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 text-sm sm:text-base" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400 text-sm sm:text-base" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                  placeholder="Your Email"
                />
              </div>
              <div className="relative">
                <FaCommentDots className="absolute left-3 top-3 sm:top-4 text-red-400 text-sm sm:text-base" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-400 transition resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                ) : (
                  <FaPaperPlane className="text-sm sm:text-base" />
                )}
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-sm sm:text-base text-green-600 dark:text-green-400 text-center">Message sent! I'll get back to you soon.</p>}
              {status === 'error' && <p className="text-sm sm:text-base text-red-600 dark:text-red-400 text-center">{error || 'Something went wrong.'}</p>}
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 2px #000;
          text-stroke: 2px #000;
        }
        @media (prefers-color-scheme: dark) {
          .outline-text {
            -webkit-text-stroke: 2px #fff;
            text-stroke: 2px #fff;
          }
        }
      `}</style>
    </section>
  );
} 
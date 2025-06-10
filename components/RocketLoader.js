import React, { useEffect, useState } from 'react';
import ParticlesBg from './ParticlesBg';

export default function RocketLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBg />
      {/* Rocket SVG Animation */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 animate-rocket-fly-horizontal">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(90deg)' }}>
          {/* Rocket body */}
          <rect x="28" y="10" width="8" height="28" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
          {/* Rocket window */}
          <circle cx="32" cy="20" r="3" fill="#60a5fa" stroke="#2563eb" strokeWidth="1.5" />
          {/* Rocket nose */}
          <polygon points="32,2 36,10 28,10" fill="#fbbf24" />
          {/* Rocket fins */}
          <polygon points="28,38 24,48 32,44" fill="#f87171" />
          <polygon points="36,38 40,48 32,44" fill="#f87171" />
          {/* Rocket flame */}
          <polygon className="animate-rocket-flame" points="32,44 30,54 34,54" fill="#f59e42" />
        </svg>
      </div>
      {/* Loading text */}
      <div className="absolute bottom-16 w-full flex justify-center">
        <span className="text-gray-800 text-lg font-semibold tracking-widest animate-pulse drop-shadow-lg">Loading...</span>
      </div>
      {/* Rocket fly keyframes */}
      <style jsx>{`
        @keyframes rocket-fly-horizontal {
          0% { transform: translateX(0) scale(0.8); }
          60% { transform: translateX(60vw) scale(1.1); }
          100% { transform: translateX(100vw) scale(0.8); }
        }
        .animate-rocket-fly-horizontal {
          animation: rocket-fly-horizontal 2.2s cubic-bezier(0.4,0,0.2,1) infinite alternate;
        }
        @keyframes rocket-flame {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(1.3); }
        }
        .animate-rocket-flame {
          animation: rocket-flame 0.5s infinite;
        }
      `}</style>
    </div>
  );
} 
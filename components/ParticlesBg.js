'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log('Particles engine:', engine);
    await loadSlim(engine);
  }, []);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const bgColor = theme === 'dark' ? '#2A2E36' : '#f3f4f6';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none bg"
      style={{ background: bgColor }}
      options={{
        background: {
          color: {
            value: bgColor,
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',

            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: '#F87171',
          },
          links: {
            color: '#F87171',
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: 'destroy',
            straight: false,
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 900,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

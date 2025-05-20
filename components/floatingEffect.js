  'use client';
  import { useEffect, useMemo, useRef, useState } from 'react';
  import { motion } from 'framer-motion';
  import ParticlesBg from './ParticlesBg';
  import {
    SiVuedotjs,
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiFigma,
  } from 'react-icons/si';

  const floatingVariants = {
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    still: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  export default function FloatingEffects() {
    const iconComponents = useMemo(
      () => [
          { Icon: SiVuedotjs, color: '#41b883', label: 'Vue.js' },
      { Icon: SiTypescript, color: '#3178c6', label: 'TypeScript' },
      { Icon: SiJavascript, color: '#f7df1e', label: 'JavaScript' },
      { Icon: SiReact, color: '#61dafb', label: 'React' },
      { Icon: SiNextdotjs, color: '#000000', label: 'Next.js' },
      { Icon: SiFigma, color: '#f24e1e', label: 'Figma' },
      ],
      []
    );

    const [rearranged, setRearranged] = useState(false);
    const [iconPositions, setIconPositions] = useState([]);
    const skillsRef = useRef(null);

    useEffect(() => {
      setIconPositions(
        iconComponents.map(() => ({
          top: Math.random() * 80 + 10,
          left: Math.random() * 80 + 10,
        }))
      );
    }, [iconComponents]);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRearranged(true);
        } else {
          setRearranged(false);
        }
      },
      {
        threshold: 1,
      }
    );

    const ref = skillsRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);


  const baseIconStyle =
  'bg-white rounded-full w-12 h-12 p-2 shadow-md flex items-center justify-center transition duration-300';


    return (
      <>
        <ParticlesBg />

        {/* Floating Icons */}
        <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
          <div className="w-full h-full relative">
            {iconComponents.map(({ Icon }, idx) => (
              <motion.div
                key={idx}
                layoutId={`icon-${idx}`}
                className="absolute"
                style={{
                  top: `${iconPositions[idx]?.top || 0}%`,
                  left: `${iconPositions[idx]?.left || 0}%`,
                }}
                variants={floatingVariants}
                initial={{ opacity: 1 }}
                animate={
                  rearranged
                    ? { ...floatingVariants.still, opacity: 1 }
                    : { ...floatingVariants.floating, opacity: 1 }
                }
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  delay: idx * 0.05,
                }}
              >
                <motion.div
                  className="bg-white rounded-full w-14 h-14 p-2 shadow-md flex items-center justify-center text-gray-400"
                  initial={{ scale: 1 }}
                  animate={{ scale: rearranged ? 0.7 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={28} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Target Grid with Cards */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <div
            ref={skillsRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12"
          >
            {iconComponents.map(({ Icon, color, label }, idx) => (
            <motion.div
  key={idx}
  className="w-24 h-28 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-3 bg-white shadow-sm"
  layout
  transition={{ layout: { duration: 0.8, ease: 'easeInOut' } }}
>

                {rearranged && (
                    <>
                  <motion.div
                    layoutId={`icon-${idx}`}
                    className={baseIconStyle}
                    style={{ color }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>
                       <motion.span
  className="mt-2 text-sm text-gray-700 text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  {label}
</motion.span>

          </>
                  
                )}
              </motion.div>
            ))}
          </div>

          {rearranged && (
            <motion.div
              className="mt-8 text-center max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Skills
              </h2>
              <p className="text-gray-600">
               Successfully shipped solutions using the following technologies.
              </p>
            </motion.div>
          )}
        </div>

         <div className="rounded-xl shadow-inner px-2 py-4 sm:px-6 mb-6">

<h2>dsdsdsdsds dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds
  dsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds
  dsdsdsdsdsdsdsdsdsdsdsdsdsdsds
  dsdsdsdsdsdsdsdsdsdsdsdsdsdsds
  dsdsdsdsdsdsdsdsdsdsdsdsdsdsds
</h2>

         </div>
      </>
    );
  }

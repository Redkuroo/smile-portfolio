'use client';
import { Canvas } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Sun({ onClick, eyeOffset = [0, 0] }) {
  return (
    <group onClick={onClick} scale={2.5}>
      {/* Sun core */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial emissive="#fff700" color="#fff700" emissiveIntensity={2} />
      </mesh>
      {/* Sun animated corona */}
      <mesh>
        <sphereGeometry args={[1.18, 64, 64]} />
        <meshBasicMaterial color="#fff700" transparent opacity={0.18} />
      </mesh>
      {/* Sun rays */}
      {[...Array(16)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 8]} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.08, 0.7, 12]} />
          <meshStandardMaterial color="#fff700" emissive="#fff700" emissiveIntensity={2} transparent opacity={0.7} />
        </mesh>
      ))}
      {/* Sun smiley face */}
      {/* Eyes */}
      <mesh position={[-0.35 + eyeOffset[0], 0.35 + eyeOffset[1], 0.98]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.35 + eyeOffset[0], 0.35 + eyeOffset[1], 0.98]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Mouth (smile) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0.98]}>
        <torusGeometry args={[0.28, 0.035, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}

function Moon({ onClick, eyeOffset = [0, 0] }) {
  // Use a subtle bump map for craters
  const bumpMap = new THREE.TextureLoader().load('https://threejs.org/examples/textures/moonbump1k.jpg');
  return (
    <group onClick={onClick} scale={2.5}>
      {/* Moon core with bump map */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#e0e0e0" bumpMap={bumpMap} bumpScale={0.08} />
      </mesh>
      {/* Moon glow */}
      <mesh>
        <sphereGeometry args={[1.08, 64, 64]} />
        <meshBasicMaterial color="#fff" transparent opacity={0.08} />
      </mesh>
      {/* Moon smiley face */}
      {/* Eyes */}
      <mesh position={[-0.35 + eyeOffset[0], 0.35 + eyeOffset[1], 0.98]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0.35 + eyeOffset[0], 0.35 + eyeOffset[1], 0.98]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Mouth (smile) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.15, 0.98]}>
        <torusGeometry args={[0.28, 0.035, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
}

export default function SunMoonToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [eyeOffset, setEyeOffset] = useState([0, 0]);
  const canvasRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);

  // Eyes follow mouse anywhere on the screen
  useEffect(() => {
    function handleMouseMove(e) {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      // Get mouse position relative to the center of the canvas
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2); // -1 to 1
      const dy = (e.clientY - cy) / (rect.height / 2); // -1 to 1
      // Clamp and scale
      const maxOffset = 0.12;
      setEyeOffset([
        Math.max(-1, Math.min(1, dx)) * maxOffset,
        Math.max(-1, Math.min(1, -dy)) * maxOffset,
      ]);
    }
    function handleMouseLeave() {
      setEyeOffset([0, 0]);
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full cursor-pointer" style={{ width: '100%', height: '100%' }}>
      <Canvas ref={canvasRef} camera={{ position: [0, 0, 6], fov: 50 }} shadows>
        <SoftShadows />
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {isDark ? (
          <Moon onClick={() => { console.log('Switching to light'); setTheme('light'); }} eyeOffset={eyeOffset} />
        ) : (
          <Sun onClick={() => { console.log('Switching to dark'); setTheme('dark'); }} eyeOffset={eyeOffset} />
        )}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 
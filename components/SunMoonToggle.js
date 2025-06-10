'use client';
import { Canvas } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import { OrbitControls, SoftShadows } from '@react-three/drei';
import { useState, useEffect } from 'react';
import * as THREE from 'three';

function Sun({ onClick }) {
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
    </group>
  );
}

function Moon({ onClick }) {
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
    </group>
  );
}

export default function SunMoonToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="w-full h-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows>
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
          <Moon onClick={() => { console.log('Switching to light'); setTheme('light'); }} />
        ) : (
          <Sun onClick={() => { console.log('Switching to dark'); setTheme('dark'); }} />
        )}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 
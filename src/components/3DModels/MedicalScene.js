import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

export function DNAHelix({ position = [0, 0, 0] }) {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.5;
  });

  return (
    <group ref={group} position={position}>
      {[...Array(10)].map((_, i) => (
        <group key={i} position={[0, i * 0.5 - 2.5, 0]} rotation={[0, (i * Math.PI) / 5, 0]}>
          <Sphere scale={0.1} position={[0.6, 0, 0]}>
            <meshStandardMaterial color="#4F46E5" />
          </Sphere>
          <Sphere scale={0.1} position={[-0.6, 0, 0]}>
            <meshStandardMaterial color="#7C3AED" />
          </Sphere>
          <Box args={[1.4, 0.05, 0.05]}>
            <meshStandardMaterial color="#818CF8" />
          </Box>
        </group>
      ))}
    </group>
  );
}

export function FloatingMolecules({ count = 25, scale = 1.5 }) {
  const group = useRef();
  
  // Optimize by pre-calculating positions
  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        Math.sin(i * 2.1) * 5 * scale, // Increased spread
        Math.cos(i * 1.5) * 5 * scale,
        Math.sin(i * 0.5) * 3 * scale,
      ],
      speed: Math.random() * 0.015 + 0.005, // Adjusted speed
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count, scale]);

  const spheres = useRef(positions.map(() => React.createRef()));

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    spheres.current.forEach((sphere, i) => {
      const { position, speed, offset } = positions[i];
      if (sphere.current) {
        sphere.current.position.x = position[0] + Math.sin(time * speed + offset) * 0.5;
        sphere.current.position.y = position[1] + Math.cos(time * speed + offset) * 0.5;
        sphere.current.position.z = position[2] + Math.sin(time * speed + offset) * 0.3;
      }
    });

    if (group.current) {
      group.current.rotation.y = time * 0.05;
    }
  });

  // Create shared geometries and materials for better performance
  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(0.3 * scale, 24, 24), []); // Bigger and smoother spheres
  const sphereMaterial = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: '#818CF8',
      roughness: 0.1,
      metalness: 0.9,
      emissive: '#4F46E5',
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.95,
    }), []);

  // Add glow effect
  const glowMaterial = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color: '#4F46E5',
      emissive: '#4F46E5',
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.4,
    }), []);

  return (
    <group ref={group}>
      {positions.map((_, i) => (
        <group key={i}>
          <mesh
            ref={spheres.current[i]}
            geometry={sphereGeometry}
            material={sphereMaterial}
            position={positions[i].position}
          />
          {/* Add glow sphere */}
          <mesh
            geometry={sphereGeometry}
            material={glowMaterial}
            position={positions[i].position}
            scale={[2, 2, 2]} // Increased glow size
          />
        </group>
      ))}
    </group>
  );
}

export function AIPulse() {
  const ring = useRef();

  useFrame(({ clock }) => {
    ring.current.scale.x = ring.current.scale.y = 
      1 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
  });

  return (
    <Torus ref={ring} args={[1, 0.02, 16, 100]}>
      <meshStandardMaterial color="#4F46E5" emissive="#4F46E5" emissiveIntensity={0.5} />
    </Torus>
  );
}

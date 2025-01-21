import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, AdaptiveDpr, Stars } from '@react-three/drei';
import { FloatingMolecules } from './3DModels/MedicalScene';

export default function Scene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none w-full h-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 60 }} // Increased camera distance and FOV
        style={{ 
          background: 'linear-gradient(to bottom right, #312E81, #4C1D95)',
          opacity: 0.95,
          width: '100vw',
          height: '100vh'
        }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#fff" />
        <spotLight
          position={[-10, 10, -10]}
          angle={0.4}
          penumbra={1}
          intensity={1.5}
          color="#4F46E5"
        />
        <Suspense fallback={null}>
          <FloatingMolecules count={25} scale={1.5} /> {/* Increased count and scale */}
          <Stars 
            radius={150} 
            depth={60} 
            count={7000} 
            factor={5} 
            saturation={0.5} 
          />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}


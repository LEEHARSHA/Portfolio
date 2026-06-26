import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#0f172a"
          emissive="#1e3a5f"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.4}
          wireframe
        />
      </Sphere>
      <Sphere args={[1.52, 32, 32]}>
        <meshStandardMaterial
          color="#2563EB"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
      {[...Array(12)].map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 12);
        const theta = Math.sqrt(12 * Math.PI) * phi;
        const x = 1.55 * Math.cos(theta) * Math.sin(phi);
        const y = 1.55 * Math.sin(theta) * Math.sin(phi);
        const z = 1.55 * Math.cos(phi);
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={1} />
          </mesh>
        );
      })}
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#2563EB" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#7C3AED" />
      <Globe />
    </>
  );
}

export function ContactGlobe() {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

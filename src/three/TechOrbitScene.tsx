import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { technologies } from "../data/technologies";

const techColors = technologies.map((t) => t.color);

function OrbitalRing({ radius, speed, index }: { radius: number; speed: number; index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const count = 3;
  const startAngle = (index / 3) * Math.PI * 2;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = startAngle + (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const color = techColors[(index * count + i) % techColors.length];

        return (
          <Float key={i} speed={2} floatIntensity={0.3}>
            <mesh position={[x, 0, z]}>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.4}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            <Text
              position={[x, -0.6, z]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {technologies[(index * count + i) % technologies.length]?.name ?? ""}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 5]} intensity={1} color="#2563EB" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#7C3AED" />
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#2563EB"
          emissive="#1d4ed8"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <OrbitalRing radius={2.5} speed={0.3} index={0} />
      <OrbitalRing radius={3.5} speed={-0.2} index={1} />
      <OrbitalRing radius={4.5} speed={0.15} index={2} />
    </>
  );
}

export function TechOrbitScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 3, 8], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <TechScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

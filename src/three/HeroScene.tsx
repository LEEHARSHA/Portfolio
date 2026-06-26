import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#2563EB"
          emissive="#1e40af"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} position={[3, -1, -2]} scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#5b21b6"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[-3.5, 1.5, -1]} scale={0.6}>
        <torusGeometry args={[1, 0.3, 16, 48]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#0891b2"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingCubes() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 8 }, () => ({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6 - 2,
        ] as [number, number, number],
        scale: 0.08 + Math.random() * 0.15,
        speed: 0.5 + Math.random() * 1.5,
      })),
    []
  );

  return (
    <>
      {cubes.map((cube, index) => (
        <FloatingCube key={index} {...cube} />
      ))}
    </>
  );
}

function FloatingCube({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial
        color="#2563EB"
        emissive="#1d4ed8"
        emissiveIntensity={0.3}
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#06B6D4" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      const x = (state.pointer.x * state.viewport.width) / 2;
      const y = (state.pointer.y * state.viewport.height) / 2;
      lightRef.current.position.set(x, y, 3);
    }
  });

  return <pointLight ref={lightRef} intensity={2} color="#2563EB" distance={15} />;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <MouseLight />
      <FloatingCrystal />
      <GlowingSphere />
      <AnimatedTorus />
      <FloatingCubes />
      <Particles />
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

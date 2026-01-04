"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, ContactShadows } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { SphereGeometry, Group } from "three";
import { skills } from "./skills.data";
import { SkillNode } from "./SkillNode";

export function SkillsCanvas() {
  const sphereRadius = 2.31;
  const meshScale = 1.05;
  const geometry = useMemo(() => new SphereGeometry(sphereRadius, 32, 32), [sphereRadius]);
  const prefersReducedMotion = useReducedMotion();

  const ambientIntensity = 0.8;
  const directionalIntensity = 0.6;
  const spotIntensity = 0.45;
  const autoRotateSpeed = prefersReducedMotion ? 0 : 0.3;

  const nodes = useMemo(() => {
    const radius = sphereRadius * meshScale;
    const positions: [number, number, number][] = [];
    const n = skills.length;
    const offset = 2 / n;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      positions.push([x * radius, y * radius, z * radius]);
    }
    return skills.map((skill, idx) => ({ ...skill, position: positions[idx] }));
  }, [sphereRadius, meshScale]);

  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      <SkillsScene
        geometry={geometry}
        nodes={nodes}
        ambientIntensity={ambientIntensity}
        directionalIntensity={directionalIntensity}
        spotIntensity={spotIntensity}
        meshScale={meshScale}
        prefersReducedMotion={prefersReducedMotion}
      />
      <OrbitControls
        autoRotate={!prefersReducedMotion}
        autoRotateSpeed={autoRotateSpeed}
        enableZoom={false}
        enablePan={false}
        enableRotate
      />
    </Canvas>
  );
}

function SkillsScene({
  geometry,
  nodes,
  ambientIntensity,
  directionalIntensity,
  spotIntensity,
  meshScale,
  prefersReducedMotion
}: {
  geometry: THREE.BufferGeometry;
  nodes: { name: string; icon: string; position: [number, number, number] }[];
  ambientIntensity: number;
  directionalIntensity: number;
  spotIntensity: number;
  meshScale: number;
  prefersReducedMotion: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const { clock } = useThree();

  useFrame(() => {
    if (prefersReducedMotion) return;
    const g = groupRef.current;
    if (!g) return;
    const t = clock.getElapsedTime();
    g.rotation.y = t * 0.35;
    g.rotation.x = t * 0.12;
  });

  return (
    <>
      <ambientLight intensity={ambientIntensity} color="white" />
      <directionalLight
        position={[-6, 4, 6]}
        intensity={directionalIntensity}
        color="white"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[5, -3, -5]} intensity={0.35} color="white" />
      <spotLight
        position={[0, 7, 5]}
        angle={0.6}
        penumbra={0.6}
        intensity={spotIntensity}
        color="white"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <spotLight
        position={[0, -7, -5]}
        angle={0.6}
        penumbra={0.55}
        intensity={spotIntensity * 0.8}
        color="white"
      />

      <Suspense
        fallback={
          <Html center>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Loading skills...
            </div>
          </Html>
        }
      >
        <group ref={groupRef} rotation={[0.25, -0.1, 0]}>
          <mesh geometry={geometry} scale={meshScale} castShadow receiveShadow>
            <meshStandardMaterial color="#22d3ee" transparent opacity={0.1} roughness={0.65} metalness={0.05} />
          </mesh>
          <lineSegments geometry={geometry}>
            <lineBasicMaterial color="#22d3ee" transparent opacity={0.35} />
          </lineSegments>

          {nodes.map((node) => (
            <SkillNode key={node.name} name={node.name} icon={node.icon} position={node.position} />
          ))}
        </group>
        <ContactShadows position={[0, -4, 0]} opacity={0.25} scale={10} blur={2.5} far={8} color="#0f172a" />
      </Suspense>
    </>
  );
}


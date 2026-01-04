"use client";

import { useMemo, useRef, useState } from "react";
import { Html, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils, Vector3 as ThreeVector3 } from "three";

type SkillNodeProps = {
  position: [number, number, number];
  icon: string;
  name: string;
};

export function SkillNode({ position, icon, name }: SkillNodeProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null);

  const base = useMemo(() => new ThreeVector3(...position), [position]);
  const normal = useMemo(() => base.clone().normalize(), [base]);
  const hoverOffset = 0;
  const target = useMemo(() => base.clone().add(normal.clone().multiplyScalar(hoverOffset)), [base, normal, hoverOffset]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;
    const destination = hovered ? target : base;
    group.position.lerp(destination, 0.12);
    const currentScale = group.scale.x;
    const nextScale = MathUtils.lerp(currentScale, hovered ? 1.12 : 1, 0.12);
    group.scale.set(nextScale, nextScale, nextScale);
  });

  return (
    <group
      ref={groupRef}
      position={base.toArray() as [number, number, number]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <Billboard follow>
        <Html center transform={false}>
          <div className="group relative flex h-[4.2rem] w-[4.2rem] items-center justify-center sm:h-[4.75rem] sm:w-[4.75rem] md:h-[5.35rem] md:w-[5.35rem]">
            <img src={icon} alt={name} className="h-[2.4rem] w-[2.4rem] sm:h-[2.7rem] sm:w-[2.7rem] md:h-[3rem] md:w-[3rem]" />
            <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 opacity-0 shadow-lg backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
              {name}
            </div>
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

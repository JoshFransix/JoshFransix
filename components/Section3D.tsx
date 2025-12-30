"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh, Group } from "three";

function AnimatedMesh() {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const mouse = state.mouse;
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.x = mouse.x * viewport.width * 0.08;
      meshRef.current.position.y = mouse.y * viewport.height * 0.08;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <icosahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={hovered ? 0.6 : 0.4}
        emissive="#3b82f6"
        emissiveIntensity={hovered ? 0.5 : 0.3}
      />
    </mesh>
  );
}

function FloatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.position.x = 0.6 + Math.cos(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0.6, 0, 0]}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.4}
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export function Section3D() {
  return (
    <div className="absolute right-0 top-0 w-32 h-32 opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 2]} intensity={0.8} />
        <pointLight position={[-2, -2, -2]} intensity={0.4} color="#3b82f6" />
        <AnimatedMesh />
        <FloatingCube />
      </Canvas>
    </div>
  );
}

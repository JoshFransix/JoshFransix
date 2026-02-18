"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const sphere = useMemo(() => {
    const positions = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000; i++) {
      const radius = 5 + Math.random() * 3;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Mouse interaction
      const mouse = state.mouse;
      ref.current.rotation.x +=
        (mouse.y * 0.5 - ref.current.rotation.x) * delta;
      ref.current.rotation.y +=
        (mouse.x * 0.5 - ref.current.rotation.y) * delta;
    }
  });

  // Use darker color and higher opacity for light mode for better contrast
  const particleColor = isDark ? "#3b82f6" : "#1e40af";
  const particleOpacity = isDark ? 0.8 : 0.95;
  const particleSize = isDark ? 0.01 : 0.015;

  const material = useMemo(
    () => (
      <PointMaterial
        transparent
        color={particleColor}
        size={particleSize}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={particleOpacity}
      />
    ),
    [particleColor, particleOpacity, particleSize],
  );

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      {material}
    </Points>
  );
}

function GeometricShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += delta * 0.3;
      meshRef1.current.rotation.y += delta * 0.4;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= delta * 0.2;
      meshRef2.current.rotation.y -= delta * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const shapeColor = isDark ? "#3b82f6" : "#1e40af";
  const shapeOpacity = isDark ? 0.5 : 0.65;

  return (
    <group ref={groupRef} key={isDark ? "dark-shapes" : "light-shapes"}>
      <mesh ref={meshRef1} position={[3, 2, -1]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color={shapeColor}
          wireframe
          transparent
          opacity={shapeOpacity}
          emissive={shapeColor}
          emissiveIntensity={isDark ? 0.3 : 0.5}
        />
      </mesh>
      <mesh ref={meshRef2} position={[-3, -2, -1]}>
        <tetrahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color={shapeColor}
          wireframe
          transparent
          opacity={shapeOpacity}
          emissive={shapeColor}
          emissiveIntensity={isDark ? 0.3 : 0.5}
        />
      </mesh>
    </group>
  );
}

function InteractiveSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const mouse = state.mouse;
      meshRef.current.position.x = mouse.x * viewport.width * 0.25;
      meshRef.current.position.y = mouse.y * viewport.height * 0.25;
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const sphereColor = isDark ? "#3b82f6" : "#1e40af";
  const sphereOpacity = isDark ? 0.5 : 0.65;

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color={sphereColor}
        wireframe
        transparent
        opacity={sphereOpacity}
        emissive={sphereColor}
        emissiveIntensity={isDark ? 0.4 : 0.5}
      />
    </mesh>
  );
}

export function EnhancedThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-100">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        className="opacity-100"
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.6}
          color="#3b82f6"
        />
        <FloatingParticles />
        {/* <GeometricShapes /> */}
        {/* <InteractiveSphere /> */}
      </Canvas>
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Three.js related components
const ThreeCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const ThreeOrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

function NetworkMesh() {
  const meshRef = useRef(null);
  const [three, setThree] = useState(null);
  
  useEffect(() => {
    // Import Three.js only on client side
    import('three').then((THREE) => {
      setThree(THREE);
    });
  }, []);

  useEffect(() => {
    if (!meshRef.current || !three) return;

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.001;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [three]);

  if (!three) return null;

  const THREE = three;
  const radius = 2.5;
  const geometry = new THREE.IcosahedronGeometry(radius, 2);
  const vertices = geometry.attributes.position;
  
  const colors = [
    new THREE.Color(0x4a90e2).multiplyScalar(2),
    new THREE.Color(0xf5a623).multiplyScalar(2),
    new THREE.Color(0xff6b6b).multiplyScalar(2),
  ];

  return (
    <group ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[radius, 2]} />
        <meshBasicMaterial
          color={0xffffff}
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={vertices.count}
            array={vertices.array}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color={0x00ffff} size={0.05} sizeAttenuation />
      </points>

      {Array.from({ length: vertices.count / 3 }).map((_, i) => {
        if (Math.random() > 0.3) return null;

        const positions = new Float32Array([
          vertices.getX(i * 3), vertices.getY(i * 3), vertices.getZ(i * 3),
          vertices.getX(i * 3 + 1), vertices.getY(i * 3 + 1), vertices.getZ(i * 3 + 1),
          vertices.getX(i * 3 + 2), vertices.getY(i * 3 + 2), vertices.getZ(i * 3 + 2),
        ]);

        return (
          <mesh key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={3}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <meshBasicMaterial
              color={colors[Math.floor(Math.random() * colors.length)]}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function ThreeScene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ThreeCanvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <NetworkMesh />
      <ThreeOrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </ThreeCanvas>
  );
} 
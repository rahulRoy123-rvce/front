"use client";

import dynamic from 'next/dynamic';

// Create a loading component
const LoadingFallback = () => (
  <div className="fixed inset-0 -z-10 bg-black" />
);

// Create a client-only version of the entire Three.js scene
const ThreeScene = dynamic(
  () => import('./ThreeScene'),
  {
    ssr: false,
    loading: LoadingFallback,
  }
);

export default function NetworkSphere() {
  return (
    <div className="fixed inset-0 -z-10">
      <ThreeScene />
    </div>
  );
} 
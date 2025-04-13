"use client";

import React from "react";
import { motion } from "framer-motion";

interface PathPoint {
  start: [number, number];
  end: [number, number];
  delay: number;
  opacity: number;
  width: number;
}

export const BranchingPaths = () => {
  const generateTriangularPaths = (): PathPoint[] => {
    const paths: PathPoint[] = [];
    const centerX = 400;
    const levels = 40; // Increased density
    
    // Generate labels (simulating data points)
    const labels = Array.from({ length: levels }, (_, i) => `Data Point ${i + 1}`);
    
    // Left side paths (branching out)
    for (let i = 0; i < levels; i++) {
      const startY = i * 15 - (levels * 7);
      // Vary the spread based on position to create triangular shape
      const maxSpread = 400 * (1 - Math.abs(i - levels/2) / levels);
      const spread = Math.random() * maxSpread + 50;
      
      // Add multiple paths per level for density
      const pathsPerLevel = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < pathsPerLevel; j++) {
        paths.push({
          start: [centerX, startY],
          end: [centerX - spread * (0.7 + Math.random() * 0.3), 
                startY + (Math.random() * 30 - 15)],
          delay: i * 0.05 + j * 0.02,
          opacity: Math.random() * 0.4 + 0.1,
          width: Math.random() * 0.5 + 0.5
        });
      }
    }

    // Right side paths (converging)
    for (let i = 0; i < levels; i++) {
      const startY = i * 15 - (levels * 7);
      const maxSpread = 400 * (1 - Math.abs(i - levels/2) / levels);
      const spread = Math.random() * maxSpread + 50;
      
      const pathsPerLevel = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < pathsPerLevel; j++) {
        paths.push({
          start: [centerX + spread * (0.7 + Math.random() * 0.3),
                  startY + (Math.random() * 30 - 15)],
          end: [centerX, startY],
          delay: i * 0.05 + j * 0.02,
          opacity: Math.random() * 0.4 + 0.1,
          width: Math.random() * 0.5 + 0.5
        });
      }
    }

    // Vertical axis with connecting lines
    for (let i = 0; i < levels; i++) {
      const y = i * 15 - (levels * 7);
      paths.push({
        start: [centerX, y],
        end: [centerX, y + 15],
        delay: i * 0.02,
        opacity: 0.3,
        width: 0.5
      });
    }

    return paths;
  };

  const paths = generateTriangularPaths();

  return (
    <div className="w-full h-[800px] bg-gray-950 relative overflow-hidden">
      <motion.svg
        viewBox="0 0 800 800"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.line
            key={`grid-${i}`}
            x1="0"
            y1={400 + i * 40 - 400}
            x2="800"
            y2={400 + i * 40 - 400}
            stroke="#ffffff"
            strokeWidth="0.1"
            strokeOpacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* Paths */}
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={`M ${path.start[0]} ${path.start[1]} L ${path.end[0]} ${path.end[1]}`}
            stroke={path.start[0] === 400 ? "url(#verticalGradient)" : "url(#pathGradient)"}
            strokeWidth={path.width}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: path.opacity,
              transition: {
                pathLength: { 
                  duration: 2,
                  delay: path.delay,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 1,
                  delay: path.delay
                }
              }
            }}
          />
        ))}

        {/* Labels */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.text
            key={`label-${i}`}
            x={420}
            y={400 + i * 40 - 400}
            fill="#ffffff"
            fontSize="8"
            opacity="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: i * 0.1 }}
          >
            Data Point {i + 1}
          </motion.text>
        ))}
      </motion.svg>
    </div>
  );
}; 
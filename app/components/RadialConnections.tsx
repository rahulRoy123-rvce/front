"use client";

import React from "react";
import { motion } from "framer-motion";

const generatePoints = (count: number, radius: number) => {
  const points = [];
  const angleStep = (2 * Math.PI) / count;
  
  for (let i = 0; i < count; i++) {
    const angle = i * angleStep;
    points.push({
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      delay: i * 0.1
    });
  }
  
  return points;
};

export const RadialConnections = () => {
  const outerPoints = generatePoints(24, 200);
  const innerPoints = generatePoints(12, 100);
  
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <motion.svg
        viewBox="-250 -250 500 500"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >
        {/* Background circles */}
        <motion.circle
          cx="0"
          cy="0"
          r="200"
          className="stroke-white/10 fill-none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.circle
          cx="0"
          cy="0"
          r="100"
          className="stroke-white/10 fill-none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Connection lines */}
        {outerPoints.map((outer, i) => 
          innerPoints.map((inner, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={outer.x}
              y1={outer.y}
              x2={inner.x}
              y2={inner.y}
              className="stroke-primary/5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 1.5,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))
        )}
        
        {/* Points */}
        {[...outerPoints, ...innerPoints].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="2"
            className="fill-primary"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: point.delay,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}; 
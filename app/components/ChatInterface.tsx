"use client";

import React from "react";
import { motion } from "framer-motion";

const ChatMessage = ({ message, delay }: { message: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay, 
        duration: 0.8,
        ease: "easeOut"
      }}
      className="flex items-start gap-4 mb-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: delay + 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm"
      >
        AI
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{
          delay: delay + 0.2,
          duration: 1,
          ease: [0.23, 1, 0.32, 1], // Custom cubic bezier for smooth expansion
          opacity: { delay: delay + 0.3, duration: 0.5 }
        }}
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-[80%] overflow-hidden"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="text-white/90"
        >
          {message}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export const ChatInterface = () => {
  const messages = [
    "What's causing the issue we saw earlier?",
    "I'll analyze the data to identify root causes.",
    "What is the impact?",
    "The issue is due to a network misconfiguration.",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} delay={index * 1.2} />
        ))}
      </div>
    </div>
  );
}; 
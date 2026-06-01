"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-zinc-300 dark:bg-zinc-700 blur-[100px] md:blur-[120px]"
      />
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AmbientGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for a fluid trailing effect
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from the center of the screen
      const offsetX = e.clientX - window.innerWidth / 2;
      const offsetY = e.clientY - window.innerHeight / 2;

      mouseX.set(offsetX);
      mouseY.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x: smoothX, y: smoothY }}
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

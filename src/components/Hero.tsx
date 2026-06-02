"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { technicalArsenal } from "@/constants/skills";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <AnimatedSectionWrapper id="hero">
      <div className="relative pt-4 md:pt-6 pb-4">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium border rounded-full text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 shadow-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6 relative z-10"
        >
          Building systems that scale. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-600">
            Crafting interfaces that flow.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8 relative z-10"
        >
          I&apos;m Sahil. A Full Stack Developer combining rock-solid Java
          architecture with modern React and Next.js frontends to build digital
          products from the ground up.
        </motion.p>

        {/* Quick Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8 relative z-10"
        >
          <a
            href="https://github.com/Waahguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/waahguptaji"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:sahil.work742@gmail.com"
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap gap-3 mt-8 relative z-10"
        >
          {technicalArsenal.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </AnimatedSectionWrapper>
  );
}

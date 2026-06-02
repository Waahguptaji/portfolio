"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { experienceData } from "@/constants/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <AnimatedSectionWrapper id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold tracking-tight mb-8"
      >
        The Journey.
      </motion.h2>
      <div className="flex flex-col gap-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: (index + 1) * 0.1,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            variants={{
              hover: {
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              },
              tap: {
                scale: 0.98,
                transition: { duration: 0.1, ease: "easeOut" },
              },
            }}
            className="group relative p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-800/30 border border-zinc-200/80 dark:border-zinc-700/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-zinc-900/5 dark:bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                {exp.company}
                {exp.isActive && (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                )}
              </h3>
              <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shrink-0">
                <Calendar className="w-3 h-3 mr-1.5" />
                {exp.date}
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-md font-semibold text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {exp.role}
              </p>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSectionWrapper>
  );
}

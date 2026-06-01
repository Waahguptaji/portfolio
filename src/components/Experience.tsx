"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { experienceData } from "@/constants/experience";

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
      <div className="flex flex-col gap-2">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: (index + 1) * 0.1,
              ease: "easeOut",
            }}
            className="group relative p-5 md:p-6 rounded-3xl hover:bg-white dark:hover:bg-zinc-800/30 hover:shadow-xl border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-700/50 transition-all duration-300 -mx-5 md:-mx-6"
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <div className="w-32 shrink-0 pt-1">
                <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                  {exp.date}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                  {exp.company}
                  {exp.isActive && (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  )}
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-3">
                  {exp.role}
                </p>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSectionWrapper>
  );
}

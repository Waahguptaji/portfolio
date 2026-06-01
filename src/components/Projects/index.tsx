"use client";
import React from "react";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";

const MyWork = () => {
  return (
    <AnimatedSectionWrapper id="work">
      <div className="py-8">
        {/* Clean, Typography-Driven Header */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-sm text-zinc-500 dark:text-zinc-400 mt-1"
          >
            Highlights from my recent full-stack and frontend development
            projects.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.15,
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
              href={project.liveLink || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-8 rounded-3xl bg-white dark:bg-zinc-800/30 border border-zinc-200/80 dark:border-zinc-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
                index === 0 ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {project.title}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.2,
                    ease: "easeOut",
                  }}
                  className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4"
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  {project.tag}
                </span>

                {/* Subtle arrow that slides in on hover */}
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 0, x: -8 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      x: [0, 4, 0],
                      transition: {
                        x: {
                          repeat: Infinity,
                          duration: 0.6,
                          ease: "easeInOut",
                        },
                        opacity: { duration: 0.2 },
                      },
                    },
                  }}
                  className="text-zinc-400 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-300 font-bold"
                >
                  ↗
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};

export default MyWork;

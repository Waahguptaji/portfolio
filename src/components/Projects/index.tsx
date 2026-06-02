"use client";
import React from "react";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { ArrowUpRight } from "lucide-react";

const MyWork = () => {
  return (
    <AnimatedSectionWrapper id="work">
      <div>
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

                {/* Premium sleek arrow icon */}
                <span className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};

export default MyWork;

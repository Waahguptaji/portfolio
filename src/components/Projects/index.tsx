"use client";
import React from "react";
import { projects } from "@/constants/projects";

const MyWork = () => {
  return (
    <section id="projects" className="py-8">
      {/* Clean, Typography-Driven Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Selected Work
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Highlights from my recent full-stack and frontend development
          projects.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.liveLink || project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-8 rounded-3xl bg-white dark:bg-zinc-800/30 border border-zinc-200/80 dark:border-zinc-700/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] ${
              index === 0 ? "md:col-span-2" : "col-span-1"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {project.tag}
              </span>

              {/* Subtle arrow that slides in on hover */}
              <span className="text-zinc-400 group-hover:text-accent dark:group-hover:text-accent-dark transform translate-x-[-8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-bold">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default MyWork;

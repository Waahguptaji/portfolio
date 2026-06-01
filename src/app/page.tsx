"use client";
import React from "react";
import Link from "next/link";
import Projects from "@/components/Projects";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { technicalArsenal } from "@/constants/skills";
import ThemeToggle from "@/components/ThemeToggler";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-zinc-900 dark:text-zinc-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 flex items-center justify-between py-6 mb-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <img
              src="/assets/MyPhoto.jpg"
              alt="Sahil Gupta"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight logo-font text-xl">
            Sahil
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="#work"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Work
          </Link>
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <div className="flex flex-col gap-20">
        {/* HERO */}
        <AnimatedSectionWrapper id="hero">
          <div className="relative pt-10 pb-4">
            {/* The Subtle Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[400px] bg-zinc-300/50 dark:bg-zinc-700/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6 relative z-10">
              Building systems that scale. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-600">
                Crafting interfaces that flow.
              </span>
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8 relative z-10">
              I'm Sahil. A Full Stack Developer combining rock-solid Java
              architecture with modern React and Next.js frontends to build
              digital products from the ground up.
            </p>

            {/* Premium skill tags */}
            <div className="flex flex-wrap gap-3 mt-8 relative z-10">
              {technicalArsenal.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSectionWrapper>

        {/* BENTO BOX PROJECTS */}
        <AnimatedSectionWrapper id="work">
          <Projects />
        </AnimatedSectionWrapper>

        {/* NARRATIVE EXPERIENCE */}
        <AnimatedSectionWrapper id="experience">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            The Journey.
          </h2>
          <div className="flex flex-col gap-2">
            {/* TCS (With Active Pulse) */}
            <div className="group relative p-5 md:p-6 rounded-3xl hover:bg-white dark:hover:bg-zinc-800/30 hover:shadow-xl border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-700/50 transition-all duration-300 -mx-5 md:-mx-6">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <div className="w-32 shrink-0 pt-1">
                  <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                    Oct 2024 — Pres
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1 flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                    Tata Consultancy Services
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-3">
                    Full Stack Developer
                  </p>
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Writing production-grade Java and managing JDBC data layers
                    to support scalable backend services for enterprise
                    financial web applications in the BFSI domain.
                  </p>
                </div>
              </div>
            </div>

            {/* American Chase */}
            <div className="group relative p-5 md:p-6 rounded-3xl hover:bg-white dark:hover:bg-zinc-800/30 hover:shadow-xl border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-700/50 transition-all duration-300 -mx-5 md:-mx-6">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <div className="w-32 shrink-0 pt-1">
                  <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                    Feb — Jul 2024
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    American Chase
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-3">
                    Software Development Engineer
                  </p>
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Developed core frontend features using React, TypeScript,
                    and Redux Toolkit for a real-time warehouse management
                    dashboard, improving application stability by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSectionWrapper>

        {/* FOOTER */}
        <footer className="pt-12 pb-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Sahil Gupta</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Waahguptaji"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/waahguptaji"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sahil.work742@gmail.com"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggler";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 flex items-center justify-between px-6 py-3 mb-8 mt-4 bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-sm">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-700">
          <Image
            src="/assets/MyPhoto.jpg"
            alt="Sahil Gupta"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-lg tracking-tight logo-font text-xl">
          Sahil
        </span>
      </motion.div>
      <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Link
            href="#work"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Work
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <ThemeToggle />
        </motion.div>
      </nav>
    </header>
  );
}

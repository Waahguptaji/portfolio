"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        © {new Date().getFullYear()} Sahil Gupta
      </motion.p>
      <div className="flex gap-6">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          href="https://github.com/Waahguptaji"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          GitHub
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          href="https://www.linkedin.com/in/waahguptaji"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          LinkedIn
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          href="mailto:sahil.work742@gmail.com"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          Email
        </motion.a>
      </div>
    </footer>
  );
}

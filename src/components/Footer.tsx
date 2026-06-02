"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <AnimatedSectionWrapper id="contact">
      {/* Bottom Footer Links */}
      <footer className="pt-8 pb-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
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
            className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
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
            className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </motion.a>
        </div>
      </footer>
    </AnimatedSectionWrapper>
  );
}

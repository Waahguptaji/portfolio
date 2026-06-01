import React from "react";
import Projects from "@/components/Projects";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-12 md:pb-20 text-zinc-900 dark:text-zinc-100 font-sans">
      <Header />
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

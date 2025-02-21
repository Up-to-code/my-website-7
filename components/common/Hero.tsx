"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skills = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "MongoDB",
  "Firebase",
  "React Native",
  "Tailwind CSS",
  "Framer Motion",
  "Zustand",
  "Puppeteer",
  "Selenium",
  "CSS",
  "JavaScript",
  "SQL",
  "HTML",
  "Git",
  "UI/UX Design",
  "Motion Design",
  "WordPress",
];

export default function MinimalistHero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 text-gray-800 p-8 relative overflow-hidden container">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-grid-gray-200/50 opacity-30" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/me.jpg"
                alt="Ahmed"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-gray-800/10 rounded-2xl" />
            <div className="absolute -top-2 -left-2 w-full h-full border-4 border-gray-800/10 rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left space-y-8 md:w-1/2"
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm Ahmed
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl font-light text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-Stack Developer
            </motion.h2>
          </div>

          <div className="h-8 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={skills[currentSkill]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="text-3xl text-blue-600 font-medium"
              >
                {skills[currentSkill]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="pt-4"
          >
            <a
              href="http://wa.me/201142102700"
              className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 ease-out hover:bg-gray-700 hover:shadow-lg hover:scale-105 active:scale-95" 
              target="_blank"
            >
              Call me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

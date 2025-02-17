"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who’s This Guy? 🤔</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/me.jpg"
              alt="Ahmed Mansour"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </motion.div>

          <div className="md:w-2/3">
            <motion.h3
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hey there! I'm Ahmed Mansour, your friendly neighborhood web developer. 🕸️
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I build sleek, fast, and highly functional websites and applications. If it's got
              React, Next.js, or Node.js in it, you can bet I’m already caffeinated and coding! ☕
            </motion.p>

            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🔥 What I Do Best:
            </motion.h4>

            <motion.ul
              className="list-disc pl-5 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <li>Turning coffee into clean, maintainable code ☕</li>
              <li>Frontend magic with React, Next.js & Tailwind ✨</li>
              <li>Backend sorcery using Node.js, Express & Firebase 🛠️</li>
              <li>Creating databases that actually behave (MongoDB, SQL, Firestore) 🗃️</li>
              <li>Making UI/UX look awesome (Figma, wireframes, prototypes) 🎨</li>
              <li>Crafting mobile apps with React Native & Expo 📱</li>
            </motion.ul>

            <motion.h4
              className="text-lg font-semibold mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              🎯 Fun Facts About Me:
            </motion.h4>

            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              When I’m not writing code, I’m probably debugging my life decisions, exploring new 
              tech, snapping cool photos, or planning my next adventure. Oh, and I might be 
              binging some Netflix (because balance, right?).
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

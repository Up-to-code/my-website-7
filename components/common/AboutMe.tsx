"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
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
              alt="Your Name"
              className="w-48 h-48 rounded-full object-cover"
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
              Hi, I'm Ahmed Mansour, a passionate web developer.
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I specialize in building modern and dynamic websites and applications using
              technologies like React, Node.js, Next.js, Firebase, and more. With years of
              experience, I am dedicated to creating seamless user experiences and solving
              complex problems with efficient solutions.
            </motion.p>

            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Key Skills:
            </motion.h4>

            <motion.ul
              className="list-disc pl-5 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <li>Frontend Development (React, Next.js, Tailwind CSS)</li>
              <li>Backend Development (Node.js, Express, Firebase)</li>
              <li>Database Management (MongoDB, SQL, Firebase Firestore)</li>
              <li>UI/UX Design (Figma, Wireframing, Prototyping)</li>
              <li>Mobile Development (React Native, Expo)</li>
            </motion.ul>

            <motion.h4
              className="text-lg font-semibold mt-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hobbies & Interests:
            </motion.h4>

            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              When I'm not coding, I enjoy exploring new technologies, photography, and
              traveling. I believe that creativity and exploration are key components of both
              work and life.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

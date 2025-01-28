"use client";

import { motion } from "framer-motion";

export default function CallMe() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-6 leading-tight"
        >
          Have Questions? Let's Connect!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg mb-8 max-w-lg mx-auto"
        >
          Reach out via WhatsApp, check my GitHub, or book a call to discuss
          your needs.
        </motion.p>
        <div className="space-x-4">
          <motion.a
            href="https://wa.me/201234567890" // Replace with your WhatsApp link
            className="inline-block px-8 py-4 bg-teal-800 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-green-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>

          <motion.a
            href="https://calendly.com/your-link" // Replace with your booking link
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.a>
        </div>
      </div>
    </section>
  );
}

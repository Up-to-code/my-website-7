"use client";

import { motion } from "framer-motion";
import { navItems } from "./Navbar";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">Store Information</h4>
            <p>Phone: +201142102700</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
        
              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <FaTiktok />
                <span>My TikTok</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; 2025 Ahmed Mansour. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

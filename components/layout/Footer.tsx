"use client";

import { motion } from "framer-motion";
import { navItems } from "./Navbar";

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
            <p>Address: 123 Main Street, Cairo, Egypt</p>
            <p>Email: contact@yourstore.com</p>
            <p>Phone: +20 123 456 789</p>
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
              <a href="#" className="hover:text-blue-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>

          {/* VAT Details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">VAT Information</h4>
            <p>VAT Number: EG123456789</p>
            <p>Tax Certificate: Available upon request</p>
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
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors"
                  >
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
            &copy; 2025 YourStore. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

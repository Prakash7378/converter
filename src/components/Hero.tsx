"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        Free Online File Converter
      </motion.h1>

      <p className="mt-6 text-gray-300">
        Convert images instantly.
      </p>
    </section>
  );
}
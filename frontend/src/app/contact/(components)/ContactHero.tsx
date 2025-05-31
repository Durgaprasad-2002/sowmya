"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400  overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-[25px] md:text-[44px] font-bold bg-gradient-to-r from-blue-400 to-yellow-300 bg-clip-text text-transparent">
          Empower Your Career
        </h1>

        <p className="mt-4 max-w-xl text-[16px] md:text-[20px] font-normal">
          Learn from industry experts. Train. Grow. Get placed.
        </p>
      </motion.div>
    </section>
  );
}

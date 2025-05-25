"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[500px] bg-fixed  bg-cover bg-no-repeat bg-right-bottom rounded-br-md rounded-bl-md overflow-hidden"
      style={{ backgroundImage: "url('/assets/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h1 className="text-25px md:text-44 font-bold bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
          Empower Your Career
        </h1>

        <p className="mt-4 max-w-xl text-16 md:text-20 font-normal">
          Learn from industry experts. Train. Grow. Get placed.
        </p>
      </motion.div>
    </section>
  );
}

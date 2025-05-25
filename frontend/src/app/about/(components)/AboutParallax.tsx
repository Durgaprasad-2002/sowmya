"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Parallax() {
  const ref = useRef(null);
  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative h-[500px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/assets/contact-bg.jpg"
          alt="Parallax Background"
          fill
          className="object-cover object-right-bottom blur-[1px] "
          priority
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold"
        >
          Empower Your Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 max-w-xl text-lg"
        >
          Join expert-led training and build your career from the ground up.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Brain,
  Lightbulb,
  XCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import ExpandCards from "./(components)/ExpandCards";

function MissionVisionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="bg-blue-50 rounded-3xl p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are dedicated to bridging the gap between academic learning and
          professional success by offering industry-aligned, job-ready programs.
          Through practical training and personalized guidance, we help
          individuals build a future-proof career foundation.
        </p>
      </div>

      <div className="bg-yellow-50 rounded-3xl p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-yellow-800 mb-4">Our Vision</h3>
        <p className="text-gray-800 text-lg leading-relaxed">
          Our vision is to be a nationally recognized career consultancy that
          transforms talent into skilled professionals through consistent
          mentorship, practical innovation, and result-driven learning
          experiences.
        </p>
      </div>
    </section>
  );
}

const coreValues = [
  {
    title: "Integrity",
    description: "Honest and transparent guidance at every step.",
    imageSrc: "/assets/character-climbing-stairs.svg",
  },
  {
    title: "Career Focus",
    description: "We put your goals at the center of our approach.",
    imageSrc: "/assets/character-climbing-stairs.svg",
  },
  {
    title: "Expertise",
    description:
      "Training by mentors with over 10 years of industry experience.",
    imageSrc: "/assets/character-climbing-stairs.svg",
  },
  {
    title: "Innovation",
    description: "Always evolving with latest tech and tools.",
    imageSrc: "/assets/character-climbing-stairs.svg",
  },
];

const slideInVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function CoreValuesSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">
      <h2 className="text-4xl font-bold text-blue-950 text-center mb-12">
        Core Values
      </h2>

      {coreValues.map(({ title, description, imageSrc }, i) => (
        <motion.div
          key={title}
          initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInVariants}
          className={`flex flex-col md:flex-row items-center gap-10 rounded-xl p-6 md:p-10  bg-blue-50  max-w-5xl mx-auto ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 max-w-sm flex-shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              width={400}
              height={300}
              className="rounded-lg object-contain"
              priority={i === 0} // preload first image
            />
          </div>
          <div className="md:w-1/2 max-w-md space-y-3 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-blue-950">{title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20 md:py-16">
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h1 className="text-blue-950 text-[clamp(30px,5vw,48px)] font-extrabold leading-tight">
          Our Purpose – Your Success
        </h1>
        <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          At Sowmya Consultancy Services, our mission is simple: empower
          students and professionals to excel in their careers through expert
          training, mentorship, and hands-on learning.
        </p>
        <button
          className="px-6 py-3 rounded-full bg-yellow-400 text-blue-950 font-semibold shadow-md hover:bg-yellow-500 transition 
          focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-offset-2"
        >
          Get Started
        </button>
      </motion.div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:w-1/2 max-w-md mx-auto relative"
      >
        {/* Background subtle gradient shape */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -left-8 w-[300px] h-[350px] rounded-3xl bg-gradient-to-tr from-yellow-100 to-yellow-300 opacity-40 blur-3xl -z-10"
        />
        <Image
          src="/assets/character-climbing-stairs.svg"
          alt="Illustration of growth and success"
          width={400}
          height={350}
          className="rounded-lg relative"
          priority
        />
      </motion.div>
    </section>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Aim() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 space-y-28 py-16">
      <HeroSection />
      <div className="">
        <ExpandCards />
      </div>
      <MissionVisionSection />
      <CoreValuesSection />

      {/* Problems We Solve */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeUp}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center text-red-700 font-bold text-3xl mb-12">
          Problems We Solve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Lack of Real-World Preparation",
              description:
                "Students often miss hands-on interview and soft skill training that employers value.",
              icon: <XCircle className="w-8 h-8 text-red-500" />,
              bg: "bg-red-50",
            },
            {
              title: "No Industry Exposure",
              description:
                "Fresh graduates struggle due to lack of experience with real-world tools and work environments.",
              icon: <XCircle className="w-8 h-8 text-red-500" />,
              bg: "bg-red-50",
            },
            {
              title: "Weak Resumes",
              description:
                "Generic resumes with no personalization lead to low employer interest.",
              icon: <XCircle className="w-8 h-8 text-red-500" />,
              bg: "bg-red-50",
            },
            {
              title: "We Have the Solution",
              description:
                "Practical training, resume tailoring, and expert support to bridge the gap.",
              icon: <CheckCircle className="w-8 h-8 text-green-600" />,
              bg: "bg-green-50",
            },
          ].map(({ title, description, icon, bg }) => (
            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
              key={title}
              className={`${bg} rounded-xl p-6 border border-transparent cursor-pointer transition-all`}
            >
              <div className="flex items-start space-x-5">
                <div className="p-3 bg-white rounded-full shadow-sm flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h3 className="text-red-700 font-semibold text-xl mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeUp}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center text-blue-950 font-bold text-3xl mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Role-Specific Technical Training",
              desc: "Get trained for exactly what your future job requires.",
            },
            {
              title: "Weekly Mock Interviews",
              desc: "Get real-time feedback from industry experts and improve confidence.",
            },
            {
              title: "Tailored Resume & LinkedIn",
              desc: "Stand out with a resume and online presence crafted to impress.",
            },
            {
              title: "Strong Placement Support",
              desc: "Get referred and guided into top MNCs through our network.",
            },
          ].map(({ title, desc }) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={title}
              className="p-6 border rounded-xl shadow-md cursor-pointer transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Users className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950 text-xl mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

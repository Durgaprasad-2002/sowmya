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
import { useEffect, useState } from "react";
import Link from "next/link";

function MissionVisionSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-12 relative">
      <div
        aria-hidden="true"
        className="absolute -top-12 lg:block hidden -left-8 w-[300px] h-[350px] rounded-3xl bg-gradient-to-tr from-blue-100 to-blue-300 opacity-40 blur-3xl -z-10"
      />
      <div className="bg-blue-50 rounded-3xl p-5 md:p-10 shadow-lg">
        <h3 className="text-25 md:text-28 font-bold text-blue-900 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700  text-16 md:text-18 leading-relaxed">
          We are dedicated to bridging the gap between academic learning and
          professional success by offering industry-aligned, job-ready programs.
          Through practical training and personalized guidance, we help
          individuals build a future-proof career foundation.
        </p>
      </div>

      <div className="bg-yellow-50 rounded-3xl p-5 md:p-10 shadow-lg">
        <h3 className="text-25 md:text-28 font-bold text-yellow-800 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-800 leading-relaxed text-16 md:text-18">
          Our vision is to be a nationally recognized career consultancy that
          transforms talent into skilled professionals through consistent
          mentorship, practical innovation, and result-driven learning
          experiences.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute lg:block hidden -bottom-12 -right-8 w-[300px] h-[350px] rounded-3xl bg-gradient-to-tr from-yellow-100 to-yellow-300 opacity-40 blur-3xl -z-10"
      />
    </section>
  );
}

const coreValues = [
  {
    title: "Integrity",
    description:
      "We provide honest, transparent, and ethical guidance at every stage of your journey — from training to placement. Our goal is to earn your trust by delivering what we promise.",
    imageSrc: "/assets/integrity.webp",
  },
  {
    title: "Career-Oriented Training",
    description:
      "We focus on shaping your career through interview-based training, real-time projects, and practical skill-building in Python, Java, SQL, Linux, DBMS, and more.",
    imageSrc: "/assets/career.webp",
  },
  {
    title: "Industry Expertise",
    description:
      "Our training is led by professionals with over 10 years of experience in top MNCs. They bring real-world knowledge, mentorship, and the latest industry practices to every session.",
    imageSrc: "/assets/industry-expert.webp",
  },
  {
    title: "Innovation & Adaptability",
    description:
      "We continuously update our curriculum, tools, and teaching methods to align with the dynamic IT industry — so you’re always ahead of the curve.",
    imageSrc: "/assets/innovation.webp",
  },
  {
    title: "End-to-End Support",
    description:
      "From tailored, ATS-friendly resumes to weekly mock interviews and placement drives — we support you every step of the way until you get placed.",
    imageSrc: "/assets/support.webp",
  },
];

const slideInVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function CoreValuesSection() {
  return (
    <section className="mx-auto py-16 px-6 space-y-10 overflow-x-hidden">
      <h2 className="text-25 md:text-32 font-bold  text-blue-950 text-center mb-12">
        Core Values
      </h2>

      {coreValues.map(({ title, description, imageSrc }, i) => (
        <motion.div
          key={title}
          initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInVariants}
          className={`flex flex-col md:flex-row items-center gap-10 rounded-xl p-6 md:p-10  overflow-x-hidden  max-w-5xl mx-auto ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 max-w-sm flex-shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              width={300}
              height={200}
              className="rounded-lg object-contain"
              priority={i === 0}
            />
          </div>
          <div className="md:w-1/2 max-w-md space-y-3 text-center md:text-left">
            <h3 className="text-22 md:text-28 font-semibold text-blue-950 border-b h-fit border-blue-900 md:w-full mx-auto w-fit ">
              {title}
            </h3>
            <p className="text-gray-700 text-16 md:text-18 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

const cardContent = [
  {
    frontStat: "50+",
    frontLabel: "MNC Partners",
    backText:
      "Connected with 50+ top-tier companies offering internships and training.",
  },
  {
    frontStat: "10+",
    frontLabel: "Years of Expertise",
    backText:
      "Our mentors bring over a decade of real-world industry knowledge into the classroom.",
  },
  {
    frontStat: "300+",
    frontLabel: "Resumes Tailored",
    backText:
      "We’ve crafted over 300 ATS-optimized resumes that land interviews.",
  },
];

function FlippingCard({
  frontStat,
  frontLabel,
  backText,
  autoFlipDelay = 5000,
  flipAxis = "Y",
}: {
  frontStat: any;
  frontLabel: any;
  backText: any;
  autoFlipDelay: any;
  flipAxis?: any;
}) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (flipAxis == "NO_FLIP") return;
    const flipInterval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, autoFlipDelay);
    return () => clearInterval(flipInterval);
  }, [autoFlipDelay, flipAxis]);

  if (flipAxis == "NO_FLIP") {
    return (
      <div className="w-full h-[200px] md:h-[200px] rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl flex flex-col justify-center items-center text-white p-4 text-center">
        <div className="text-24 md:text-32 font-extrabold">{frontStat}</div>
        <div className="text-20 md:25 mt-2 font-bold">{frontLabel}</div>
        <div className="text-18 md:text-20 mt-4 text-white/80 max-w-xs">
          {backText}
        </div>
      </div>
    );
  }

  return (
    <div className="[perspective:1000px]">
      <motion.div
        className="relative w-full h-[200px] md:h-[200px] cursor-pointer"
        animate={{ ["rotate" + flipAxis]: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center p-4 text-white font-bold text-center shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-24 md:text-32 font-extrabold">{frontStat}</div>
          <div className="text-20 md:text-25 mt-2">{frontLabel}</div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white rounded-2xl flex items-center justify-center p-2 md:p-4 text-16 md:text-20 text-center shadow-xl"
          style={{
            transform: flipAxis === "X" ? "rotateX(180deg)" : "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          {backText}
        </div>
      </motion.div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-20 md:py-16 relative ">
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:w-1/2 space-y-6 text-center md:text-left relative"
      >
        <h1 className="text-blue-950 text-[clamp(30px,5vw,48px)] font-bold text-25 md:text-44 leading-tight">
          Our Purpose – Your Success
        </h1>
        <p className="text-gray-700 text-18 md:text-20 max-w-md mx-auto md:mx-0 leading-relaxed">
          At Sowmya Consultancy Services, our mission is simple: empower
          students and professionals to excel in their careers through expert
          training, mentorship, and hands-on learning.
        </p>
        <Link href="/services">
          <button className="px-6 py-3 rounded-full text-16 md:text-18 bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:ring-offset-2">
            Get Started
          </button>
        </Link>
      </motion.div>

      {/* Card Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:w-1/2 grid grid-cols-1 gap-6 max-w-md mx-auto relative z-10 "
      >
        <div className="col-span-1 w-full">
          <FlippingCard
            {...cardContent[0]}
            autoFlipDelay={7000}
            flipAxis={"NO_FLIP"}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <FlippingCard {...cardContent[1]} autoFlipDelay={5000} flipAxis="Y" />
          <FlippingCard {...cardContent[2]} autoFlipDelay={5500} flipAxis="X" />
        </div>
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
    <div className=" mx-auto px-5 md:px-6  space-y-10 py-10 overflow-hidden">
      <HeroSection />

      <MissionVisionSection />

      <div className="">
        <ExpandCards />
      </div>

      <CoreValuesSection />

      {/* Problems We Solve */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeUp}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-24 md:text-32 font-bold   text-red-700 text-center mb-12">
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
                // boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
              key={title}
              className={`${bg} rounded-xl p-6 border border-transparent cursor-pointer transition-all`}
            >
              <div className="flex items-start  space-x-3 md:space-x-5">
                <div className="p-3 bg-white rounded-full shadow-sm flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h3 className="text-red-700 font-semibold text-18 md:text-20 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-16 md:text-18 ">
                    {description}
                  </p>
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
        <h2 className="text-24 md:text-32 font-bold   text-blue-950 text-center mb-12">
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
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Users className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950 text-18 md:text-20 mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-16 md:text-18">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

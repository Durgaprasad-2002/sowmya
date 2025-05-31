"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  FileText,
  School,
  Briefcase,
  Settings,
  ArrowRightCircle,
  Users,
} from "lucide-react";
import Image from "next/image";

import { GraduationCap, FlaskConical, Target, BellRing } from "lucide-react";
import Link from "next/link";

function AddOnOfferings() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="md:px-6 px-5 md:py-20 py-10"
    >
      <h2 className="md:text-32 text-22 font-bold mb-6 text-center text-primary">
        Add-On Offerings
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        {/* Card 1 */}
        <div className="flex justify-between items-center bg-blue-100 p-6 rounded-xl shadow-md">
          <div>
            <h4 className="font-semibold text-20 md:text-25 mb-1">
              1:1 Career Mentorship
            </h4>
            <p className="text-sm">
              Personalized guidance from industry experts.
            </p>
          </div>
          <GraduationCap className="text-blue-600 w-8 h-8" />
        </div>

        {/* Card 2 */}
        <div className="flex justify-between items-center bg-green-100 p-6 rounded-xl shadow-md">
          <div>
            <h4 className="font-semibold text-20 md:text-25 mb-1">
              Capstone Projects
            </h4>
            <p className="text-sm">Build practical, real-world applications.</p>
          </div>
          <FlaskConical className="text-green-600 w-8 h-8" />
        </div>

        {/* Card 3 */}
        <div className="flex justify-between items-center bg-yellow-100 p-6 rounded-xl shadow-md">
          <div>
            <h4 className="font-semibold text-20 md:text-25 mb-1">
              Mock Interviews
            </h4>
            <p className="text-sm">Simulate interviews with expert feedback.</p>
          </div>
          <Target className="text-yellow-600 w-8 h-8" />
        </div>

        {/* Card 4 */}
        <div className="flex justify-between items-center bg-purple-100 p-6 rounded-xl shadow-md">
          <div>
            <h4 className="font-semibold text-20 md:text-25 mb-1">
              Job Alerts
            </h4>
            <p className="text-sm">Stay updated via our placement portal.</p>
          </div>
          <BellRing className="text-purple-600 w-8 h-8" />
        </div>
      </div>
    </motion.section>
  );
}

const techListIT = [
  "AI & Machine Learning",
  "Cloud Computing",
  "UI/UX Design",
  "Full Stack Development",
  "DevOps",
];

const techListNonIT = [
  "Embedded Systems",
  "VLSI Design",
  "AutoCAD, CREO",
  "2D/3D Modeling",
];

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function TechnologiesSection() {
  return (
    <div className="px-5 md:px-6 md:py-20 py-10" id="offerings">
      <h2 className="text-22 md:text-32 font-bold mb-6 text-center text-primary">
        Technologies We Teach
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <div className=" p-6 rounded-xl  transition-all">
            <div className="relative w-fit mb-4">
              <h3 className="font-semibold text-20 md:text-25 text-gray-800">
                IT Technologies
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 50 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500 rounded-[50px] mt-1"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {techListIT.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-md"
                  variants={bubbleVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          <div className=" p-6 rounded-xl  transition-all">
            <div className="relative w-fit mb-4">
              <h3 className="font-semibold text-20 md:text-25 text-gray-800">
                Non-IT Technologies
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 50 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500 rounded-[50px] mt-1"
              />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techListNonIT.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-md"
                  variants={bubbleVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Illustration */}
        <div className="relative flex justify-center items-center md:order-2 order-1">
          <div className="max-w-[500px] max-h-[500px] h-full w-full relative">
            {/* <div className="bg-blue-500 size-full absolute left-0 top-0  rounded-full blur-[150px] md:blur-[100px] opacity-20 md:opacity-40 -z-10"></div> */}
            <Image
              src="/assets/user-tech.svg"
              alt="Technologies Illustration"
              width={500}
              height={500}
              className="object-contain w-full z-10 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const handleScroll = () => {
    const element = document.getElementById("offerings");
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="  text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <motion.section className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center overflow-clip px-5 md:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-25 md:text-44 font-extrabold text-gray-900 leading-tight mb-6">
            Empower Your Career with <br />
            <span className="text-blue-600">Industry-Level Training</span>
          </h1>
          <p className="text-18 md:text-22 text-gray-700 mb-8">
            Gain practical skills, hands-on experience, and personalized
            guidance from MNC professionals to fast-track your career.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleScroll}
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <img
            src="/assets/services-hero.png"
            alt="Career growth"
            className="w-full h-auto"
          />
        </motion.div>
        <div className="absolute w-full h-[500px] rounded-[50%] bottom-[-400px] mx-auto blur-[100px] opacity-20 bg-violet-500"></div>
      </motion.section>

      <TechnologiesSection />

      <AnimatedSection
        title="Freshers' Launchpad"
        bg="bg-blue-50"
        items={freshersServices}
        delay={0.2}
      />

      <AnimatedSection
        title="Professional Edge"
        bg="bg-purple-50"
        items={professionalsServices}
        delay={0.3}
      />
      <AnimatedSection
        title="Campus Collaboration"
        bg="bg-green-50"
        items={campusServices}
        delay={0.4}
      />
      <AnimatedSection
        title="Corporate Enablement"
        bg="bg-yellow-50"
        items={corporateServices}
        delay={0.5}
      />

      <AddOnOfferings />
    </div>
  );
}

function AnimatedSection({ title, items, bg, delay }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`${bg} rounded-3xl shadow-inner p-4 md:p-8 md:my-20 my-10 mx-5`}
    >
      <h2 className="text-22 md:text-32 font-bold mb-6 text-center text-primary">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-primary text-2xl mb-2">{item.icon}</div>
            <h3 className="font-semibold  text-18 md:text-25 text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-14 md:text-20 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const freshersServices = [
  {
    icon: <Laptop />,
    title: "Interview-Oriented Training",
    description:
      "Learn Python, Java, SQL, DBMS, and Linux with focused modules.",
  },
  {
    icon: <Briefcase />,
    title: "MNC Internships",
    description: "Bridge academia and industry with hands-on MNC internships.",
  },
  {
    icon: <FileText />,
    title: "Resume Tailoring",
    description: "Personalized resumes and LinkedIn profile optimization.",
  },
  {
    icon: <ArrowRightCircle />,
    title: "Weekly Mock Interviews",
    description:
      "Feedback from industry veterans through weekly mock sessions.",
  },
  {
    icon: <School />,
    title: "Career Counselling",
    description: "Strategic guidance aligned with your goals and trends.",
  },
];

const professionalsServices = [
  {
    icon: <Settings />,
    title: "Technical Upskilling",
    description: "Master tools, frameworks, and cloud for career growth.",
  },
  {
    icon: <Laptop />,
    title: "Real Project Work",
    description: "Work on scenarios that simulate real business needs.",
  },
  {
    icon: <Users />,
    title: "Mentorship Access",
    description: "Guidance from experienced professionals in your field.",
  },
  {
    icon: <Briefcase />,
    title: "Flexible Schedules",
    description: "Weekend/evening sessions for your convenience.",
  },
];

const campusServices = [
  {
    icon: <School />,
    title: "Institutional Tie-ups",
    description: "Bootcamps, tech talks, and student engagement activities.",
  },
  {
    icon: <Settings />,
    title: "Innovation Labs",
    description: "Enable labs for real-time learning and development.",
  },
  {
    icon: <FileText />,
    title: "Curriculum Enhancement",
    description: "Integrate job-oriented content into your courses.",
  },
  {
    icon: <Briefcase />,
    title: "Certification Programs",
    description: "Short practical workshops with certification.",
  },
];

const corporateServices = [
  {
    icon: <Settings />,
    title: "Tailored Employee Tracks",
    description: "Upskill teams with custom online/on-site modules.",
  },
  {
    icon: <Laptop />,
    title: "Tech Refreshers",
    description: "Latest tech content for your evolving teams.",
  },
  {
    icon: <Briefcase />,
    title: "Domain Bootcamps",
    description: "Short intensive learning by domain specialists.",
  },
];

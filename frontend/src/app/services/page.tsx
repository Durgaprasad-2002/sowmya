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

export default function Services() {
  return (
    <div className="px-6 md:px-20 py-12 space-y-28 bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-25 md:text-44 font-black mb-6 text-primary drop-shadow-sm">
          Empower Your Career Journey
        </h1>
        <p className="text-18 md:text-25 text-gray-600">
          Discover our suite of customized services designed to elevate
          students, professionals, and institutions.
        </p>
      </motion.div>

      {/* Sections */}
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

      {/* Technologies We Teach */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-br from-white to-gray-100 p-4 md:p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-22 md:text-32 font-bold mb-6 text-center text-primary">
          Technologies We Teach
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-20 md:text-25 mb-4 flex items-center gap-2 text-gray-800">
              💻 IT Technologies
            </h3>
            <ul className="space-y-2 text-gray-600 list-inside list-disc text-16 md:text-20">
              <li>AI & Machine Learning</li>
              <li>Cloud Computing</li>
              <li>UI/UX Design</li>
              <li>Full Stack Development</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-20 md:text-25 mb-4 flex items-center gap-2 text-gray-800">
              🛠️ Non-IT Technologies
            </h3>
            <ul className="space-y-2 text-gray-600 list-inside list-disc">
              <li>Embedded Systems</li>
              <li>VLSI Design</li>
              <li>AutoCAD, CREO</li>
              <li>2D/3D Modeling</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Add-On Offerings */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="md:text-32 text-22 font-bold mb-6 text-center text-primary">
          Add-On Offerings
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="flex items-start gap-4">
            <span className="text-2xl text-primary">👨‍🏫</span>
            <div>
              <h4 className="font-semibold text-20 md:text-25">
                1:1 Career Mentorship
              </h4>
              <p className="text-sm">
                Personalized guidance from industry experts.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl text-primary">🧪</span>
            <div>
              <h4 className="font-semibold text-20 md:text-25">
                Capstone Projects
              </h4>
              <p className="text-sm">
                Build practical, real-world applications.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl text-primary">🎯</span>
            <div>
              <h4 className="font-semibold text-20 md:text-25">
                Mock Interviews
              </h4>
              <p className="text-sm">
                Simulate interviews with expert feedback.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl text-primary">📢</span>
            <div>
              <h4 className="font-semibold text-20 md:text-25">Job Alerts</h4>
              <p className="text-sm">Stay updated via our placement portal.</p>
            </div>
          </div>
        </div>
      </motion.section>
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
      className={`${bg} rounded-3xl shadow-inner p-4 md:p-8`}
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

function TechList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-20 md:text-25 mb-2 text-gray-700">
        {title}
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
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

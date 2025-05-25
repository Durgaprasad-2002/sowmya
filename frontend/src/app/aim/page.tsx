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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Aim() {
  return (
    <div className=" space-y-20  ">
      {/* Intro Banner */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center relative overflow-hidden md:px-6 px-5 py-10">
        <div className="h-fit z-10">
          <motion.div {...fadeInUp} transition={{ duration: 0.6 }}>
            <h1 className="text-32 font-extrabold text-center text-gray-900 ">
              Our Purpose – Your Success
            </h1>
            <p className="text-center text-18 text-gray-600 max-w-3xl mx-auto">
              At Sowmya Consultancy Services, our mission is simple: empower
              students and professionals to excel in their careers through
              expert training, mentorship, and hands-on learning.
            </p>
          </motion.div>
        </div>
        <div>
          <Image
            alt="hero-img"
            src="/assets/character-climbing-stairs.svg"
            width={500}
            height={400}
            className="h-auto max-w-[400px] z-10"
          />
        </div>
        <div className="absolute bottom-[-250px] mx-auto hidden h-[313.87px] w-[935px] rotate-[0deg] -z-10 rounded-[50%] bg-blue-600 opacity-50 blur-[200px] md:block"></div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 md:px-6 px-5 py-10">
        <motion.section {...fadeInUp} transition={{ delay: 0.2 }}>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to bridging the gap between academic learning and
            professional success by offering industry-aligned, job-ready
            programs. Through practical training and personalized guidance, we
            help individuals build a future-proof career foundation.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be a nationally recognized career consultancy that
            transforms talent into skilled professionals through consistent
            mentorship, practical innovation, and result-driven learning
            experiences.
          </p>
        </motion.section>
      </div>

      {/* Core Values */}
      <motion.section
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        className="md:px-6 px-5 py-10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <CheckCircle className="text-green-600" />,
              title: "Integrity",
              desc: "Honest and transparent guidance at every step.",
            },
            {
              icon: <Target className="text-blue-600" />,
              title: "Career Focus",
              desc: "We put your goals at the center of our approach.",
            },
            {
              icon: <Brain className="text-purple-600" />,
              title: "Expertise",
              desc: "Training by mentors with over 10 years of industry experience.",
            },
            {
              icon: <Lightbulb className="text-yellow-500" />,
              title: "Innovation",
              desc: "Always evolving with latest tech and tools.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-white rounded-full shadow">
                  {value.icon}
                </div>
                <div>
                  <p className="font-medium text-lg">{value.title}</p>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Problems We Solve */}

      <motion.section
        {...fadeInUp}
        transition={{ delay: 0.5 }}
        className="md:px-6 px-5 py-10"
      >
        <h2 className="text-3xl font-semibold text-center text-red-600 mb-10">
          Problems We Solve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Lack of Real-World Preparation",
              description:
                "Students often miss hands-on interview and soft skill training that employers value.",
            },
            {
              title: "No Industry Exposure",
              description:
                "Fresh graduates struggle due to lack of experience with real-world tools and work environments.",
            },
            {
              title: "Weak Resumes",
              description:
                "Generic resumes with no personalization lead to low employer interest.",
            },
            {
              title: "We Have the Solution",
              description:
                "Practical training, resume tailoring, and expert support to bridge the gap.",
              icon: <CheckCircle className="text-green-600 w-6 h-6" />,
              highlight: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 bg-white shadow-sm transition hover:shadow-md ${
                item.highlight ? "border-green-500" : "border-red-300"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-gray-100">
                  {item.icon ?? <XCircle className="text-red-500 w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        {...fadeInUp}
        transition={{ delay: 0.6 }}
        className="md:px-6 px-5 py-10"
      >
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-10">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-indigo-100">
                  <Users className="text-indigo-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

// Aim.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Brain, Lightbulb, XCircle, Users } from "lucide-react";

export default function Aim() {
  return (
    <div className="px-6 md:px-20 py-12 space-y-16">
      {/* Intro Banner */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-center mb-4">Our Purpose – Your Success</h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
          At Sowmya Consultancy Services, our mission is simple: empower students and professionals to excel in their careers through expert training, mentorship, and hands-on learning.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.section className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700">
          We are dedicated to bridging the gap between academic learning and professional success by offering industry-aligned, job-ready programs. Through practical training and personalized guidance, we help individuals build a future-proof career foundation.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-gray-700">
          Our vision is to be a nationally recognized career consultancy that transforms talent into skilled professionals through consistent mentorship, practical innovation, and result-driven learning experiences.
        </p>
      </motion.section>

      {/* Core Values */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600" />
            <div>
              <p className="font-medium">Integrity</p>
              <p className="text-sm text-gray-600">Honest and transparent guidance at every step.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Target className="text-blue-600" />
            <div>
              <p className="font-medium">Career Focus</p>
              <p className="text-sm text-gray-600">We put your goals at the center of our approach.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Brain className="text-purple-600" />
            <div>
              <p className="font-medium">Expertise</p>
              <p className="text-sm text-gray-600">Training by mentors with over 10 years of industry experience.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Lightbulb className="text-yellow-500" />
            <div>
              <p className="font-medium">Innovation</p>
              <p className="text-sm text-gray-600">Always evolving with latest tech and tools.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Problems We Solve */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Problems We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <XCircle className="text-red-500" />
            <p className="text-gray-700">Lack of real-world interview preparation and soft skills training.</p>
          </div>
          <div className="flex items-start space-x-3">
            <XCircle className="text-red-500" />
            <p className="text-gray-700">Limited or no industry exposure for fresh graduates.</p>
          </div>
          <div className="flex items-start space-x-3">
            <XCircle className="text-red-500" />
            <p className="text-gray-700">Generic resumes that fail to impress employers.</p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="text-green-600" />
            <p className="text-gray-700 font-medium">We solve these challenges with practical training and expert support.</p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <Users className="text-indigo-500" />
            <p className="text-gray-700">Specialized technical training for job-specific roles.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="text-indigo-500" />
            <p className="text-gray-700">Weekly expert-led mock interviews with constructive feedback.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="text-indigo-500" />
            <p className="text-gray-700">Resume tailoring and LinkedIn grooming services.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="text-indigo-500" />
            <p className="text-gray-700">Strong placement support through MNC collaborations.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}


// The Services page will be created next.

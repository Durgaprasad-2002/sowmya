"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageSquare, BookOpen, Briefcase } from "lucide-react";
import Image from "next/image";

import { Users, GraduationCap, Star } from "lucide-react";
import AboutHero from "./(components)/AboutParallax";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const values = [
  {
    title: "🏆 Excellence in Training",
    desc: "We provide high-quality, structured, and hands-on training programs delivered by industry professionals.",
    bg: "bg-sky-50 order-1",
    border: "border-sky-300",
    text: "text-blue-900 ",
  },
  {
    title: "🎯 Commitment to Student Success",
    desc: "Every learner’s growth is our priority. We offer mentorship and continuous support throughout your journey.",
    bg: "bg-gray-50 order-2",
    border: "border-blue-500",
    text: "text-blue-800  ",
  },
  {
    title: "🛠 Industry-Relevant Skills",
    desc: "Our curriculum is aligned with real-time market needs, ensuring you're job-ready from day one.",
    bg: "bg-gray-50 md:order-3 order-4",
    border: "border-blue-500",
    text: "text-blue-800 ",
  },
  {
    title: "🤝 Ethical Career Development",
    desc: "We uphold transparency and integrity in every step of your career transformation process.",
    bg: "bg-sky-50 md:order-4 order-3",
    border: "border-sky-300",
    text: "text-blue-900 ",
  },
];

const steps = [
  {
    title: "Step 1: Personalized Counseling",
    icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
    description:
      "We start by understanding your goals, educational background, and strengths. Our experienced counselors help you identify the best career track that suits your aspirations.",
  },
  {
    title: "Step 2: Skill-Focused Training",
    icon: <BookOpen className="text-green-600 w-8 h-8" />,
    description:
      "Once your path is clear, we offer role-specific training modules that focus on both technical and soft skills. Courses are regularly updated to match industry demands.",
  },
  {
    title: "Step 3: Mock Interviews & Resume Preparation",
    icon: <CheckCircle className="text-yellow-600 w-8 h-8" />,
    description:
      "Practice makes perfect. We simulate real interview scenarios, offer detailed feedback, and help you craft a strong, market-ready resume that highlights your strengths.",
  },
  {
    title: "Step 4: Placement Support & Job Connection",
    icon: <Briefcase className="text-purple-600 w-8 h-8" />,
    description:
      "We don't stop at training. Our placement team connects you with leading recruiters, schedules interviews, and supports you until you land the job that fits your skillset.",
  },
];

const highlights = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "1000+ students trained and placed",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    title: "20+ industry-expert trainers",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    title: "Partnerships with top hiring companies",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "End-to-end career support",
  },
];

function HowWeWork() {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-24 font-bold">How We Work</h2>
        <div className="mt-1 rounded-[50px] mx-auto h-0.5 w-[40px] bg-blue-900"></div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="absolute hidden md:block w-1 bg-blue-200 h-full left-1/2 transform -translate-x-1/2 z-0" />
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative z-10 bg-white rounded-md shadow-lg p-6 md:p-8 border border-gray-100 w-full md:w-[45%] ${
              index % 2 === 0 ? "md:self-end" : "md:self-start"
            } text-left mt-8`}
          >
            <div
              className={`absolute top-6 ${
                index % 2 != 0 ? "md:-right-8" : "md:-left-8"
              } md:block hidden bg-white p-2 rounded-full shadow-md`}
            >
              {step.icon}
            </div>
            <div className="md:hidden mb-4">{step.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-900">
              {step.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
      <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md border border-gray-200 p-6 rounded-lg text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-blue-900">
          📈 Future-Ready, Career-Focused
        </h3>
        <p className="text-gray-700 text-md leading-relaxed">
          At <strong>Sowmya Consultancy Services</strong>, we’re more than just
          a consultancy — we’re your partner in building a meaningful career.
          Join us, and let’s shape your future together.
        </p>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="">
      <AboutHero />
      <div className="px-5 md:px-6 py-10">
        <p className="font-semibold text-16 md:text-20 text-center max-w-[900px] mx-auto">
          At <strong className="font-bold">Sowmya Consultancy Services</strong>,
          we believe every learner holds unique potential waiting to be
          unlocked. Our mission is to nurture and transform that talent through
        </p>
        <div className="grid grid-cols-2 gap-3  lg:grid-cols-4 mt-10 text-16 md:text-18 font-semibold">
          <div className="bg-gray-100 p-4 rounded-md text-center shadow-sm ">
            Expert-led, guided learning
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center shadow-sm">
            Personalized career counseling
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center shadow-sm">
            Skill-based training
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center shadow-sm">
            Dedicated placement support
          </div>
        </div>
        <p className="font-semibold text-16 md:text-20 text-center max-w-[900px] mx-auto mt-10">
          With a strong foundation of{" "}
          <strong className="font-bold">
            integrity, excellence, and student-first values
          </strong>
          , we ensure that your learning journey translates into a rewarding
          career path. Whether you're a fresh graduate or looking to upskill,
          we’re here to help you{" "}
          <strong className="font-bold">excel, grow, and succeed</strong>.
        </p>
      </div>

      <div className="px-5 md:px-6 py-10">
        <div className="text-center mb-6">
          <h2 className="text-24 font-bold">Our Core Values</h2>
          <div className="mt-1 rounded-[50px] mx-auto h-0.5 w-[40px] bg-blue-900"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`shadow-md border ${val.border} ${val.bg} rounded-md p-5`}
            >
              <h2 className={`md:text-24 text-20 font-semibold ${val.text}`}>
                {val.title}
              </h2>
              <p className="md:text-18 text-16 mt-3 text-gray-700">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <HowWeWork />

      <WhyChooseUs />
    </div>
  );
}

export default AboutPage;

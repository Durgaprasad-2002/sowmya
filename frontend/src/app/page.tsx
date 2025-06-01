"use client";
import React, { useEffect, useRef, useState } from "react";
import Testimonials from "./(components)/Testimonails";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Users, GraduationCap } from "lucide-react";
import { School, Building2, FileText } from "lucide-react";

import { BookOpen, Hammer, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    label: "Enroll",
    icon: <GraduationCap />,
    color: "text-indigo-600",
  },
  {
    label: "Learn",
    icon: <BookOpen />,
    color: "text-teal-600",
  },
  {
    label: "Practice",
    icon: <Hammer />,
    color: "text-rose-600",
  },
  {
    label: "Get Certified",
    icon: <Award />,
    color: "text-yellow-500",
  },
  {
    label: "Get Placed",
    icon: <Briefcase />,
    color: "text-green-600",
  },
];

function RadialHowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const radiusMobile = 110;
  const radiusDesktop = 180;

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isDesktop ? radiusDesktop : radiusMobile;

  return (
    <section className="bg-indigo-50 py-16 px-4 text-indigo-900">
      <motion.h2
        className="text-24 md:text-32 font-bold  text-center mb-16 tracking-wide"
        variants={fadeInUp}
      >
        How It Works
      </motion.h2>

      <div
        ref={containerRef}
        className="relative mx-auto w-[290px] h-[290px] sm:w-[480px] sm:h-[480px]"
      >
        <div
          className="absolute top-1/2 left-1/2 rounded-full bg-indigo-200 z-20 shadow-inner ring-4 ring-indigo-300 flex items-center justify-center
                        w-24 h-24 sm:w-48 sm:h-48
                        transform -translate-x-1/2 -translate-y-1/2"
        >
          <h3 className="text-16 md:text-25 font-bold text-center leading-tight px-2 sm:px-0">
            Sowmya <br /> Consultancy
          </h3>
        </div>

        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          return (
            <div
              key={step.label}
              className="absolute flex flex-col items-center w-20 sm:w-32 transition-transform duration-[900ms] ease-in-out"
              style={{
                top: "50%",
                left: "50%",
                transform: animate
                  ? `translate(calc(${(radius * Math.cos(angle)).toFixed(
                      1
                    )}px - 50%), calc(${(radius * Math.sin(angle)).toFixed(
                      1
                    )}px - 50%)) scale(1)`
                  : "translate(-50%, -50%) scale(0.3)",
                opacity: animate ? 1 : 0,
              }}
            >
              <div
                className={`${step.color} text-3xl sm:text-4xl mb-1 sm:mb-2`}
              >
                {step.icon}
              </div>
              <p className="text-xs sm:text-base font-semibold tracking-wide text-center px-1">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const stories = [
  {
    name: "Ananya Reddy",
    review:
      "Sowmya Consultancy helped me transform my interview approach. The mock interviews and personal guidance gave me the confidence I needed. Highly recommended!",
  },
  {
    name: "Rohit Sharma",
    review:
      "Their Java and SQL training sessions are top-notch. The mentors are experienced, and the sessions are practical and focused on real-world applications.",
  },
  {
    name: "Megha Das",
    review:
      "I was struggling to crack MNC interviews until I enrolled here. The technical upskilling and resume help made a big difference. Got placed within 3 months!",
  },
  {
    name: "Aditya Menon",
    review:
      "Loved the hands-on training! The industrial internship added great value to my resume. Truly a career-changing experience.",
  },
  {
    name: "Shruti Kulkarni",
    review:
      "Their personalized feedback and continuous support stood out. The trainers are very patient and explain concepts in depth.",
  },
  {
    name: "Karan Verma",
    review:
      "Perfect place for freshers and experienced professionals looking for growth. Their placement assistance is genuine and effective.",
  },
  {
    name: "Nisha Pillai",
    review:
      "Thanks to Sowmya Consultancy, I’m now working at a top MNC. The real-time projects and guidance helped me stand out in interviews.",
  },
  {
    name: "Rahul Dey",
    review:
      "They don't just teach, they prepare you for the industry. The focus on DBMS and Linux gave me a strong foundation.",
  },
  {
    name: "Divya Suresh",
    review:
      "Very professional team and excellent training material. They helped me identify my weak areas and improve drastically.",
  },
  {
    name: "Siddharth Jha",
    review:
      "From resume building to mock interviews, they cover everything. The environment is motivating, and the results speak for themselves.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  const handleScroll = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white text-center py-24 px-6 min-h-[500px] rounded-br-[40px] rounded-bl-[40px] md:rounded-br-[80px] md:rounded-bl-[80px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/assets/background_video.webm"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/80 to-blue-600/80 z-0 opacity-30" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[32px] md:text-[60px] font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-700 bg-clip-text text-transparent animate-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Where Talent Meets Dedication
          </motion.h1>

          <motion.p
            className="text-18 md:text-20 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Empowering students and professionals with real-world skills,
            interview-readiness, and placement support.
          </motion.p>

          <motion.p
            className="text-20 md:text-24 font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Your Career – Our Responsibility
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-100 transition  text-16 md:text-18"
              >
                Explore Courses
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-300 transition text-16 md:text-18"
              >
                Talk to a Mentor
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.button
              onClick={handleScroll}
              className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white/10 border border-white hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute w-full h-full rounded-full animate-ping bg-white opacity-20"></span>
              <ChevronDown className="text-white w-6 h-6 z-10" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6" id="next-section">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-left lg:w-1/2" variants={fadeInUp}>
            <p className="uppercase tracking-wide text-14 md:text-16 font-semibold text-indigo-600 mb-3">
              Who We Are
            </p>
            <h2 className="text-28 md:text-44 font-semibold mb-6 text-gray-900 leading-tight">
              Bridging Learning with Industry
            </h2>
            <p className="text-16 md:text-18 text-gray-600 leading-relaxed mb-6">
              Sowmya Consultancy Services is a training and placement-oriented
              consultancy dedicated to bridging the gap between classroom
              learning and corporate expectations. Backed by industry veterans
              with 10+ years of experience, we ensure every learner is
              job-ready.
            </p>
            <Link
              href="/services"
              className="inline-block  text-16 md:text-18 hover:bg-indigo-700 text-border border text-indigo-700 hover:text-white border-indigo-700 font-medium py-3 px-6 rounded-md transition"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-1 lg:w-1/2 w-full"
            variants={staggerContainer}
          >
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-green-600" />,
                bg: "green",
                value: "250+",
                label: "Students Trained",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-yellow-600" />,
                bg: "yellow",
                value: "100+",
                label: "Candidates Placed in MNCs",
              },
              {
                icon: <Users className="w-6 h-6 text-blue-600" />,
                bg: "blue",
                value: "15+",
                label: "Corporate Trainers",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`flex items-center gap-4 bg-${stat.bg}-50 p-4 rounded-xl shadow-sm`}
                variants={fadeInUp}
              >
                <div className={`p-3 bg-${stat.bg}-100 rounded-full`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-24 font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-14 md:text-16">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-blue-950 py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-24 md:text-32 font-bold text-center mb-12 text-white"
            variants={fadeInUp}
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Interview-Focused Training",
                desc: "Core tech stack—Python, Java, SQL, Linux, DBMS",
                icon: <School className="w-6 h-6 text-indigo-600" />,
                bg: "indigo",
              },
              {
                title: "MNC Internships & Exposure",
                desc: "Hands-on experience from top companies",
                icon: <Building2 className="w-6 h-6 text-yellow-600" />,
                bg: "yellow",
              },
              {
                title: "Resume Tailoring & Mocks",
                desc: "ATS-optimized CVs + weekly practice",
                icon: <FileText className="w-6 h-6 text-green-600" />,
                bg: "green",
              },
              {
                title: "Placement Drives",
                desc: "Online and offline hiring events",
                icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                bg: "blue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center flex flex-col items-center"
                variants={fadeInUp}
              >
                <div className={`bg-${item.bg}-100 p-3 rounded-full mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-18 md:text-20 font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-14 md:text-16">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <RadialHowItWorks />

      <section className=" py-10 px-5 ">
        <motion.h2
          className="text-24 md:text-32 font-bold text-center "
          variants={fadeInUp}
        >
          Success Stories
        </motion.h2>

        <Testimonials stories_user={stories} />
      </section>

      <div className="px-5">
        <section className="bg-indigo-700 text-white py-8 px-6 mx-auto my-10 rounded-2xl shadow-md max-w-[1300px] ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <h2 className="text-20 md:text-24 font-semibold leading-snug max-w-md">
              🚀 Ready to start your <br className="block md:hidden" />
              <span className="text-yellow-300">
                career transformation
              </span>{" "}
              today?
            </h2>
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-16 md:text-18 hover:bg-yellow-300 transition-colors duration-300 shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

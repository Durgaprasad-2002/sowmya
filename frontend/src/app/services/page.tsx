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
    <div className="px-6 md:px-20 py-12 space-y-24 bg-gray-50 text-gray-800">
      {/* Intro Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 text-primary">
          Explore Our Career-Oriented Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Begin your journey to professional success with our carefully crafted
          services for students, professionals, institutions, and corporate
          teams.
        </p>
      </motion.div>

      {/* Service Sections */}
      <div className="space-y-16">
        <ServiceGroup
          title="For Freshers"
          items={freshersServices}
          delay={0.2}
        />
        <ServiceGroup
          title="For Working Professionals"
          items={professionalsServices}
          delay={0.3}
        />
        <ServiceGroup
          title="Campus & Institutional Training"
          items={campusServices}
          delay={0.4}
        />
        <ServiceGroup
          title="Corporate Training"
          items={corporateServices}
          delay={0.5}
        />
      </div>

      {/* Technologies */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Technologies Covered
        </h2>
        <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-700">
              IT Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>AI & Machine Learning</li>
              <li>Cloud Computing</li>
              <li>UI/UX Design</li>
              <li>Full Stack Development</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-700">
              Non-IT Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Embedded Systems</li>
              <li>VLSI Design</li>
              <li>AutoCAD, CREO</li>
              <li>2D/3D Modeling</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Additional Services */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-white p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Additional Services
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>1:1 Career Mentorship</li>
          <li>Capstone Projects for Hands-On Learning</li>
          <li>Domain-Specific Mock Interviews</li>
          <li>Job Alerts via Dedicated Placement Portal</li>
        </ul>
      </motion.section>
    </div>
  );
}

function ServiceGroup({ title, items, delay }: any) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any, i: number) => (
          <ServiceCard
            key={i}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </motion.section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex space-x-4 hover:shadow-xl transition-shadow duration-300">
      <div className="text-primary text-xl mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const freshersServices = [
  {
    icon: <Laptop />,
    title: "Interview-Oriented Training",
    description:
      "Learn Python, Java, SQL, DBMS, and Linux with focused modules that prep you for real interviews.",
  },
  {
    icon: <Briefcase />,
    title: "MNC Internships",
    description:
      "Hands-on internship programs with reputed MNCs to bridge academia and real-world skills.",
  },
  {
    icon: <FileText />,
    title: "Resume Tailoring",
    description:
      "Get personalized resumes and optimized LinkedIn profiles to stand out in job searches.",
  },
  {
    icon: <ArrowRightCircle />,
    title: "Mock Interviews Weekly",
    description:
      "Participate in weekly mocks with feedback from senior engineers and hiring experts.",
  },
  {
    icon: <School />,
    title: "Career Counselling",
    description:
      "Work with mentors to define a strategic roadmap aligned with your interests and industry trends.",
  },
];

const professionalsServices = [
  {
    icon: <Settings />,
    title: "Advanced Technical Upskilling",
    description:
      "Master modern frameworks, tools, and cloud platforms to enhance your domain expertise.",
  },
  {
    icon: <Laptop />,
    title: "Hands-on Project Scenarios",
    description:
      "Work on real-time projects that boost confidence and problem-solving skills.",
  },
  {
    icon: <Users />,
    title: "Senior-Level Mentorship",
    description:
      "Get mentored by industry veterans with deep domain knowledge and hiring insights.",
  },
  {
    icon: <Briefcase />,
    title: "Flexible Scheduling",
    description:
      "Evening & weekend sessions tailored for working professionals with busy calendars.",
  },
];

const campusServices = [
  {
    icon: <School />,
    title: "Campus Collaboration",
    description:
      "End-to-end academic partnerships including bootcamps, tech talks, and student engagement.",
  },
  {
    icon: <Settings />,
    title: "Innovation Centers",
    description:
      "Establish and support lab-based learning and real-time development environments.",
  },
  {
    icon: <FileText />,
    title: "Curriculum Integration",
    description:
      "Embed industry modules within your academic syllabus for better job preparedness.",
  },
  {
    icon: <Briefcase />,
    title: "Certification Workshops",
    description:
      "Short-term practical training and industry-recognized certificates.",
  },
];

const corporateServices = [
  {
    icon: <Settings />,
    title: "Custom Employee Programs",
    description:
      "Bespoke upskilling for employee groups via online or on-premise formats.",
  },
  {
    icon: <Laptop />,
    title: "Tech Upgrade Tracks",
    description:
      "Stay updated with focused content around the latest technologies and stacks.",
  },
  {
    icon: <Briefcase />,
    title: "Bootcamps by Domain",
    description:
      "Short, intensive bootcamps curated for business, tech, and non-tech teams.",
  },
];

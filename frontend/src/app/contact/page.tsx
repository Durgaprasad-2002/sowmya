"use client";

import ContactForm from "../(components)/ContactForm";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import ConatctHero from "./(components)/ContactHero";

const faqs = [
  {
    question: "What services do you offer to job seekers?",
    answer:
      "We provide a complete pathway to employment including career counseling, skill development training, resume building, interview preparation, and job placement support.",
  },
  {
    question: "Who can enroll in your training and placement programs?",
    answer:
      "Our programs are open to students, recent graduates, and professionals looking to upskill or switch careers. We cater to individuals from various academic backgrounds and streams.",
  },
  {
    question: "What types of training do you offer?",
    answer:
      "We offer industry-relevant training in areas such as IT (Full Stack, Data Science, Digital Marketing), Communication Skills, Aptitude, Soft Skills, and Interview Readiness.",
  },
  {
    question: "Will I get a job after completing the training?",
    answer:
      "Yes, our goal is to help you secure a job. We work with a network of hiring partners and provide placement assistance until you are placed. However, your dedication and performance also play a key role.",
  },
  {
    question: "Do you provide internships as part of the program?",
    answer:
      "Yes, many of our courses include internship opportunities to give you real-world experience and help you build your portfolio.",
  },
  {
    question: "How long are the training programs?",
    answer:
      "Training duration varies by course. Most programs range from 1 to 6 months, depending on the complexity and depth of the subject.",
  },
  {
    question: "What kind of companies do you place candidates in?",
    answer:
      "We partner with startups, mid-sized companies, and established MNCs across various industries to provide diverse job opportunities.",
  },
  {
    question: "Is there any fee for placement services?",
    answer:
      "We offer different packages—some include training plus placement support, while others are placement-only services. Please contact us for specific pricing.",
  },
  {
    question: "Do you help with resume building and mock interviews?",
    answer:
      "Yes! We guide you in creating a professional resume and conduct mock interviews to boost your confidence and improve your performance.",
  },
  {
    question: "How can I get started?",
    answer:
      "You can get started by registering on our website, visiting our office, or calling us directly. Our counselors will guide you through the next steps.",
  },
];

function ContactPage() {
  return (
    <div className="">
      <ConatctHero />
      <div className="px-5 md:px-6 py-10">
        <div className=" grid lg:grid-cols-2 grid-col-1 gap-14 md:gap-6 mt-10">
          <div>
            <ContactForm />
          </div>
          <div className="grid md:grid-col-2 grid-col-1 px-4 gap-10 md:gap-6 ">
            <div>
              <h2 className="border-l-2 pl-2 h-fit border-blue-900 font-bold text-24">
                Contact Details
              </h2>
              <ul className="space-y-3 mt-5 text-18">
                <li className="flex items-center gap-3">
                  <IoCallOutline className="bg-blue-900 text-white rounded-full p-1.5 w-[30px] h-[30px] overflow-visible" />
                  <span>+91 9177943677</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="bg-blue-900 text-white rounded-full p-1.5 w-[30px] h-[30px] overflow-visible" />
                  <span>+91 9177943677</span>
                </li>
                <li className="flex items-center gap-3">
                  <TfiEmail className="bg-blue-900 text-white rounded-full p-1.5 w-[30px] h-[30px] overflow-visible" />
                  <span>prasaddurga2031@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="border-l-2 pl-2 h-fit border-blue-900 font-bold text-24">
                Address
              </h2>
              <p className="mt-5 text-18">
                Name: John Doe <br />
                Street: 1234 Elm Street <br />
                City: Springfield <br />
                Country: United States
              </p>
            </div>
            <div className="md:col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0592934641277!2d78.46962828973084!3d17.408941907489524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975f3aa25c81%3A0x2783de93c2a90bd7!2sLumbini%20Parking%2C%20Hussain%20Sagar%2C%20Khairtabad%2C%20Hyderabad%2C%20Telangana%20500022!5e0!3m2!1sen!2sin!4v1747841542631!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-6 py-10">
        <div className="text-center mb-6">
          <h2 className="text-24 font-bold">Faq's</h2>
          <div className="mt-1 rounded-[50px]  mx-auto h-0.5 w-[40px] bg-blue-900"></div>
        </div>
        <div className="px-4">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </div>
  );
}

function FAQ({ faqs }: { faqs: any[] }) {
  const [openItems, setOpenItems] = useState(new Set<number>());

  const toggleFAQ = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div>
      {faqs.map((faq, ind) => (
        <div
          key={ind}
          className={`mb-4  ${faqs.length - 1 != ind && "border-b"}  pb-3`}
        >
          <h3
            onClick={() => toggleFAQ(ind)}
            className="cursor-pointer font-semibold text-lg flex justify-between items-start"
          >
            {faq.question}
            <span className="ml-4">
              {openItems.has(ind) ? <Minus size={20} /> : <Plus size={20} />}
            </span>
          </h3>

          <AnimatePresence initial={false}>
            {openItems.has(ind) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default ContactPage;

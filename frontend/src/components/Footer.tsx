import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";

const contactInfo = [
  {
    icon: <FaWhatsapp className="w-[30px] h-[30px]" />,
    label: "WhatsApp",
    value: "+91-1234567890",
    link: "https://wa.me/911234567890",
  },
  {
    icon: <MdOutlinePhone className="w-[30px] h-[30px]" />,
    label: "Phone",
    value: "+91-9876543210",
    link: "tel:+919876543210",
  },
  {
    icon: <MdOutlineEmail className="w-[30px] h-[30px]" />,
    label: "Email",
    value: "info@example.com",
    link: "mailto:info@example.com",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-800 to-slate-900 text-white py-8 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap  justify-between gap-8">
        <div className="flex flex-wrap gap-8">
          <div className="space-y-4">
            <h2 className="text-20 md:text-24 font-bold">
              About Sowmya Consultancy
            </h2>
            <p className="text-16 md:text-18 text-gray-400 max-w-[350px]">
              We upskill students and professionals with job-ready training,
              expert mentorship, and placement support.
            </p>
          </div>

          <div className="md:items-start flex flex-col space-y-2 text-16 md:text-18">
            <h2 className="text-18 md:text-20 font-bold ">Quick links</h2>
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 hover:underline hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-20 md:text-24 font-bold">📡 Stay Connected</h2>
          <p className="text-16 md:text-18 text-gray-400 max-w-[350px]">
            Have questions or need career guidance? Reach out to us anytime,
            we're here to help you every step of the way.
          </p>
          <div className="flex justify-between items-center w-fit gap-4">
            {contactInfo.map((contact, ind) => (
              <Link
                key={ind}
                href={contact.link}
                className="hover:scale-110 duration-150"
              >
                {contact.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 max-w-[1410px] border-gray-600 mt-10 pt-10 mx-auto px-5">
        <p className="text-center text-16 md:text-18 ">
          © 2025 Sowmya Consultancy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

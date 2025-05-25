"use client";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const tabs = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Aim", link: "/aim" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "About", link: "/about" },
  { id: 5, name: "Contact", link: "/contact" },
];

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <div className="fixed left-0 top-0 w-full z-50  shadow-md">
        <div className="backdrop-blur-sm bg-white/70 w-full h-[100px] -z-10 absolute left-0 top-0"></div>
        <div className="max-w-[1440px] mx-auto h-[100px] flex justify-between items-center px-5 lg:px-10 z-50">
          {/* Sowmya Consultancy */}
          <h1 className="text-2xl lg:text-4xl font-bold">Sowmya</h1>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8">
            {tabs.map((tab) => (
              <Link key={tab.id} href={tab.link}>
                <div className="text-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                  {tab.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowNavbar(true)}
              aria-label="Open menu"
              className="text-xl"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 transition-opacity duration-300 ${
            showNavbar
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowNavbar(false)}
        >
          <div
            className={`bg-white w-full absolute top-0 left-0 transform transition-transform duration-300 ${
              showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center h-[100px] px-5">
              <h1 className="text-2xl font-bold">Sowmya</h1>
              <button
                onClick={() => setShowNavbar(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <hr className="mx-5 my-2" />
            <div className="flex flex-col px-5 pb-5 gap-4">
              {tabs.map((tab) => (
                <Link key={tab.id} href={tab.link}>
                  <div
                    onClick={() => setShowNavbar(false)}
                    className="text-lg p-4 rounded-md hover:bg-gray-200 transition"
                  >
                    {tab.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px]" />
    </>
  );
}

export default Navbar;

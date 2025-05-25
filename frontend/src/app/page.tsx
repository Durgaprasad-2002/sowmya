import React from "react";
import Testimonials from "./(components)/Testimonails";

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

export default function HomePage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Where Talent Meets Dedication
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Empowering students and professionals with real-world skills,
          interview-readiness, and placement support.
        </p>
        <p className="text-xl font-semibold mb-8">
          🎯 Your Career – Our Responsibility
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-100 transition">
            Explore Courses
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-300 transition">
            Talk to a Mentor
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Sowmya Consultancy Services is a training and placement-oriented
          consultancy dedicated to bridging the gap between classroom learning
          and corporate expectations. Backed by industry veterans with 10+ years
          of experience, we ensure every learner is job-ready.
        </p>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              🎓 Interview-Focused Training
            </h3>
            <p className="text-gray-600">
              Core tech stack—Python, Java, SQL, Linux, DBMS
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              🏢 MNC Internships & Exposure
            </h3>
            <p className="text-gray-600">
              Hands-on experience from top companies
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">
              📄 Resume Tailoring & Mocks
            </h3>
            <p className="text-gray-600">ATS-optimized CVs + weekly practice</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">💼 Placement Drives</h3>
            <p className="text-gray-600">Online and offline hiring events</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center max-w-6xl mx-auto">
          {["Enroll", "Learn", "Practice", "Get Certified", "Get Placed"].map(
            (step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-indigo-700 mb-4">
                  {i + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className=" py-10 px-5 ">
        <h2 className="text-3xl font-bold text-center ">Success Stories</h2>

        <Testimonials stories_user={stories} />
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🚀 Ready to start your career transformation?
        </h2>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-medium hover:bg-indigo-100 transition">
            Join Now
          </button>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-300 transition">
            Schedule a Free Call
          </button>
        </div>
      </section>
    </main>
  );
}

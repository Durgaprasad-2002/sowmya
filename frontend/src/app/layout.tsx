import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "dp/components/Navbar";
import Footer from "dp/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Sowmya Consultancy Services – Where Talent Meets Dedication",
  description:
    "Empowering students and professionals with interview-focused training, real-world internships, resume support, and placement opportunities. Your career – our responsibility.",
  keywords: [
    "Sowmya Consultancy",
    "Interview training",
    "Placement support",
    "MNC internships",
    "Job-ready training",
    "Mock interviews",
    "Resume building",
    "Career mentoring",
    "Python training",
    "Java training",
    "SQL Linux DBMS",
    "Capstone projects",
    "Career transformation",
  ],
  openGraph: {
    title: "Sowmya Consultancy Services – Where Talent Meets Dedication",
    description:
      "Training and placement consultancy offering tech upskilling, mock interviews, resume tailoring, and real-world internships to help you get hired.",
    // images: [
    //   {
    //     url: "",
    //     alt: "Sowmya Consultancy Logo",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased flex flex-col items-center`}
      >
        <Navbar />
        <div className="max-w-[1440px] w-full">
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>

        <Footer />
      </body>
    </html>
  );
}

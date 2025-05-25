import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "dp/components/Navbar";
import Footer from "dp/components/Footer";

const inter = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
  openGraph: {
    title: "",
    description: "",
    images: [
      {
        url: "/assests/logos/IBlogo_light.png",
        alt: "",
        width: 1200,
        height: 630,
      },
    ],
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
        <div className="max-w-[1440px] w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

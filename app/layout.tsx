import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamseer M C | Software Development Engineer",
  description:
    "Software Development Engineer with 4+ years of experience building scalable full-stack and backend applications using React, Node.js, TypeScript, and MongoDB. Experienced in microservices, real-time systems, Docker, Kubernetes, AWS, and Azure.",
  keywords: [
    "Jamseer M C",
    "Software Development Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "MERN",
  ],
  authors: [{ name: "Jamseer M C" }],
  openGraph: {
    title: "Jamseer M C | Software Development Engineer",
    description:
      "4+ years building scalable full-stack and backend systems with React, Node.js, TypeScript, and cloud infrastructure.",
    type: "website",
    images: ["/profile.png"],
  },
  twitter: {
    card: "summary",
    title: "Jamseer M C | Software Development Engineer",
    description:
      "4+ years building scalable full-stack and backend systems.",
    images: ["/profile.png"],
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
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

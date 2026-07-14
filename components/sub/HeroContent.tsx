"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Availability } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial={false}
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-5 sm:px-10 md:px-20 mt-28 md:mt-40 w-full z-[20] gap-8 md:gap-0"
    >
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center md:text-start items-center md:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px]">
            Software Development Engineer
          </h1>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(0.35)}
          href="#availability"
          className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-[#b49bff] border border-[#7042f861] bg-[#0300145e] px-3 py-1.5 rounded-full hover:border-[#b49bff] hover:text-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {Availability.badge}
        </motion.a>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              scalable{" "}
            </span>
            full-stack systems
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
        >
          Software Development Engineer with 4+ years of experience building
          scalable full-stack and backend applications using React.js, Angular,
          Node.js, TypeScript, Express.js, and MongoDB. Hands-on with Docker,
          Kubernetes, AWS, Azure, Redis, and distributed systems.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <a
            href="#experience"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg min-w-[160px]"
          >
            View Experience
          </a>
          <a
            href="/Jamseer_MC_Resume.pdf"
            download="Jamseer_MC_Resume.pdf"
            className="py-2 px-4 border border-[#7042f88b] text-center text-gray-200 hover:text-white hover:border-[#b49bff] transition-colors cursor-pointer rounded-lg min-w-[160px]"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Jamseer M C technology stack"
          height={650}
          width={650}
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px] h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

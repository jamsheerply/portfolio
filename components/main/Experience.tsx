"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { Experience_data } from "@/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col relative items-center justify-center w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-[20] text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-8 md:mb-12"
      >
        My Work
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Experience
        </span>
      </motion.div>

      <div className="relative z-[20] flex flex-col gap-4 sm:gap-6 w-full max-w-3xl px-0 sm:px-4 md:px-10">
        {Experience_data.map((exp, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.3 + index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#7042f88b] p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-[#0300145e]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {exp.role}
              </h2>
              <span className="text-xs sm:text-sm text-[#b49bff] font-medium sm:whitespace-nowrap">
                {exp.duration}
              </span>
            </div>
            <p className="text-[#b49bff] text-xs sm:text-sm font-medium relative z-[30]">
              {exp.companies.map((company) => (
                <span key={company.name}>
                  {company.prefix}
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {company.name}
                  </a>
                  {company.suffix}
                </span>
              ))}
            </p>
            <p className="text-gray-500 text-xs mb-3 sm:mb-4">{exp.location}</p>
            <ul className="flex flex-col gap-2">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 text-xs sm:text-sm leading-relaxed pl-3 border-l border-[#7042f861]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="relative z-[20] mt-8 md:mt-10 px-4">
        <div className="cursive text-base sm:text-[20px] font-medium text-center text-gray-300">
          4+ years building scalable full-stack systems
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-30"
          src="/encryption.webm"
        />
      </div>
    </section>
  );
};

export default Experience;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { Education_data } from "@/constants";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col relative items-center justify-center w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-[20] text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-8 md:mb-12"
      >
        Education
      </motion.div>

      <div className="relative z-[20] flex flex-col gap-4 w-full max-w-3xl px-0 sm:px-4 md:px-10">
        {Education_data.map((edu, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#7042f88b] p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-[#0300145e]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {edu.degree}
              </h2>
              <span className="text-xs sm:text-sm text-[#b49bff] font-medium sm:whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
            <p className="text-[#b49bff] text-xs sm:text-sm font-medium">
              {edu.school}
            </p>
            <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;

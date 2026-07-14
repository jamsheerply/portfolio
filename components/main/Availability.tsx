"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { Availability as AvailabilityData, Languages_data } from "@/constants";

const Availability = () => {
  return (
    <section
      id="availability"
      className="flex flex-col relative items-center justify-center w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-[20] text-2xl sm:text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-8 md:mb-12"
      >
        Availability & Languages
      </motion.div>

      <div className="relative z-[20] flex flex-col gap-6 w-full max-w-3xl px-0 sm:px-4 md:px-10">
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#7042f88b] p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-[#0300145e]"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Open to opportunities
          </h2>
          <div className="flex flex-col gap-3 text-sm sm:text-base">
            <p className="text-gray-300">
              <span className="text-[#b49bff] font-medium">Open to: </span>
              {AvailabilityData.openTo.join(" · ")}
            </p>
            <p className="text-gray-300">
              <span className="text-[#b49bff] font-medium">Location: </span>
              {AvailabilityData.locations.join(" · ")}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-[#7042f88b] p-4 sm:p-6 rounded-2xl backdrop-blur-sm bg-[#0300145e]"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Languages
          </h2>
          <ul className="flex flex-col gap-2">
            {Languages_data.map((item) => (
              <li
                key={item.language}
                className="flex flex-row items-baseline justify-between gap-4 text-sm sm:text-base text-gray-300"
              >
                <span>{item.language}</span>
                <span className="text-[#b49bff] text-xs sm:text-sm">
                  {item.level}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Availability;

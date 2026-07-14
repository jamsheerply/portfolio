"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[11px] sm:text-[13px]">
          Full-stack · Backend · Cloud
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-[30px] text-white font-medium mt-[10px] text-center mb-[10px] md:mb-[15px]"
      >
        Skills from my toolkit
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-[10px] text-center"
      >
        Technologies I use in production
      </motion.div>
    </div>
  );
};

export default SkillText;

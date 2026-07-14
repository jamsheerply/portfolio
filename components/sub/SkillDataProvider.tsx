"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skillName,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.15;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
      title={skillName}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={skillName}
        className="w-10 h-10 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] object-contain"
        unoptimized={src.endsWith(".svg")}
      />
    </motion.div>
  );
};

export default SkillDataProvider;

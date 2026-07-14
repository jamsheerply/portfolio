import {
  Backend_skill,
  DevOps_skill,
  Frontend_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 sm:pb-60 md:pb-80 py-12 sm:py-16 md:py-20 px-3 sm:px-6"
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 items-center max-w-5xl relative z-[10]">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={`fe-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 items-center max-w-5xl relative z-[10]">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={`be-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-5 items-center max-w-5xl relative z-[10]">
        {DevOps_skill.map((image, index) => (
          <SkillDataProvider
            key={`ops-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            skillName={image.skill_name}
          />
        ))}
      </div>

      <div className="w-full h-full absolute pointer-events-none" aria-hidden>
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

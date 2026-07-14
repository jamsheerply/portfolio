import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col h-full w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-200px] sm:top-[-280px] md:top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiLeetcode } from "react-icons/si";
import { Socials } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <RxGithubLogo />,
  LinkedIn: <RxLinkedinLogo />,
  LeetCode: <SiLeetcode />,
};

const aboutLinks = [
  { href: "/#about-me", label: "About me" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#availability", label: "Availability" },
];

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-[15px] relative z-[30]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-start justify-around flex-wrap gap-8 sm:gap-4">
          <div className="min-w-[160px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Connect</div>
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center my-[12px] cursor-pointer hover:text-[#b49bff] transition-colors"
              >
                {iconMap[social.name]}
                <span className="text-[15px] ml-[6px]">{social.name}</span>
              </a>
            ))}
          </div>

          <div className="min-w-[160px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            {aboutLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-row items-center my-[12px] cursor-pointer hover:text-[#b49bff] transition-colors"
              >
                <span className="text-[15px] ml-[6px]">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="min-w-[160px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <a
              href="mailto:jamsheerpayyoli@gmail.com"
              className="flex flex-row items-center my-[12px] cursor-pointer text-center break-all px-2 hover:text-[#b49bff] transition-colors"
            >
              <span className="text-[13px] sm:text-[15px] ml-[6px]">
                jamsheerpayyoli@gmail.com
              </span>
            </a>
            <a
              href="tel:+919020432432"
              className="flex flex-row items-center my-[12px] cursor-pointer hover:text-[#b49bff] transition-colors"
            >
              <span className="text-[15px] ml-[6px]">+91 9020432432</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] mt-4 text-[14px] sm:text-[15px] text-center">
          &copy; Jamseer M C. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

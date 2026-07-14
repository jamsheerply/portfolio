"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/#about-me", label: "About me" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#availability", label: "Availability" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (!showPhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPhoto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPhoto]);

  return (
    <>
      <nav
        className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10"
        aria-label="Primary"
      >
        <div className="w-full h-[65px] flex flex-row items-center justify-between m-auto">
          <div className="h-auto w-auto flex flex-row items-center shrink-0 gap-2 sm:gap-3 relative z-[110]">
            <button
              type="button"
              aria-label={showPhoto ? "Close profile photo" : "View profile photo"}
              className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-[#7042f861] shrink-0 cursor-pointer"
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setShowPhoto(true);
                }
              }}
              onMouseLeave={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setShowPhoto(false);
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                setShowPhoto((v) => !v);
              }}
            >
              <Image
                src="/profile.png"
                alt="Jamseer M C"
                fill
                sizes="48px"
                className="object-cover object-[center_15%]"
                priority
              />
            </button>
            <a
              href="/#about-me"
              className="font-bold text-gray-300 text-sm md:text-base"
            >
              JAMSEER M C
            </a>
          </div>

          <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-10">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[14px] lg:px-[18px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="cursor-pointer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden sm:flex flex-row gap-3 md:gap-5 items-center shrink-0">
            {Socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                className="opacity-90 hover:opacity-100 transition-opacity"
                title={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-gray-200 text-2xl p-1"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4 border-t border-[#7042f861] pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 text-center py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-row gap-6 items-center justify-center pt-2 sm:hidden">
              {Socials.map((social) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                  title={social.name}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="object-contain"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Center full photo — hover on desktop, tap on mobile */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-200 ${
          showPhoto
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showPhoto}
        onClick={() => setShowPhoto(false)}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div
          className={`relative z-10 w-[85vw] max-w-[420px] rounded-2xl overflow-hidden border border-[#7042f861] shadow-2xl shadow-[#2A0E61]/80 transition-transform duration-200 ${
            showPhoto ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src="/profile.png"
            alt="Jamseer M C"
            width={840}
            height={1050}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

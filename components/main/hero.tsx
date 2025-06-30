"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

// This dynamic import is correct.
const HeroContent = dynamic(
  () => import("../sub/hero-content").then((mod) => mod.HeroContent),
  {
    ssr: false,
  }
);

// A loading spinner for the Suspense fallback
const LoadingSpinner = () => (
  <div className="w-full h-full flex justify-center items-center">
    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white"></div>
  </div>
);

// Your personalized HeroText component - I've kept your changes.
const HeroText = () => (
  <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[13px]">
        Fullstack Developer Portfolio
      </h1>
    </motion.div>

    <motion.div
      variants={slideInFromLeft(0.5)}
      className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
    >
      <span>
        Hi, I&apos;m
        <div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Satya - Dev{" "}
          </span>
        </div>
      </span>
    </motion.div>

    <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 my-5 max-w-[600px] tracking-wide"
    >
      I have experience in building AI-driven systems, automations and
      battle-tested software applications with elegance and speed.
    </motion.p>
    <motion.a
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
    >
      Learn More!
    </motion.a>
  </div>
);

// The main Hero component with corrected layout for the video
export const Hero = () => {
  return (
    // 1. The main section is now a relative container with a full screen height.
    <section className="relative flex flex-col h-screen w-full" id="about-me">
      {/* 2. The video is positioned absolutely to fill the entire section. */}
      <video
        autoPlay
        muted
        loop
        // Correct classes to make it a true background
        className="rotate-180 absolute top-[-420px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* 3. This container holds all your content and layers it ON TOP of the video. */}
      <div className="relative flex items-center justify-center w-full h-full z-[20]">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-10">
            <div className="w-full lg:w-1/2">
                <HeroText />
            </div>
            <div className="w-full lg:w-1/2 h-[650px] mt-10 lg:mt-0">
                <Suspense fallback={<LoadingSpinner />}>
                    <HeroContent />
                </Suspense>
            </div>
        </div>
      </div>
    </section>
  );
};

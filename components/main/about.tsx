"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="about"
      className="flex flex-col items-center justify-center gap-3 py-24" // Adjusted padding and gap
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        About Me
      </h1>
      <div className="flex flex-row max-md:flex-col items-stretch justify-center gap-10 px-10">
        {/* Left Side: Image with Neon Border */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="relative w-[300px] h-[600px] md:w-[350px] md:h-[750px] lg:w-[400px] lg:h-[800px]" // Increased height
        >
          <div className="w-full h-full relative p-[2px]">
            <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-spin-slow" />
            <div className="h-full w-full relative rounded-2xl bg-gray-900/80 p-2">
              <Image
                src="/satyadev.jpg"
                alt="Satya Dev"
                layout="fill"
                objectFit="contain" // Changed from 'cover' to 'contain'
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Bio and Hobbies */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col justify-center gap-6 text-lg text-gray-300 max-w-lg" // Centered text vertically
        >
          <p>
            Hey there 👋 I’m Satya Dev, an 18-year-old computer science student
            who thinks in code and dreams in algorithms. I’m obsessed with AI,
            machine learning, and building things that automate the boring
            stuff so humans can do better things — like chill or innovate.
          </p>
          <p>
            I’m not here to follow the traditional path — I believe in smart
            work over hard grind, and I’m constantly exploring how to turn
            minimal effort into maximum results using tech. Whether it’s data
            science, automation, or neural networks, I’m always learning,
            experimenting, and building for impact.
          </p>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              🎯 Hobbies & Interests
            </h3>
            <ul className="list-none space-y-3">
              <li>
                🎮 <span className="font-semibold">Gaming</span> — Always up for
                a clutch win. It sharpens my reflexes and fuels my competitive
                spirit.
              </li>
              <li>
                🧪 <span className="font-semibold">Exploring New Tech</span> —
                Curiosity is my second CPU.
              </li>
              <li>
                🏓 <span className="font-semibold">Table Tennis</span> —
                Fast-paced and strategic. My offline reaction-time training
                ground.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

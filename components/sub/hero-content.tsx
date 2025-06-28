"use client";

import Spline from '@splinetool/react-spline/next';
import { SparklesIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";
import { motion } from 'framer-motion';

import {
  // slideInFromLeft,
  // slideInFromRight,
  // slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-3xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          Hi, I’m{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold">
 Satya – Dev
          </span>
  I build AI-driven systems, automations, and develop battle-tested websites and applications.

        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in
          Artificial Intelligence, Automation, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

 <motion.div
 variants={slideInFromRight(0.8)}
 className="w-full h-full flex justify-center items-center relative" // Added relative positioning for the container
 >
 {/* Add the Spline component here */}
 <Spline scene="https://prod.spline.design/8Y2XVlma9kucPOyu/scene.splinecode" />
 {/* Add the text to overlap the watermark */}
 <div
 style={{
          transition: 'box-shadow 0.3s ease-in-out',
          position: 'absolute',
 bottom: '4%', // Adjusted for larger size and position and responsiveness
 right: '3%',  // Adjusted for larger size and position and responsiveness
          backgroundColor: '#333', // Dark background for the bubble
          opacity: 1, // Fully opaque background
          color: '#fff', // White text color
 padding: '24px 36px', // Increased padding for ~3x size
          borderRadius: '20px', // Rounded corners for the bubble
 fontSize: '22px', // Adjusted font size
 zIndex: 100, // Ensure text is well above the Spline scene
          whiteSpace: 'nowrap', // Prevent text from wrapping
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Initial subtle shadow
 }}
        onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 0 20px #ff00ff, 0 0 30px #8a2be2, 0 0 40px #00ffff'; // Neon glow on hover
        }}
        onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)'; // Restore initial shadow on mouse leave
        }}
      >
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold ">
 Hi there !
        </span>

 </div>
      </motion.div>
    </motion.div>
  );
};

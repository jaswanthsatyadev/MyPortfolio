"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next"; // Added Spline import

// Your personalized links
const myLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jaswanth-satya-dev/" },
  { name: "GitHub", url: "https://github.com/jaswanthsatyadev" },
];

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    // Added more top margin (mt-64) to create space from the projects section
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 md:p-8 relative mt-64">
      {/* Container for the UFO Spline scene */}
      <div className="w-full absolute -top-[450px] left-0 z-10 h-[800px]">
        {/* We now render the Spline component directly inside Suspense */}
        <React.Suspense fallback={<div>Loading 3D Model...</div>}>
          <Spline scene="https://prod.spline.design/w-6vM6wIAfHOZuLN/scene.splinecode" />
        </React.Suspense>
      </div>

      {/* Container for all the text content, layered on top of the UFO */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap">
          
          {/* Personal Info Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Satya Dev
            </h3>
            <p className="text-sm text-gray-300" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}>
              Hyderabad, India
            </p>
          </div>

          {/* Social Links Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Connect with Me
            </h3>
            {myLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm my-1 text-gray-300 hover:brightness-125 hover:text-white transition"
                style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ textShadow: '0 0 10px rgba(192, 77, 246, 0.5)' }}>
              Support My Work
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sm my-1 text-gray-300 hover:brightness-125 hover:text-white transition cursor-pointer"
              style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}
            >
              Buy me a coffee (UPI)
            </button>
          </div>
        </div>

        <div className="mt-16 mb-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Satya Dev. All rights reserved.
        </div>
      </div>

      {/* UPI QR Code Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#030014] p-8 rounded-lg shadow-2xl border border-purple-800 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4 text-white">
              Scan to Pay with UPI
            </h2>
            <Image
              src="/upiqr.jpg"
              alt="UPI QR Code"
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

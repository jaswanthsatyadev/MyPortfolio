"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tilt } from "react-tilt"; // Import the Tilt component

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const ProjectCard = ({ src, title, description, link, tags }: ProjectCardProps) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Configuration options for the tilt effect
  const tiltOptions = {
    max: 20,
    scale: 1.03,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full h-full animate-float"
    >
      {/* The Tilt component wraps everything to provide the 3D effect */}
      <Tilt options={tiltOptions} className="w-full h-full">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="neon-card block w-full h-full"
        >
          <div
            className="w-full h-full bg-[#1a1a2e] p-1 rounded-[10px]"
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-t-lg object-cover"
            />

            <div className="relative p-6">
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              <p className="mt-2 text-gray-300 text-sm">{description}</p>
              <div className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

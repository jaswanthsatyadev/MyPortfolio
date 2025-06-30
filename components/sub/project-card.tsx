"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
    >
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <motion.div
          whileHover={{
            y: -10,
            boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
          }}
          transition={{ duration: 0.3 }}
          className="w-full h-full rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e] overflow-hidden"
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            className="w-full relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </motion.div>

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
        </motion.div>
      </Link>
    </motion.div>
  );
};

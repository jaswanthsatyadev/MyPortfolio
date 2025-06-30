"use client";

import React from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

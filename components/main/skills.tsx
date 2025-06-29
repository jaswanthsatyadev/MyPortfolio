"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { ALL_SKILLS } from "@/constants";

type Skill = typeof ALL_SKILLS[number];

const SkillRow = ({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: "left" | "right";
}) => {
  const variants = {
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["0%", "100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 600,
          ease: "linear",
        },
      },
    },
  };

  // 🔁 Create reversed skill set only if direction is right
  const baseSkills = direction === "right" ? [...skills].reverse() : skills;
  const repeatedSkills = Array(10).fill(baseSkills).flat();

  return (
    <motion.div
      className="flex flex-row gap-5 items-center"
      variants={variants}
      animate="animate"
      style={{ width: "1000%" }}
    >
      {repeatedSkills.map((skill, i) => (
        <SkillDataProvider
          key={`${skill.skill_name}-${i}`}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={i}
        />
      ))}
    </motion.div>
  );
};

export const Skills = () => {
  const midpoint = Math.ceil(ALL_SKILLS.length / 2);
  const firstHalf = ALL_SKILLS.slice(0, midpoint);
  const secondHalf = ALL_SKILLS.slice(midpoint);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col gap-5 mt-4 w-full overflow-hidden">
        <SkillRow skills={firstHalf} direction="left" />
        <SkillRow skills={secondHalf} direction="left" />
      </div>

      {/* BG VIDEO */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

"use client";

import { TypeAnimation } from "react-type-animation";

export const Typewriter = () => {
  const fullText = "I have experience in building AI-driven systems, automations and battle-tested software applications with elegance and speed.";

  return (
    <div className="relative text-xl lg:text-2xl my-5 max-w-[600px] tracking-wide min-h-[120px]">
        <TypeAnimation
          sequence={[
            fullText,
            10000, 
          ]}
          wrapper="span"
          speed={60}
          cursor={true}
          // **THE FIX:** The 'className' is now applied to the wrapper, which allows the CSS to target the cursor.
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 custom-type-animation-cursor"
          repeat={10} 
        />
    </div>
  );
};

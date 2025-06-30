"use client";

import { TypeAnimation } from "react-type-animation";

export const Typewriter = () => {
  return (
    // **THE FIX:** Added a minimum height (h-28) to the container.
    // This prevents the layout from shifting as the text is typed out.
    <div className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 my-5 max-w-[600px] tracking-wide h-28">
      <TypeAnimation
        sequence={[
          // The animation now types out your original paragraph once.
          "I have experience in building AI-driven systems, automations and battle-tested software applications with elegance.",
          5000, // Keep the text on screen after typing
        ]}
        wrapper="span"
        speed={55} // Slightly adjusted speed for a more natural feel
        cursor={true}
        // Removed the 'repeat' prop to prevent looping.
      />
    </div>
  );
};

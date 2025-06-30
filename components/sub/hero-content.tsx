"use client";

import Spline from '@splinetool/react-spline/next';

export const HeroContent = ({ onLoad }: { onLoad?: () => void }) => {
  return (
    // **THE FIX:** The outer container acts as a frame to crop the content.
    <div className="w-full h-full relative overflow-hidden">
      {/* The Spline component is now absolutely positioned inside the frame */}
      <div className="absolute top-0 left-0 w-full h-[110%]">
        <Spline
          scene="https://prod.spline.design/bBhlEoaOEcVn6tGT/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
}

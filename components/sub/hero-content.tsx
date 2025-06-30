"use client";

import Spline from '@splinetool/react-spline/next';

// The component now accepts an `onLoad` function as a prop
export const HeroContent = ({ onLoad }: { onLoad?: () => void }) => {
  return (
    <Spline
      scene="https://prod.spline.design/bBhlEoaOEcVn6tGT/scene.splinecode"
      // The Spline component's own onLoad event will now call the function we pass in
      onLoad={onLoad}
    />
  );
}

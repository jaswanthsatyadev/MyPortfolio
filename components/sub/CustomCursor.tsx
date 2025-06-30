"use client";

import React, { useEffect, useRef } from 'react';

// The number of circles in the trail, matching the CodePen
const CIRCLE_COUNT = 22;

const colors = [
  "#ccf9ff", // Light Ice Blue
  "#b3f3ff",
  "#99edff",
  "#80e7ff",
  "#66e1ff",
  "#4ddcff",
  "#33d6ff", // Mid Aqua
  "#1ad0ff",
  "#00caff",
  "#00b5e6",
  "#00a0cc",
  "#008bb3",
  "#007799",
  "#006280",
  "#004d66",
  "#00394d",
  "#002433",
  "#00111a",
  "#001a26",
  "#002a40",
  "#003a59",
  "#004b73"  // Deep Ocean Blue
];

export const CustomCursor = () => {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);

  // This ref will hold the individual x/y positions of each circle,
  // just like the `circle.x` and `circle.y` properties in the original CodePen.
  const circlePositions = useRef(
    Array(CIRCLE_COUNT).fill(null).map(() => ({ x: 0, y: 0 }))
  ).current;

  useEffect(() => {
    // Disable on mobile devices for performance
    if (window.innerWidth < 768) {
      isMobile.current = true;
      return;
    }

    const circles = circlesRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      if (isMobile.current) return;

      let x = coords.current.x;
      let y = coords.current.y;

      // This is the direct translation of the CodePen's animation logic
      circles.forEach((circle, index) => {
        if (circle) {
          const pos = circlePositions[index];

          pos.x = x;
          pos.y = y;

          const nextCirclePos = circlePositions[index + 1] || circlePositions[0];
          
          x += (nextCirclePos.x - pos.x) * 0.3;
          y += (nextCirclePos.y - pos.y) * 0.3;

          circle.style.left = `${pos.x - 12}px`;
          circle.style.top = `${pos.y - 12}px`;
          circle.style.transform = `scale(${(CIRCLE_COUNT - index) / CIRCLE_COUNT})`;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [circlePositions]);

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => { circlesRef.current[index] = el; }}
          style={{ 
            backgroundColor: color,
            position: 'fixed',
            height: '24px',
            width: '24px',
            borderRadius: '50%',
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out, background-color 0.1s ease-out',
            zIndex: 9999,
            boxShadow: '0 0 12px currentColor, 0 0 24px currentColor',
            mixBlendMode: 'screen',
            // Start the circles off-screen so they don't flash at (0,0) on load
            left: '-24px',
            top: '-24px'
          }}
        />
      ))}
    </>
  );
};

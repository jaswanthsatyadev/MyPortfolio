

import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Allow time for fade-out animation before calling onLoaded
      setTimeout(() => {
        onLoaded();
      }, 1000); // Assuming 1s fade-out duration
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 bg-black z-[999] flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Spline
        scene="https://prod.spline.design/qcWOD5ERI5M9kZZg/scene.splinecode"
      />
    </div>
  );
}
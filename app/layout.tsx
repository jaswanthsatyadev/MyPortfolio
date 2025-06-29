"use client"

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};





import { useEffect, useState } from 'react';
import LoadingScreen from "@/components/main/loading-screen";
import { motion } from "framer-motion";

export default function RootLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate lazy loading of the entire layout
    // In a real application, this might involve fetching data or loading other resources
    const loadContent = async () => {
      // For now, we just wait for the loading screen to fade out
      // In a real app, you might have actual async operations here
    };
    loadContent();
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        {loading && <LoadingScreen onLoaded={handleLoadingComplete} />}
        <StarsCanvas />
        <Navbar />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.9 : 1 }}
          transition={{ duration: 0.5, delay: loading ? 0 : 0.5 }}
        >
          {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}

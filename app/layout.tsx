import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/main/star-background";
import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { CustomCursor } from "@/components/sub/CustomCursor"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaswanth Satya Dev Portfolio",
  description: "A portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <CustomCursor /> {/* Add the cursor component here */}
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

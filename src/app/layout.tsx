import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "MKH Social Media",
    template:"%s | MKH"
  },
  description: "welcome to mkh platform were you will enjoy and live the moments togther",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>

    <html lang="en">
    <body className={inter.className}>
      
      <div className="w-full bg-[#121212] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
      </div>
      <div className=" bg-[#171717] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {children}
      </div>

    </body>
  </html>
  </ClerkProvider>
  );
}
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SparklesCore } from "@/components/animation/sparkles";
import Navbar from "@/components/custom/stellar-dev-navbar";
import Footer from "@/components/custom/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="relative py-16 w-full min-h-screen text-white bg-black flex flex-col items-center justify-center overflow-hidden">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full min-h-screen absolute inset-0"
            particleColor="#FFFFFF"
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

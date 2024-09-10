"use client";

import React from "react";
import { motion } from "framer-motion";
import IntroSection from "./_components/intro";
import TeamSection from "./_components/team";

const AboutPage = () => {
  return (
    <div className="container mx-auto z-20 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
      </motion.div>

      <div className="space-y-12">
        <IntroSection />
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutPage;

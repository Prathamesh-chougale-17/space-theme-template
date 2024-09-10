"use client";
import { Cover } from "@/components/animation/cover";
import Cosmic from "@/components/svg/planets";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import React, { useEffect, useCallback } from "react";

const Home = () => {
  const controls = useAnimation();
  const yMotion = useMotionValue(0);
  const xMotion = useMotionValue(0);
  const handleMouseMove = useCallback(
    (event: {
      currentTarget: { getBoundingClientRect: () => DOMRect };
      clientX: number;
      clientY: number;
    }) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      xMotion.set(x);
      yMotion.set(y);
    },
    [xMotion, yMotion]
  );

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [controls]);
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
  return (
    <div
      className="w-full overflow-hidden relative flex flex-col lg:flex-row"
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start p-8 lg:pl-16 text-white">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <Cover>Welcome to the Cosmic</Cover>
        </motion.h1>
        <motion.div
          className="text-lg md:text-xl mb-8 text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <Cover>Explore the infinite possibilities of web development</Cover>
        </motion.div>
        <motion.button
          className="md:px-6 md:py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Cover>Start Your Journey</Cover>
        </motion.button>
      </div>
      <Cosmic />
    </div>
  );
};

export default Home;

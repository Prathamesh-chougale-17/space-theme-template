"use client";
import React, { useEffect, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const CosmicHomePage = () => {
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

  const planetVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

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
      className="w-full h-screen bg-black overflow-hidden relative flex"
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-16 text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to the Cosmos
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Explore the infinite possibilities of web development
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </div>

      {/* Planet SVG */}
      <div className="w-1/2 flex justify-center items-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            variants={planetVariants}
            initial="hidden"
            animate="visible"
          >
            <circle cx="500" cy="500" r="150" fill="#60A5FA" />
            <ellipse
              cx="500"
              cy="500"
              rx="150"
              ry="30"
              fill="#1E3A8A"
              opacity="0.3"
            />
            <path
              d="M350 500 Q 500 400, 650 500 Q 500 600, 350 500"
              fill="#2563EB"
              opacity="0.5"
            />
          </motion.g>

          {/* Orbiting moons */}
          <motion.g
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <circle cx="800" cy="500" r="30" fill="#F472B6" />
            <circle cx="500" cy="200" r="20" fill="#34D399" />
            <circle cx="300" cy="700" r="25" fill="#FBBF24" />
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default CosmicHomePage;

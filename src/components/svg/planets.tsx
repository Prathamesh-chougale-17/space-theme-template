"use client";
import React from "react";
import { motion } from "framer-motion";

const Cosmic = () => {
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

  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
      <svg
        className="w-full h-full max-w-md lg:max-w-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g variants={planetVariants} initial="hidden" animate="visible">
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
  );
};

export default Cosmic;

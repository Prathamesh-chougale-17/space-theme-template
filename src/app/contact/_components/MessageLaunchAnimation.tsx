"use client";

import React from "react";
import { motion } from "framer-motion";

const MessageLaunchAnimation: React.FC<{
  x: number;
  y: number;
  isVisible: boolean;
}> = ({ x, y, isVisible }) => {
  return (
    <motion.div
      className="absolute w-4 h-4 bg-yellow-300 rounded-full shadow-lg"
      initial={{ x, y, scale: 0, opacity: 0 }}
      animate={
        isVisible
          ? {
              x: [x, x + 100, x + 200],
              y: [y, y - 100, y - 200],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }
          : {}
      }
      transition={{ duration: 2, ease: "easeOut" }}
    />
  );
};

export default MessageLaunchAnimation;

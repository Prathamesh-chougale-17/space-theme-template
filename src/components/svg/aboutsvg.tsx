"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutPageAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  const handleMouseMove = useCallback(
    (event: {
      currentTarget: { getBoundingClientRect: () => DOMRect };
      clientX: number;
      clientY: number;
    }) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setCursorPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    []
  );

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className="w-full h-full relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.svg
        viewBox="0 0 800 600"
        initial="hidden"
        animate="visible"
        variants={svgVariants}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background elements */}
        <motion.circle
          cx="400"
          cy="300"
          r="250"
          fill="url(#gradient1)"
          opacity="0.1"
          variants={nodeVariants}
        />

        {/* Network of connections */}
        <motion.path
          d="M100,300 Q250,100 400,300 Q550,500 700,300"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          variants={pathVariants}
        />
        <motion.path
          d="M100,400 Q250,600 400,400 Q550,200 700,400"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          variants={pathVariants}
        />

        {/* Interactive nodes */}
        {[
          { cx: 100, cy: 300 },
          { cx: 400, cy: 300 },
          { cx: 700, cy: 300 },
          { cx: 100, cy: 400 },
          { cx: 400, cy: 400 },
          { cx: 700, cy: 400 },
        ].map((node, index) => (
          <motion.circle
            key={index}
            cx={node.cx}
            cy={node.cy}
            r="10"
            fill="#10B981"
            variants={nodeVariants}
            whileHover={{ scale: 1.5, fill: "#34D399" }}
          />
        ))}

        {/* Dynamic cursor effect */}
        <motion.circle
          cx={cursorPosition.x}
          cy={cursorPosition.y}
          r={isHovering ? "30" : "0"}
          fill="#60A5FA"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated text */}
        <motion.text
          x="400"
          y="550"
          textAnchor="middle"
          fill="#fff"
          fontSize="24"
          fontWeight="bold"
          variants={textVariants}
        >
          Innovate • Grow • Lead
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default AboutPageAnimation;

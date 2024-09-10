"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const IntroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Innovating Tomorrow
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We are a passionate team dedicated to creating innovative solutions
          that make a difference in people&#39;s lives. Our journey began with a
          simple idea and has grown into a mission to transform the way people
          interact with technology.
        </p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Our team combines cutting-edge technology with human-centered
                design to create products that are not just functional, but
                delightful to use. We believe in the power of innovation to
                solve complex problems and improve lives across the globe.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleExpand}
          className="flex items-center cursor-pointer space-x-2 text-blue-500 font-semibold"
        >
          {isExpanded ? "Read Less" : "Read More"}
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative w-full h-[300px] lg:h-[400px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="4"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M60,100 Q100,40 140,100 T220,100"
            fill="none"
            stroke="#10B981"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="20"
            fill="#3B82F6"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default IntroSection;

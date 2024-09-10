"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-bold text-white">StellarDev</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-x-4"
        >
          <Button variant="ghost" className="text-white hover:text-purple-300">
            About
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-300">
            Services
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-300">
            Contact
          </Button>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;

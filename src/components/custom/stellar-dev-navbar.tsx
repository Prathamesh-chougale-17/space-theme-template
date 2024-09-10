"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

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
        <div className="md:hidden bg-black text-white">
          <Sheet>
            <SheetTrigger asChild>
              <button className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={"M4 6h16M4 12h16m-7 6h7"}
                  ></path>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4 text-white">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                {routes.map((route) => (
                  <Link key={route.name} href={route.url}>
                    <Button
                      key={route.name}
                      variant="ghost"
                      className={`hover:text-purple-300 w-full text-left ${
                        pathname === route.url ? "bg-purple-800" : ""
                      }`}
                    >
                      {route.name}
                    </Button>
                  </Link>
                ))}
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-4"
        >
          {routes.map((route) => (
            <Link key={route.name} href={route.url}>
              <Button
                variant="ghost"
                className={`text-white hover:text-purple-300 ${
                  pathname === route.url ? "bg-purple-800" : ""
                }`}
              >
                {route.name}
              </Button>
            </Link>
          ))}
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;

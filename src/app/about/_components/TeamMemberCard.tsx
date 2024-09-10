"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Github, TwitterIcon } from "@/components/icons";
import { Linkedin, Mail } from "lucide-react";

const SocialIcon = ({
  platform,
  username,
}: {
  platform: "twitter" | "linkedin" | "github";
  username: string;
}) => {
  const icons = {
    twitter: TwitterIcon,
    linkedin: Linkedin,
    github: Github,
  };
  const Icon = icons[platform];
  return (
    <motion.a
      href={`https://${platform}.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-300 z-20 transition-colors"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={24} />
    </motion.a>
  );
};

const TeamMemberCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    social: Record<string, string>;
  };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    },
  };

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5 },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Only toggle if the click is directly on the card, not on a button or link
    if (e.target === e.currentTarget) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <motion.div
      className="relative"
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
    >
      <Card
        className="bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white overflow-hidden"
        onClick={handleCardClick} // Add click handler to the Card
      >
        <CardContent className="p-6 relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 100 C 20 50, 50 20, 100 0 S 180 20, 200 100 180 180, 100 200 20 180, 0 100"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.div className="mb-4 relative" variants={imageVariants}>
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-white"
              />
              <motion.div
                className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 90 }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Add email functionality here
                  console.log("Email icon clicked");
                }}
              >
                <Mail size={20} className="text-purple-600" />
              </motion.div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm mb-3 opacity-80">{member.role}</p>

            <motion.div
              className="flex space-x-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {Object.entries(member.social).map(([platform, username]) => (
                <SocialIcon
                  key={platform}
                  platform={platform as "twitter" | "linkedin" | "github"}
                  username={username}
                />
              ))}
            </motion.div>

            <motion.button
              className="bg-white text-purple-600 py-2 px-4 z-20 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </motion.button>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <p className="text-sm mb-3">{member.bio}</p>
                <h4 className="text-lg font-semibold mb-2">Skills:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {member.skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="text-xs bg-white bg-opacity-20 rounded-full px-3 py-1"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;

"use client";

import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/api/placeholder/400/400",
    bio: "Visionary leader with 15+ years in tech. Passionate about creating products that change lives.",
    skills: ["Strategic Planning", "Product Vision", "Team Leadership"],
    social: {
      twitter: "Prathamesh_7717",
      linkedin: "in/prathamesh-chougale",
      github: "Prathamesh-chougale-17",
    },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/api/placeholder/400/400",
    bio: "AI enthusiast and tech innovator. Bridging the gap between cutting-edge research and practical applications.",
    skills: ["Machine Learning", "System Architecture", "Agile Methodologies"],
    social: {
      twitter: "Prathamesh_7717",
      linkedin: "in/prathamesh-chougale",
      github: "Prathamesh-chougale-17",
    },
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "/api/placeholder/400/400",
    bio: "Full-stack wizard with a knack for solving complex problems. Always learning, always coding.",
    skills: ["React", "Node.js", "GraphQL", "AWS"],
    social: {
      twitter: "Prathamesh_7717",
      linkedin: "in/prathamesh-chougale",
      github: "Prathamesh-chougale-17",
    },
  },
  {
    name: "Sarah Brown",
    role: "UX Designer",
    image: "/api/placeholder/400/400",
    bio: "Crafting intuitive and beautiful user experiences. Believer in design-driven development.",
    skills: ["UI/UX Design", "Prototyping", "User Research"],
    social: {
      twitter: "Prathamesh_7717",
      linkedin: "in/prathamesh-chougale",
      github: "Prathamesh-chougale-17",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Meet Our Exceptional Team
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-16">
          Our diverse team of experts is passionate about innovation and
          committed to delivering cutting-edge solutions that drive your
          success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "CEO", image: "/john-doe.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/jane-smith.jpg" },
  { name: "Mike Johnson", role: "Designer", image: "/mike-johnson.jpg" },
  { name: "Sarah Brown", role: "Developer", image: "/sarah-brown.jpg" },
];

const OurTeam = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg shadow-md overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;

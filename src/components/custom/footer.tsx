import React from "react";
import { LinkPreview } from "../animation/link-preview";
import { TwitterIcon, InstagramIcon, Github } from "../icons";
import Link from "next/link";

const socialLinks = [
  {
    icon: TwitterIcon,
    url: "https://x.com/Prathamesh_7717",
  },
  {
    icon: InstagramIcon,
    url: "https://www.instagram.com/prathamesh_chougale_17",
  },
  {
    icon: Github,
    url: "https://github.com/Prathamesh-chougale-17",
  },
];
const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0">
      <div className="container mx-auto">
        <div className="border-t py-4 px-6 border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2024{" "}
            <LinkPreview
              url="https://prathameshchougale.me"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Prathamesh Chougale
            </LinkPreview>
            . All rights reserved.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const socials = [
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/feed/you",
    color: "#FF0000",
  },
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://x.com/KumarSande66389",
    color: "#ffffff",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sandeep-kumar-bharti-72a264320/",
    color: "#0A66C2",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/sandeep.goswami_18/?hl=en",
    color: "#E1306C",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/SandeepGoswami18",
    color: "#ffffff",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 py-16 flex flex-col items-center text-center space-y-6"
      >
        {/* 🔥 NAME */}
        <h1 className="font-mono text-green-400 text-2xl md:text-4xl">
          &gt; Sandeep_Kumar_Bharti()
        </h1>

        {/* 🔥 TAGLINE */}
        <p className="text-gray-400 text-sm font-mono">
          Building scalable solutions with code 💻
        </p>

        {/* 🔥 SOCIAL ICONS WITH BRAND COLORS */}
        <div className="flex flex-wrap justify-center gap-5 text-2xl">
          {socials.map(({ Icon, label, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="transition-all duration-300"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.filter = `drop-shadow(0 0 10px ${color})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.filter = "none";
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* 🔥 DIVIDER */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-green-400 to-yellow-400" />

        {/* 🔥 QUOTE */}
        <p className="text-gray-400 text-sm italic max-w-md">
          “First, solve the problem. Then, write the code.”
        </p>

        {/* 🔥 COPYRIGHT */}
        <p className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Sandeep Kumar Bharti | All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
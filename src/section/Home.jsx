import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticleBackground";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socials = [
  { Icon: FaXTwitter, href: "https://x.com/home", color: "#ffffff" },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/sandeep-kumar-bharti-72a264320/",
    color: "#0A66C2",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/SandeepGoswami18",
    color: "#ffffff",
  },
];

export default function Home() {
  const roles = useMemo(
    () => ["Web Developer", "DSA Problem Solver", "AI/ML Enthusiast"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 35 : 55);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    // Height ko min-h-screen kiya taaki content overflow na ho mobile par
    <section className="min-h-screen w-full relative bg-black overflow-hidden pt-20 md:pt-24 text-white flex items-center">
      
      <ParticlesBackground />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* MAIN CONTAINER: Added flex-col for mobile, items-center for centering */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT: Text align center for mobile, left for desktop */}
        <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <div className="text-green-400 font-mono text-base md:text-lg mb-3">
            &gt; {roles[index].substring(0, subIndex)}
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,255,100,0.6)]">
              Sandeep Kumar
            </span>
          </h1>

          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-md">
            I build scalable web applications and solve complex problems
            using DSA & AI.
          </p>

          {/* Buttons: Stacked on very small screens, row on others */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-green-400 text-black rounded-lg font-semibold hover:scale-105 transition shadow-lg shadow-green-400/20"
            >
              View Projects
            </a>

           <a
  href="/Googleresume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400/10 transition"
>
  Resume
</a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 text-2xl">
            {socials.map(({ Icon, href, color }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ color }} className="hover:scale-120 transition-transform">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT AVATAR: Mobile pe upar dikhega, size thoda kam kiya */}
        <motion.div
          className="order-1 lg:order-2"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="relative">
            {/* Outer Glows */}
            <div className="absolute inset-0 blur-3xl bg-green-400/20 rounded-full" />
            <div className="absolute -inset-2 border border-green-400/20 rounded-full animate-pulse" />

            <img
              src="/images/avator.png"
              alt="profile"
              // Image size handled for mobile (200px) and desktop (320px)
              className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full object-cover relative z-10 border-2 border-green-400/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
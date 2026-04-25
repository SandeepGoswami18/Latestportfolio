import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Web Development Intern",
    company: "CodeAlpha",
    duration: "Internship",
    description:
      "Worked on real-world projects, built responsive UI, and improved frontend skills using React and modern web technologies.",
  },
  {
    role: "DSA Problem Solving",
    company: "Self Practice",
    duration: "6 Months",
    description:
      "Solved problems on LeetCode, improved logic building, and mastered time complexity and patterns.",
  },
  {
    role: "Web Development Learning",
    company: "WSBTech",
    duration: "Training",
    description:
      "Learned full-stack fundamentals and built multiple projects with modern UI/UX practices.",
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const isAbove = idx % 2 === 0;
  const y = useTransform(scrollYProgress, [start, end], [isAbove ? 40 : -40, 0]);
  const x = useTransform(scrollYProgress, [start, end], [-30, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex-1 flex justify-center items-center">

        {/* DOT */}
        <motion.div
          className="z-10 w-6 h-6 rounded-full bg-green-400 shadow-[0_0_20px_rgba(0,255,100,0.6)]"
          style={{ scale, opacity }}
        />

        {/* SMALL LINE */}
        <motion.div
          className={`absolute ${isAbove ? "-top-8" : "-bottom-8"} w-[2px] bg-green-400/40`}
          style={{ height: 40, opacity }}
        />

        {/* CARD */}
        <motion.article
          className={`absolute ${
            isAbove ? "bottom-14" : "top-14"
          } bg-black/80 backdrop-blur border border-green-400/20 
          rounded-xl p-6 w-[260px] shadow-[0_0_25px_rgba(0,255,100,0.1)]`}
          style={{ opacity, y }}
        >
          <h3 className="text-green-400 font-mono text-sm">
            &gt; {exp.role}
          </h3>
          <p className="text-gray-400 text-xs mb-2">
            {exp.company} | {exp.duration}
          </p>
          <p className="text-gray-300 text-xs">{exp.description}</p>
        </motion.article>
      </div>
    );
  }

  // 📱 MOBILE
  return (
    <div className="relative flex items-start">
      
      {/* DOT */}
      <motion.div
        className="absolute -left-[14px] top-3 w-5 h-5 rounded-full bg-green-400"
        style={{ scale, opacity }}
      />

      {/* CARD */}
      <motion.article
        className="bg-black/80 border border-green-400/20 rounded-xl p-4 w-[85%] max-w-sm ml-8"
        style={{ opacity, x }}
      >
        <h3 className="text-green-400 font-mono text-sm">
          &gt; {exp.role}
        </h3>
        <p className="text-gray-400 text-xs mb-1">
          {exp.company} | {exp.duration}
        </p>
        <p className="text-gray-300 text-xs">{exp.description}</p>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const thresholds = experiences.map((_, i) => (i + 1) / experiences.length);

  const lineWidth = useTransform(scrollYProgress, (v) => `${v * 100}%`);
  const lineHeight = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[250px] h-[250px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px]" />
      </div>

      {/* ✅ AUTO HEIGHT FIX */}
      <div
        ref={ref}
        className="relative min-h-[140vh] md:min-h-[160vh]"
      >
        <div className="sticky top-0 h-screen flex flex-col">

          {/* TITLE */}
          <h2 className="text-center text-3xl md:text-5xl font-mono text-green-400 mt-10">
            &gt; Experience_Timeline()
          </h2>

          {/* 💻 DESKTOP */}
          <div className="hidden md:block mt-20 px-10">
            <div className="relative h-[4px] bg-green-400/10 rounded">
              <motion.div
                className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-green-400 to-yellow-400"
                style={{ width: lineWidth }}
              />
            </div>

            <div className="flex justify-between items-center mt-10 px-4">
              {experiences.map((exp, idx) => {
                const start = idx === 0 ? 0 : thresholds[idx - 1];
                const end = thresholds[idx];

                return (
                  <ExperienceItem
                    key={idx}
                    exp={exp}
                    idx={idx}
                    start={start}
                    end={end}
                    scrollYProgress={scrollYProgress}
                    layout="desktop"
                  />
                );
              })}
            </div>
          </div>

          {/* 📱 MOBILE */}
          <div className="md:hidden px-6 mt-10">
            <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-green-400/20">
              <motion.div
                className="absolute top-0 left-0 w-[3px] bg-green-400"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-16 ml-10 mt-10 pb-24">
              {experiences.map((exp, idx) => {
                const start = idx === 0 ? 0 : thresholds[idx - 1];
                const end = thresholds[idx];

                return (
                  <ExperienceItem
                    key={idx}
                    exp={exp}
                    idx={idx}
                    start={start}
                    end={end}
                    scrollYProgress={scrollYProgress}
                    layout="mobile"
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
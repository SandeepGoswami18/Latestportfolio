import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Civic Issue Reporting System",
      desc: "A platform to help rural communities report civic issues efficiently with a clean and accessible UI.",
      image: img1,
      github: "https://github.com/SandeepGoswami18",
    },
    {
      title: "DSA Learning Platform",
      desc: "A structured system to learn Data Structures & Algorithms with roadmap, problems, and guidance.",
      image: img2,
      github: "https://github.com/SandeepGoswami18",
    },
    {
      title: "Quiz Application",
      desc: "Interactive quiz app for testing DSA & web development knowledge with instant feedback.",
      image: img3,
      github: "https://github.com/SandeepGoswami18",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 text-white bg-black relative overflow-hidden"
    >
      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-yellow-500/10 blur-[140px]" />
      </div>

      {/* 🔥 HEADING */}
      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-mono text-green-400 mb-16">
        &gt; My_Projects()
      </h2>

      {/* 🔥 GRID */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-black/70 backdrop-blur-lg
              border border-green-400/20
              rounded-2xl overflow-hidden
              shadow-[0_0_20px_rgba(0,255,100,0.08)]
              hover:shadow-[0_0_30px_rgba(0,255,100,0.25)]
              transition-all duration-300
            "
          >
            {/* IMAGE */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 space-y-3">
              <h3 className="text-green-400 font-mono text-lg">
                &gt; {project.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {project.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => window.open(project.github, "_blank")}
                className="
                  w-full flex items-center justify-center gap-2
                  py-2.5 rounded-lg font-semibold
                  bg-gradient-to-r from-green-400 to-yellow-400
                  text-black
                  hover:scale-[1.03]
                  transition
                  shadow-[0_0_20px_rgba(0,255,100,0.3)]
                "
              >
                <FiGithub size={18} />
                View Code
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 EXPLORE BUTTON */}
      <div className="relative z-10 flex justify-center mt-20">
        <button
          onClick={() =>
            window.open("https://github.com/SandeepGoswami18", "_blank")
          }
          className="
            px-8 py-3 rounded-xl font-mono
            bg-gradient-to-r from-green-400 to-yellow-400
            text-black
            shadow-[0_0_25px_rgba(0,255,100,0.4)]
            hover:scale-105
            transition-all duration-300
          "
        >
          <FiGithub className="inline mr-2" />
          View_All_Projects()
        </button>
      </div>
    </section>
  );
}
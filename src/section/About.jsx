import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Experience", value: "6+ Months" },
    { label: "Speciality", value: "DSA Problem Solving" },
    { label: "Focus", value: "Algorithms & Patterns" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden pt-24"
    >
      {/* 🔥 GRID BACKGROUND (TECH FEEL) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-yellow-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 py-16 flex flex-col gap-12">
        
        {/* 🔥 MAIN CARD */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* PROFILE */}
          <motion.div
            className="
              relative w-[170px] h-[170px] md:w-[210px] md:h-[210px]
              rounded-2xl overflow-hidden
              border border-green-400/20
              shadow-[0_0_30px_rgba(0,255,100,0.15)]
              hover:shadow-[0_0_45px_rgba(0,255,100,0.3)]
              transition
            "
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/p.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">
            
            {/* NAME */}
            <h2 className="text-4xl md:text-5xl font-extrabold 
              bg-clip-text text-transparent 
              bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
              Sandeep Kumar Bharti
            </h2>

            {/* ROLE */}
            <p className="mt-2 text-green-400 font-mono">
              &gt; AI/ML Enthusiast | DSA Problem Solver
            </p>

            {/* DESC */}
            <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
              I build scalable web applications and solve complex problems using 
              Data Structures & Algorithms. Passionate about Artificial Intelligence 
              and continuously exploring modern technologies to create impactful solutions.
            </p>

            {/* 🔥 TERMINAL STYLE STATS */}
            <div className="mt-6 bg-black/60 border border-green-400/20 rounded-xl p-4 font-mono text-sm text-green-400">
              {stats.map((item, i) => (
                <p key={i}>
                  &gt; {item.label}: <span className="text-white">{item.value}</span>
                </p>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              <a
                href="#projects"
                className="
                  px-6 py-3 rounded-lg font-semibold
                  bg-gradient-to-r from-green-400 to-yellow-400
                  text-black
                  shadow-[0_0_20px_rgba(0,255,100,0.3)]
                  hover:scale-105 transition
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-3 rounded-lg border border-green-400/30
                  text-green-400 font-mono
                  hover:bg-green-400/10 transition
                "
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🔥 ABOUT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h3 className="text-2xl font-bold text-green-400 mb-3 font-mono">
            &gt; About Me_
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I enjoy turning ideas into efficient and scalable solutions. My journey 
            revolves around mastering DSA, building real-world projects, and diving 
            deeper into AI/ML concepts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
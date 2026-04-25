import { FaJava, FaReact } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { motion, useMotionValue } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <SiHtml5 color="#E34F26" />, name: "HTML" },
    { icon: <SiCss3 color="#1572B6" />, name: "CSS" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
    { icon: <FaJava color="#f89820" />, name: "Java" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <SiPython color="#3776AB" />, name: "Python" },
  ];

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current === null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-[60vh] w-full py-20 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden pt-24"
    >
      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 HEADING */}
      <motion.h2
        className="text-4xl sm:text-5xl font-mono text-green-400 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        &gt; Skills_Set()
      </motion.h2>

      {/* 🔥 SUBTEXT */}
      <p className="mt-2 mb-10 text-gray-400 font-mono text-sm">
        // Tech Stack & Tools
      </p>

      {/* 🔥 MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl"
          style={{ x }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
            >
              {/* ICON */}
              <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                {s.icon}
              </span>

              {/* TEXT */}
              <p className="text-sm text-gray-400 font-mono">
                {s.name}
              </p>
            </div>
          ))}
        </motion.div>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
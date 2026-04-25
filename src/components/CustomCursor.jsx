import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const baseX = e.clientX;
      const baseY = e.clientY;

      const newParticles = [];

      // 🔥 main particle
      newParticles.push({
        id: Date.now(),
        x: baseX,
        y: baseY,
        dx: (Math.random() - 0.5) * 20,
        dy: Math.random() * 25,
        type: "main",
      });

      // 🔥 small sparkle particles
      for (let i = 0; i < 2; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: baseX,
          y: baseY,
          dx: (Math.random() - 0.5) * 30,
          dy: Math.random() * 30,
          type: "small",
        });
      }

      setParticles((prev) => [...prev.slice(-25), ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.includes(p))
        );
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className={p.type === "main" ? "particle" : "particle-small"}
            style={{
              "--x": `${p.dx}px`,
              "--y": `${p.dy}px`,
            }}
          />
        </span>
      ))}
    </>
  );
}
import { useEffect, useState, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isHome, setIsHome] = useState(true);

  const lastScrollY = useRef(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // 🔥 CHECK IF USER IS IN HOME
  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = window.innerHeight;

      if (window.scrollY < homeHeight - 80) {
        setIsHome(true);
        setVisible(true);
      } else {
        setIsHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SCROLL BEHAVIOR (ONLY OUTSIDE HOME)
  useEffect(() => {
    const handleScroll = () => {
      if (isHome) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scroll down
      } else {
        setVisible(true); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full bg-black/70 backdrop-blur-xl border-b border-green-400/20">
          <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center justify-between">

            {/* 🔥 LOGO */}
            <div className="flex items-center gap-2">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="w-8 h-8 mix-blend-screen drop-shadow-[0_0_6px_rgba(0,255,100,0.7)]"
              />

              <h1 className="font-mono text-green-400 text-lg tracking-wide">
                &gt; Sandeep
              </h1>
            </div>

            {/* 🔥 LINKS */}
            <div className="hidden lg:flex items-center gap-8 font-mono text-sm">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-gray-400
                    hover:text-green-400
                    transition
                    hover:drop-shadow-[0_0_10px_rgba(0,255,100,0.6)]
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* 🔥 RIGHT */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="
                  hidden lg:block px-5 py-2 rounded-lg
                  text-black font-semibold
                  bg-green-400
                  hover:scale-105
                  hover:shadow-[0_0_20px_rgba(0,255,100,0.6)]
                  transition
                "
              >
                Contact()
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden text-green-400 text-3xl"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
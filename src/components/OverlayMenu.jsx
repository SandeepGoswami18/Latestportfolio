import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  const origin = isMobile ? "95% 8%" : "50% 8%";

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 flex items-center justify-center z-[9999]
            bg-black/95 backdrop-blur-xl
          "
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* 🔥 CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              absolute top-6 right-6 text-green-400 text-3xl
              hover:rotate-90 hover:scale-110
              transition
            "
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* 🔥 MENU ITEMS */}
          <ul className="space-y-8 text-center font-mono">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="
                    text-3xl sm:text-4xl font-semibold
                    text-gray-400
                    hover:text-green-400
                    hover:scale-110
                    transition
                    hover:drop-shadow-[0_0_15px_rgba(0,255,100,0.7)]
                  "
                >
                  &gt; {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* 🔥 BOTTOM TERMINAL TEXT */}
          <p className="absolute bottom-6 text-xs text-gray-500 font-mono">
            &gt; navigation_menu()
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
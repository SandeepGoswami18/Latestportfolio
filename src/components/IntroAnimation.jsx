import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function IntroAnimation({ onFinish }) {
  const steps = [
    "Initializing System...",
    "Loading Modules...",
    "Importing Intelligence...",
    "Training Neural Network...",
    "Compiling Code...",
    "Optimizing Algorithms...",
    "Launching Portfolio...",
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < steps.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(endTimer);
    }
  }, [index]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-green-400 font-mono overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔥 Loading Text */}
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg md:text-2xl mb-6"
          >
            {steps[index]}
          </motion.div>

          {/* 🔥 Fake Terminal Lines */}
          <div className="text-xs md:text-sm text-green-500 space-y-1">
            <p> npm install intelligence</p>
            <p> importing AI modules...</p>
            <p> neural network ready ✔</p>
            <p> system status: ONLINE</p>
          </div>

          {/* 🔥 Blinking Cursor */}
          <motion.span
            className="mt-6 text-xl"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            █
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

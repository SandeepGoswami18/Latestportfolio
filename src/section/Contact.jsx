import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticleBackground.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "",
    idea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 pt-24"
    >
      <ParticlesBackground />

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[350px] h-[350px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-yellow-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT SIDE (AI IMAGE) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/images/Astra.png"
            alt="AI"
            className="
              w-72 md:w-[420px] rounded-2xl 
              border border-green-400/20
              shadow-[0_0_30px_rgba(0,255,100,0.15)]
            "
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            w-full md:w-1/2 
            bg-black/70 backdrop-blur-xl 
            p-8 rounded-2xl 
            border border-green-400/20
            shadow-[0_0_25px_rgba(0,255,100,0.08)]
          "
        >
          {/* 🔥 TERMINAL HEADING */}
          <h2 className="text-2xl md:text-3xl font-mono text-green-400 mb-6">
            &gt; Initiate_Connection()
          </h2>

          {/* FORM */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            className="flex flex-col gap-5 font-mono"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="> Enter Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-black/40 border border-green-400/20 focus:border-green-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="> Enter Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-black/40 border border-green-400/20 focus:border-green-400 outline-none"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-3 rounded-md bg-black/40 border border-green-400/20 text-green-300 outline-none"
            >
              <option>Web Development</option>
              <option>AI/ML Project</option>
              <option>DSA Guidance</option>
            </select>

            <input
              type="number"
              name="budget"
              placeholder="> Budget (Optional)"
              value={formData.budget}
              onChange={handleChange}
              className="p-3 rounded-md bg-black/40 border border-green-400/20 focus:border-green-400 outline-none"
            />

            <textarea
              name="idea"
              rows="4"
              placeholder="> Describe Your Idea..."
              required
              value={formData.idea}
              onChange={handleChange}
              className="p-3 rounded-md bg-black/40 border border-green-400/20 focus:border-green-400 outline-none"
            />

            {/* 🔥 BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="
                py-3 rounded-md font-semibold
                bg-gradient-to-r from-green-400 to-yellow-400
                text-black
                shadow-[0_0_20px_rgba(0,255,100,0.3)]
              "
            >
              EXECUTE SEND()
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
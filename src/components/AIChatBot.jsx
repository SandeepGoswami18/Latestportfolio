import React, { useEffect, useMemo, useRef, useState } from "react";

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const listRef = useRef(null);

  const nowTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "Hi 👋 I’m your AI Assistant.\n\nTry: skills | projects | contact",
        time: nowTime(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const getReply = (text) => {
    const t = text.toLowerCase();

    if (t.includes("skills"))
      return "🚀 Skills:\nReact, Tailwind, JS, DSA";
    if (t.includes("projects"))
      return "📂 Projects:\nPortfolio, AI Chatbot, DSA Practice";
    if (t.includes("contact"))
      return "📞 Contact:\nGitHub / LinkedIn";

    return "🤖 Try: skills | projects | contact";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input, time: nowTime() };
    setMessages((prev) => [...prev, userMsg]);

    const reply = getReply(input);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: reply, time: nowTime() },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* 🔥 FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-[9999]
          w-14 h-14 rounded-full
          bg-green-400 text-black text-xl
          shadow-[0_0_25px_rgba(0,255,100,0.6)]
          hover:scale-110 transition
        "
      >
        🤖
      </button>

      {/* 🔥 CHAT BOX */}
      {open && (
        <div
          className="
            fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6
            w-auto sm:w-80 md:w-[360px]
            max-w-[95vw]
            bg-black/90 backdrop-blur-xl
            border border-green-400/20
            rounded-2xl shadow-xl z-[9999]
            flex flex-col
          "
        >
          {/* HEADER */}
          <div className="px-4 py-3 border-b border-green-400/20 flex justify-between items-center">
            <h3 className="text-green-400 font-mono">&gt; AI_Assistant()</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white"
            >
              ✖
            </button>
          </div>

          {/* MESSAGES */}
          <div
            ref={listRef}
            className="h-64 overflow-y-auto p-3 space-y-2"
          >
            {messages.map((m, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                    m.from === "user"
                      ? "ml-auto bg-green-400 text-black"
                      : "mr-auto bg-white/10 text-white"
                  }`}
                >
                  {m.text}
                </div>

                <p className="text-[10px] text-white/40 mt-1">
                  {m.time}
                </p>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t border-green-400/20 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type_command..."
              className="
                flex-1 px-3 py-2 rounded-xl
                bg-white/10 text-white outline-none text-sm
                border border-green-400/20
                focus:border-green-400/60
              "
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="
                px-4 py-2 rounded-xl
                bg-green-400 text-black font-semibold
                hover:scale-105 transition
              "
            >
              Run
            </button>
          </div>
        </div>
      )}
    </>
  );
}
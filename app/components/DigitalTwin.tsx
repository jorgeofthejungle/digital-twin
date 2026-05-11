"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Loader2, Minimize2 } from "lucide-react";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What do you specialize in?",
  "How does your process work?",
  "What's your tech stack?",
  "Are you available for hire?",
];

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 w-7 h-7 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mt-0.5">
        <Bot size={12} />
      </div>
      <div className="bg-brand-raised border border-brand-border rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-slate-500"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: "assistant",
        content: "Hey, I'm Josh's digital twin. Ask me anything about his work, process, or background — I'll answer as him.",
      }]);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open, messages.length]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const apiMessages: MessageParam[] = newMessages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      const reply: string = res.ok ? data.reply : "Something went wrong. Try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-brand-cyan text-brand-deep font-display font-bold text-sm shadow-glow-cyan"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={open ? { opacity: 0, pointerEvents: "none" } : { opacity: 1, pointerEvents: "auto" }}
        transition={{ duration: 0.2 }}
        aria-label="Chat with Josh's digital twin"
      >
        <Bot size={18} />
        Chat with my Digital Twin
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-6 right-6 z-[70] w-[360px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden border border-brand-border shadow-2xl"
            style={{ height: "560px", maxHeight: "calc(100vh - 5rem)" }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-brand-raised border-b border-brand-border shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center">
                    <span className="font-display font-bold text-brand-cyan text-sm">JB</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-green border-2 border-brand-raised animate-dot-pulse" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-slate-100">Joshua Burgos</p>
                  <p className="text-xs text-slate-500">Digital Twin · Always on</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-600 hover:text-slate-300 transition-colors p-1"
                aria-label="Close chat"
              >
                <Minimize2 size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-brand-mid">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                      msg.role === "user"
                        ? "bg-brand-blue/20 border border-brand-blue/30 text-brand-blue"
                        : "bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan"
                    }`}
                  >
                    {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-blue/20 border border-brand-blue/20 text-slate-200 rounded-tr-sm"
                        : "bg-brand-raised border border-brand-border text-slate-300 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Suggested questions — shown only on opening message */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-col gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-left text-xs text-brand-cyan/80 border border-brand-cyan/20 rounded-xl px-3 py-2 hover:bg-brand-cyan/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-brand-border bg-brand-raised shrink-0 flex items-center gap-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 bg-brand-mid border border-brand-border rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-cyan/40 focus:ring-1 focus:ring-brand-cyan/20 transition-colors disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || loading}
                className="shrink-0 w-10 h-10 rounded-xl bg-brand-cyan text-brand-deep flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

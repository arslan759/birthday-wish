"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";
import { ShowerAnimation } from "./ShowerAnimation";
import { BirthdayCake } from "./BirthdayCake";

export function InteractiveSurprise() {
  const [stage, setStage] = useState<"initial" | "opened" | "message">("initial");

  const handleOpenClick = () => {
    setStage("opened");
  };

  const handleCandleBlown = () => {
    // Wait briefly after animation finishes before showing message
    setTimeout(() => {
      setStage("message");
    }, 1500);
  };

  return (
    <>
      <ShowerAnimation trigger={stage === "opened"} />
      
      <div className="relative flex flex-col items-center justify-center my-16 z-20 w-full">
        <AnimatePresence mode="wait">
          {stage === "initial" && (
            <motion.button
              key="gift-btn"
              className="group relative flex flex-col items-center hover:scale-105 transition-transform"
              onClick={handleOpenClick}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, rotate: 180, y: -50 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-red-400 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-white/70 backdrop-blur-md p-8 shadow-2xl border-4 border-red-300" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"}}>
                <Gift className="w-20 h-20 text-red-600 mb-2 drop-shadow-lg" />
              </div>
              <motion.div
                className="mt-6 text-2xl font-bold text-white bg-gradient-to-r from-red-500 to-pink-600 px-8 py-3 rounded-full shadow-lg border-2 border-white/50"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Open Here 🎀
              </motion.div>
            </motion.button>
          )}

          {stage === "opened" && (
            <motion.div
              key="cake-view"
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border-4 border-red-200 w-full max-w-2xl text-center relative"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-2 font-serif">Make a Wish! ✨</h2>
              <p className="text-red-400 text-lg font-medium">Blowing out the candle reveals a surprise...</p>
              
              <BirthdayCake onBlowOut={handleCandleBlown} />
              
            </motion.div>
          )}

          {stage === "message" && (
            <motion.div
              key="surprise-content"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 12 }}
              className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] shadow-2xl border-2 border-red-300 w-full max-w-2xl text-center relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-10 -right-10 text-yellow-300 opacity-30 pointer-events-none"
              >
                <Sparkles size={150} />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Heart className="w-20 h-20 text-red-600 fill-red-600 mx-auto mb-8 drop-shadow-xl" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-6 tracking-wide font-serif">
                I May never be able to tell you this...
              </h2>
              <div className="text-lg md:text-xl text-red-900/90 leading-relaxed font-medium space-y-3 text-left max-w-lg mx-auto">
                <p>But I feel like, I have already married you.</p>
                <p>Not in a temple, not in front of people but, Deep inside my heart.</p>
                <p>I married your soul the day you understood my silence.</p>
                <p>I married your smile when it healed my chaos.</p>
                <p>I married your presence when it became my peace.</p>
                <p>Because, Love isn't about rituals or rings.</p>
                <p>It's about choosing each other every single day,<br />Through every fight, every tears, every distance.</p>
                <p>When two souls stay loyal, when they never give up on each other,<br />That's marriage, Pure, Real, Eternal</p>
              </div>
              
              <motion.div
                className="mt-10 pt-8 border-t-2 border-red-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-3xl font-bold text-red-500 font-serif italic">
                  Happy Birthday
                </p>
                 <p className="text-2xl md:text-4xl text-rose-700 font-bold font-serif text-right mt-6">
                  Love,<br />Fizza
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}


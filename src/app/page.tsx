"use client";

import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";
import { InteractiveSurprise } from "@/components/InteractiveSurprise";
import { Sparkles, Stars, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-red-50 via-pink-100 to-red-100">
      <FloatingHearts />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl space-y-12 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 text-rose-400 opacity-60"
          >
            <Stars size={54} />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 hover:from-rose-400 to-pink-600 drop-shadow-sm font-serif leading-tight py-4">
            Happy Birthday,
            <br />
            <span className="text-7xl md:text-9xl mt-2 block filter drop-shadow-md">Saad</span>
          </h1>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 text-yellow-500 opacity-80"
          >
            <Sparkles size={48} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="bg-white/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white/50 max-w-2xl mx-auto"
        >
          <div className="text-xl md:text-2xl text-rose-900 font-medium leading-relaxed font-sans text-left space-y-4">
            <p>
              Sometimes I struggle to find the right words to explain how much you really mean to me. You are not just someone I love, you are someone who changed my life in ways I never expected.
            </p>
            <p>
              Having you feels like home, like safety, like peace. You make ordinary days feel lighter just by being there. Thank you for being you, for choosing me, for loving me.
            </p>
            <p className="italic text-rose-700 font-bold">
              I love you more than I know how to say...♥️
            </p>
          </div>
          <p className="text-2xl md:text-4xl text-rose-700 font-bold font-serif text-right mt-6">
            Yours forever,<br />Fizza
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="w-full flex justify-center pt-8"
        >
          <InteractiveSurprise />
        </motion.div>
      </div>
    </main>
  );
}

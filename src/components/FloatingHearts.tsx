"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate some random hearts
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-10%]"
          initial={{ y: 0, x: 0, opacity: 0, scale: 0 }}
          animate={{
            y: "-110vh",
            x: Math.random() * 40 - 20, // Drift left/right
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.8],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: `${heart.left}%` }}
        >
          <Heart
            className="text-red-400 fill-pink-300 drop-shadow-md"
            style={{ width: heart.size, height: heart.size, opacity: 0.8 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Flower2 } from "lucide-react";

export function ShowerAnimation({ trigger }: { trigger: boolean }) {
  const [items, setItems] = useState<{ id: number; left: number; type: "heart" | "flower" }[]>([]);

  useEffect(() => {
    if (trigger) {
      // Create a shower of items when triggered
      const newItems = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        type: Math.random() > 0.5 ? ("heart" as const) : ("flower" as const),
      }));
      setItems(newItems);
      
      // Clean up after animation finishes to prevent DOM bloat
      const timer = setTimeout(() => {
        setItems([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute top-[-10%]"
          initial={{ y: 0, x: 0, opacity: 1, scale: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: Math.random() * 200 - 100, // Drift left/right while falling
            opacity: [1, 1, 0],
            scale: [0, 1.5, 1],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeIn",
          }}
          style={{ left: `${item.left}%` }}
        >
          {item.type === "heart" ? (
            <Heart className="text-red-500 fill-red-500 drop-shadow-md w-8 h-8 md:w-12 md:h-12" />
          ) : (
            <Flower2 className="text-pink-400 fill-pink-300 drop-shadow-md w-8 h-8 md:w-12 md:h-12" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

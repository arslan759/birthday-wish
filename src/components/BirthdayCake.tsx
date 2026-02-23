"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wind } from "lucide-react";

export function BirthdayCake({ 
  onBlowOut 
}: { 
  onBlowOut: () => void 
}) {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlow = () => {
    setIsBlowing(true);
    // Simulate blowing duration
    setTimeout(() => {
      setIsBlownOut(true);
      setIsBlowing(false);
      onBlowOut();
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      {/* The Cake */}
      <div className="relative w-48 h-32 mt-12">
        {/* Candle */}
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-4 h-12 bg-white rounded-t-sm shadow-inner z-10 flex flex-col items-center">
            {/* Stripes on candle */}
            <div className="w-full h-2 bg-red-400 mt-2 rotate-12"></div>
            <div className="w-full h-2 bg-red-400 mt-2 rotate-12"></div>
            
          {/* Flame */}
          {!isBlownOut && (
            <motion.div
              className="absolute top-[-24px] w-6 h-8 bg-gradient-to-t from-yellow-300 via-orange-400 to-red-500 rounded-full"
              style={{
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                boxShadow: "0 0 15px 5px rgba(255, 165, 0, 0.6)",
                transformOrigin: "bottom center"
              }}
              animate={{
                scale: isBlowing ? [1, 0.5, 0.2] : [1, 1.1, 0.9, 1],
                rotate: isBlowing ? [0, -20, 20, -10] : [0, -5, 5, 0],
                opacity: isBlowing ? 0 : 1
              }}
              transition={{
                duration: isBlowing ? 1 : 0.5,
                repeat: isBlowing ? 0 : Infinity,
                repeatType: "reverse"
              }}
            />
          )}

          {/* Smoke after blowing out */}
          {isBlownOut && (
            <motion.div
              className="absolute top-[-10px] w-2 h-2 bg-gray-400 rounded-full"
              initial={{ opacity: 1, scale: 1, y: 0 }}
              animate={{ opacity: 0, scale: 3, y: -40, x: [0, -10, 10, -5] }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          )}
        </div>

        {/* Top layer (Frosting) */}
        <div className="absolute top-0 w-full h-12 bg-pink-100 rounded-[50%] z-0 border-b-4 border-pink-200">
             {/* Drips */}
             <div className="absolute top-8 left-4 w-6 h-8 bg-pink-100 rounded-full"></div>
             <div className="absolute top-8 left-16 w-5 h-6 bg-pink-100 rounded-full"></div>
             <div className="absolute top-8 right-12 w-8 h-10 bg-pink-100 rounded-full"></div>
        </div>
        
        {/* Main body (Cake layer) */}
        <div className="absolute top-6 w-full h-20 bg-red-400 rounded-b-xl shadow-lg border-x-4 border-b-4 border-red-500 flex items-center justify-center overflow-hidden">
            {/* Inner layer stripe */}
            <div className="w-full h-4 bg-pink-800 opacity-20"></div>
        </div>

        {/* Plate */}
        <div className="absolute bottom-[-10px] left-[-10%] w-[120%] h-8 bg-gray-200 rounded-[50%] -z-10 shadow-xl border-b-4 border-gray-300"></div>
      </div>

      {/* Blow Button */}
      <AnimatePresence>
        {!isBlownOut && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1 }}
            onClick={handleBlow}
            disabled={isBlowing}
            className="mt-12 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-lg"
          >
            <Wind size={24} className={isBlowing ? "animate-bounce" : ""} />
            {isBlowing ? "Blowing..." : "Blow the candle!"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
